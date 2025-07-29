---

```markdown
# 🛡️ Firma Digital de Documentos PDF con RSA

Este proyecto demuestra cómo **firmar digitalmente un archivo PDF usando RSA** y cómo verificar la firma utilizando criptografía de clave pública. Es un ejemplo práctico de cómo funcionan las firmas digitales en plataformas de gobierno electrónico, aplicaciones bancarias y sistemas seguros.

---

## 📁 Estructura del Proyecto

```

script/
├── documento.pdf         # Documento PDF de ejemplo
├── firma.bin             # Firma digital generada
├── clave\_privada.pem     # Clave privada RSA
├── clave\_publica.pem     # Clave pública RSA
├── script.py             # Script principal de firma y verificación
└── README.md             # Este archivo

````

---

## 🚀 Requisitos

- Python 3.6 o superior
- pip (gestor de paquetes)

### 📦 Instalación de dependencias

```bash
pip install cryptography
````

---

## ▶️ Ejecución paso a paso

1. **Clona o descarga este repositorio:**

```bash
git clone https://github.com/clavijo99/bloc.git
cd bloc/src/script/
```

2. **Agrega tu archivo `documento.pdf` (o usa el que se crea automáticamente si no existe).**

3. **Ejecuta el script:**

```bash
python script.py
```

Este script:

* Generará un par de claves (`clave_privada.pem`, `clave_publica.pem`).
* Firmará el archivo PDF con la clave privada.
* Verificará la firma digital con la clave pública.

---

## 🔐 ¿Qué hace el script?

| Paso | Acción                                    |
| ---- | ----------------------------------------- |
| 1️⃣  | Genera un par de claves RSA de 2048 bits  |
| 2️⃣  | Firma un archivo PDF con la clave privada |
| 3️⃣  | Verifica la firma con la clave pública    |
| 4️⃣  | Informa si la firma es válida o no        |

---

## ✅ Ejemplo de salida

```
✅ Documento firmado exitosamente.
🔒 Firma válida: El documento es auténtico e íntegro.
```

