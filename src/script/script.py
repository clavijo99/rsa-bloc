from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.exceptions import InvalidSignature
import pathlib

# 1. Generar par de claves
def generar_claves():
    clave_privada = rsa.generate_private_key(
        public_exponent=65537,
        key_size=2048
    )
    clave_publica = clave_privada.public_key()
    return clave_privada, clave_publica

# 2. Guardar claves en disco
def guardar_claves(clave_privada, clave_publica):
    with open("clave_privada.pem", "wb") as f:
        f.write(clave_privada.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.TraditionalOpenSSL,
            encryption_algorithm=serialization.NoEncryption()
        ))

    with open("clave_publica.pem", "wb") as f:
        f.write(clave_publica.public_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PublicFormat.SubjectPublicKeyInfo
        ))

# 3. Firmar documento
def firmar_documento(ruta_pdf, clave_privada):
    with open(ruta_pdf, "rb") as f:
        datos = f.read()

    firma = clave_privada.sign(
        datos,
        padding.PKCS1v15(),
        hashes.SHA256()
    )

    with open("firma.bin", "wb") as f:
        f.write(firma)

    print("✅ Documento firmado exitosamente.")

# 4. Verificar firma
def verificar_firma(ruta_pdf, clave_publica):
    with open(ruta_pdf, "rb") as f:
        datos = f.read()

    with open("firma.bin", "rb") as f:
        firma = f.read()

    try:
        clave_publica.verify(
            firma,
            datos,
            padding.PKCS1v15(),
            hashes.SHA256()
        )
        print("🔒 Firma válida: El documento es auténtico e íntegro.")
    except InvalidSignature:
        print("❌ Firma inválida: El documento ha sido modificado o la firma no es válida.")

# --- Flujo principal ---

# Ruta al documento PDF a firmar (debe existir)
documento = "documento.pdf"

if not pathlib.Path(documento).exists():
    # Crear un PDF de ejemplo si no existe
    with open(documento, "wb") as f:
        f.write(b"%PDF-1.4\n% documento de ejemplo\n...")

clave_privada, clave_publica = generar_claves()
guardar_claves(clave_privada, clave_publica)

firmar_documento(documento, clave_privada)
verificar_firma(documento, clave_publica)
