# 🌍 Lux Mundi - Blog de Viajes y Fotografías

Lux Mundi es una aplicación de blog de viajes y fotografía diseñada con principios de sostenibilidad, accesibilidad y eficiencia energética en mente. Es una plataforma digital de bajo impacto ambiental y una experiencia de usuario inclusiva. Permite la creación y visualización de entradas de blog sobre experiencias de viaje, con funcionalidades específicas para administradores y usuarios.

En **Lux Mundi**, somos un equipo de cinco apasionados por los viajes y la fotografía, comprometidos a ofrecer una plataforma donde puedas explorar el mundo a través de relatos, consejos y experiencias compartidas. Cada miembro aporta una perspectiva única, creando una comunidad global de amantes del turismo y la aventura.

- **Jenny** (🇵🇪 Perú): Captura la esencia de cada lugar y cultura a través de su lente, buscando transmitir la belleza de lo inesperado en sus fotos.
- **Jhon** (🇨🇴 Colombia): Enfocado en capturar momentos espontáneos y conexiones humanas, ofrece una perspectiva auténtica y cercana de cada destino.
- **César** (🇪🇸 España): Apasionado por la arquitectura y la historia, utiliza su cámara para inmortalizar la evolución de los paisajes humanos.
- **Juliana** (🇧🇷 Brasil): A través de la fotografía de paisajes y fauna, conecta con la naturaleza y las culturas indígenas.
- **Mónica** (🇵🇾 Paraguay): Explora la diversidad cultural en retratos y paisajes urbanos, reflejando la riqueza de cada destino.

Este proyecto tiene como objetivo inspirar a viajeros de todo el mundo a descubrir nuevos destinos y compartir sus historias. Únete a nosotros y empieza a explorar el mundo con Lux Mundi.

---

## ✨ Funcionalidades

### Roles y Permisos

- **Admin:** 
  - Puede crear, leer, actualizar y eliminar (CRUD) entradas del blog.
  - Bonus: Interfaz para cambiar el rol de cualquier usuario a admin.

- **User:**
  - Puede visualizar todas las entradas del blog.
  - Bonus: Cada entrada tiene un botón de "me gusta" 

### Futuras Implementaciones

- **Likes:** Almacenamiento en la base de datos de los "likes" para registrar qué usuarios han dado "like" a qué posts. Esto permitirá tanto incrementar como decrementar los "likes" de manera precisa y evitar que el mismo usuario pueda dar múltiples "likes" a un mismo post.
- **Comentarios:** Implementar que los usuarios puedan comentar las publicaciones.
- **Publicaciones:** Permitir que los usuarios puedan subir sus propias publicaciones.
- **Bonus:** Puede crear entradas.
- **Bonus:** Pruebas en el frontend utilizando Mock Service Worker para probar las llamadas a la API.
--**Testing:** Mock Service Worker para simular llamadas API en el frontend.
--**Avatar Usuario:** Permitir al usuario subir su avatar.


## 📋 Stack Tecnológico

- **Frontend:** React
- **Backend:** TypeScript con Node y Express
- **Base de Datos:** SQL
- **Gestión de Sesiones:** `bcrypt` para encriptar contraseñas y `jwt` para la autenticación de usuarios.
- **Validaciones:** Ambos stacks deben incluir validaciones.

## 🛠️ Modalidades Pedagógicas

Este proyecto fullstack se desarrolla en grupo utilizando metodologías ágiles, integrando las siguientes tecnologías y prácticas:

- **Frontend:** React para la interfaz de usuario.
- **Backend:** Node y Express programado en TypeScript para una arquitectura modular y escalable.
- **Gestión de Base de Datos:** La aplicación está conectada a una base de datos SQL.

---

## ⚙️ Características de Diseño

1. **Diseño de Bajo Consumo:** La aplicación está diseñada en modo oscuro para reducir el consumo de energía y seguir los principios de Green Digital Skills.
2. **Accesibilidad y UX sin Barreras:**
   - Colores accesibles y energéticamente eficientes.
   - Interfaz limpia y sin elementos invasivos como pop-ups.
   - Uso de imágenes ligeras y SVGs para optimizar la carga.
   - Fuentes del sistema en lugar de fuentes personalizadas para mejorar la eficiencia.
   - Flujo de usuario intuitivo y fácil de seguir.
   - Animaciones y videos solo cuando aporten valor real.
3. **Principios de Diseño JEDI** (Justicia, Equidad, Diversidad, Inclusión): El diseño del blog sigue estos principios para ofrecer una experiencia inclusiva.

## 🧪 Testing

- **Requerido:** Pruebas en el backend.

---

## 🚀 Instalación y Clonación del Proyecto 

### Prerrequisitos 

Asegúrate de tener instalados los siguientes programas en tu sistema: 

- [Node.js](https://nodejs.org/) 
- [Git](https://git-scm.com/) 

### Clonar el Repositorio Para clonar el repositorio, abre tu terminal y ejecuta el siguiente comando:

```bash git clone https://github.com/tuusuario/luxmundi.git cd lux-mundi ```

### Instalar Dependencia

```bash npm install ```

### Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
```bash 
PORT=3000
DB_HOST=localhost
DB_USER=tuusuario
DB_PASSWORD=tucontraseña
DB_NAME=luxmundi
JWT_SECRET=tu_secreto_jwt
```
### Ejecutar la Aplicación

Para iniciar la aplicación, modo desarrollo:

```bash run dev ```

Esto iniciará la aplicación.

## 🔗 Conecta con Nosotros en LinkedIn y GitHub

Aquí puedes encontrar nuestros perfiles individuales:

- **Jenny**
  - [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jennytellogarc%C3%ADa/)
  - [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat&logo=github&logoColor=white)](https://github.com/jennyfer85)
- **Jhon**
  - [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jhon-smith-grisales/)
  - [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat&logo=github&logoColor=white)](https://github.com/Yamete-Kudasai)
- **César**
  - [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cesarmercadoh/)
  - [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat&logo=github&logoColor=white)](https://github.com/merkandez)
- **Juliana**
  - [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/julianaamrm/)
  - [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat&logo=github&logoColor=white)](https://github.com/juamrm)
- **Mónica**
  - [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/monicasernasantander/)
  - [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat&logo=github&logoColor=white)](https://github.com/monicaSernaS)

---

> **Proyecto desarrollado en equipo bajo metodologías ágiles con el objetivo de crear una aplicación sostenible, accesible e inclusiva.**
