import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Key, Shield, Lightbulb, Code, CheckCircle, XCircle, BarChart2, Users, BookOpen, AlertTriangle } from 'lucide-react';
import code from '../assets/code.png'

const Section = ({ id, title, children, icon: Icon }) => (
  <motion.section
    id={id}
    className="mb-12 p-6 bg-white rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
      {Icon && <Icon className="w-8 h-8 text-blue-600" />}
      {title}
    </h2>
    {children}
  </motion.section>
);

const BlogPost = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto my-10 p-4 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-xl mb-12 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Criptosistemas de Clave Pública: <br /> Fundamentos, Funcionamiento y Aplicaciones
        </h1>
        <p className="text-xl font-light opacity-90">
          La criptografía es el corazón de la seguridad digital moderna, y entre sus pilares fundamentales se encuentran los criptosistemas de clave pública. Estos sistemas permiten comunicaciones seguras sin necesidad de compartir una clave secreta previa, resolviendo uno de los grandes desafíos de la criptografía tradicional.
        </p>
      </motion.div>

      <Section id="fundamentos" title="¿Qué es un Criptosistema de Clave Pública?" icon={Lock}>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Un criptosistema de clave pública, también conocido como criptografía asimétrica, es un sistema criptográfico que utiliza un par de claves: una clave pública para cifrar la información y una clave privada para descifrarla. Estas claves están matemáticamente relacionadas, pero es computacionalmente inviable deducir la clave privada a partir de la pública.
        </p>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Este enfoque permite que cualquier persona cifre mensajes usando la clave pública del receptor, pero solo el receptor —que posee la clave privada— puede descifrarlos. También puede utilizarse en sentido inverso para firmar digitalmente documentos.
        </p>
      </Section>

      <Section id="algoritmos" title="¿Cómo Funciona y Cuáles Son sus Algoritmos Representativos?" icon={Code}>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          El funcionamiento básico de un criptosistema de clave pública se resume en los siguientes pasos:
        </p>
        <ol className="list-decimal list-inside text-gray-700 text-lg mb-6 ml-4 leading-relaxed space-y-2">
          <li><strong>Generación de claves:</strong> el usuario genera un par de claves (pública y privada).</li>
          <li><strong>Distribución de la clave pública:</strong> se publica o comparte libremente.</li>
          <li><strong>Cifrado:</strong> cualquier persona puede cifrar un mensaje usando la clave pública del destinatario.</li>
          <li><strong>Descifrado:</strong> el destinatario utiliza su clave privada para descifrar el mensaje.</li>
        </ol>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Principales algoritmos:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6 ml-4 leading-relaxed space-y-2">
          <li><strong>RSA (Rivest-Shamir-Adleman):</strong> Basado en la dificultad de factorizar números grandes. Es uno de los algoritmos más utilizados.</li>
          <li><strong>ElGamal:</strong> Se basa en el problema del logaritmo discreto.</li>
          <li><strong>ECC (Elliptic Curve Cryptography):</strong> Utiliza propiedades matemáticas de las curvas elípticas, ofreciendo seguridad con claves más pequeñas.</li>
          <li><strong>DSA (Digital Signature Algorithm):</strong> Usado principalmente para firmas digitales.</li>
        </ul>
       
      </Section>

      <Section id="ventajas-desventajas" title="Ventajas, Desventajas y Comparación con la Criptografía Simétrica" icon={BarChart2}>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Característica</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Criptografía Asimétrica</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Criptografía Simétrica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b text-gray-700">Número de claves</td>
                <td className="py-3 px-4 border-b text-gray-700">Par de claves (pública y privada)</td>
                <td className="py-3 px-4 border-b text-gray-700">Una sola clave compartida</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-gray-700">Distribución de clave</td>
                <td className="py-3 px-4 border-b text-gray-700">Más sencilla y segura</td>
                <td className="py-3 px-4 border-b text-gray-700">Requiere canal seguro para compartir clave</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-gray-700">Velocidad</td>
                <td className="py-3 px-4 border-b text-gray-700">Más lenta</td>
                <td className="py-3 px-4 border-b text-gray-700">Muy rápida</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-gray-700">Seguridad</td>
                <td className="py-3 px-4 border-b text-gray-700">Alta, especialmente para transmisión</td>
                <td className="py-3 px-4 border-b text-gray-700">Alta, pero con riesgos si se filtra la clave</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-gray-700">Uso común</td>
                <td className="py-3 px-4 border-b text-gray-700">Cifrado inicial, intercambio de claves, firma digital</td>
                <td className="py-3 px-4 border-b text-gray-700">Cifrado de grandes volúmenes de datos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2"><CheckCircle className="w-6 h-6 text-green-600" /> Ventajas del sistema de clave pública:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6 ml-4 leading-relaxed space-y-2">
          <li>Permite establecer comunicaciones seguras sin necesidad de compartir una clave secreta previamente.</li>
          <li>Facilita la autenticación y las firmas digitales.</li>
          <li>Mejora la escalabilidad de sistemas criptográficos.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2"><XCircle className="w-6 h-6 text-red-600" /> Desventajas:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6 ml-4 leading-relaxed space-y-2">
          <li>Más lento en comparación con los sistemas simétricos.</li>
          <li>Requiere mayor potencia computacional.</li>
          <li>Su seguridad depende de problemas matemáticos que podrían volverse vulnerables con la computación cuántica.</li>
        </ul>
      </Section>

      <Section id="caso-practico" title="Caso Práctico de Aplicación" icon={Users}>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          <strong>Escenario:</strong> Firma digital de un documento en una plataforma de gobierno electrónico.
        </p>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          <strong>Algoritmo usado:</strong> RSA
        </p>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          <strong>Cómo funciona:</strong>
        </p>
        <ol className="list-decimal list-inside text-gray-700 text-lg mb-6 ml-4 leading-relaxed space-y-2">
          <li>El ciudadano genera un par de claves (pública y privada).</li>
          <li>Firma un documento PDF con su clave privada (firma digital).</li>
          <li>La plataforma del gobierno, al recibir el documento, utiliza la clave pública del ciudadano para verificar la firma.</li>
          <li>Si la verificación es exitosa, se asegura la integridad y la autenticidad del documento.</li>
        </ol>
        <img src={code} alt="Ejemplo de Firma Digital" className="rounded-lg shadow-md my-6 w-full" />
        <p className="text-sm text-gray-500 text-center mb-10">
          ejemplo para firmar un documento
        </p>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Este mismo principio se aplica en los certificados digitales, correos cifrados, aplicaciones bancarias y comunicaciones HTTPS.
        </p>
      </Section>

      <Section id="recomendaciones" title="Observaciones y Recomendaciones para su Implementación" icon={Lightbulb}>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6 ml-4 leading-relaxed space-y-2">
          <li><strong>Mantener segura la clave privada:</strong> Nunca debe almacenarse en lugares no protegidos o compartirse.</li>
          <li><strong>Usar certificados digitales:</strong> Empleados por entidades certificadoras para verificar la autenticidad de las claves públicas.</li>
          <li><strong>Combinar con criptografía simétrica:</strong> Para eficiencia, muchos sistemas usan criptografía asimétrica para intercambiar claves y luego criptografía simétrica para cifrar los datos (ejemplo: TLS/SSL).</li>
          <li><strong>Actualizar algoritmos con el tiempo:</strong> Estar atentos a posibles vulnerabilidades, especialmente ante avances en computación cuántica.</li>
          <li><strong>Verificar el tamaño de las claves:</strong> Un tamaño insuficiente puede exponer el sistema a ataques de fuerza bruta.</li>
        </ul>
      </Section>

      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-xl mt-12 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <BookOpen className="w-10 h-10" /> Conclusión
        </h2>
        <p className="text-xl font-light opacity-90 leading-relaxed">
          Los criptosistemas de clave pública han revolucionado la forma en que protegemos la información en entornos digitales. A pesar de sus limitaciones, su papel es clave en la autenticación, la confidencialidad y la integridad de los datos. Combinados inteligentemente con métodos simétricos, ofrecen un nivel de seguridad robusto y escalable para las exigencias de la era digital.
        </p>
        <p className="text-lg font-light opacity-80 mt-4">
          ¡Mantente seguro y sigue cifrando!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;