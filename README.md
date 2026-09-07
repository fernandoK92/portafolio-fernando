# Portafolio — Fernando Castro

Portafolio en React con estética de "terminal de desarrollador": el hero escribe
comandos como si fuera una consola, las secciones aparecen con un fade suave al
hacer scroll, y las barras de habilidades se llenan de forma animada.

## Cómo correrlo

Necesitas [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal (normalmente `http://localhost:5173`).

## Cómo personalizarlo

**Solo tienes que editar `src/data.js`.** Ahí están, todos en un solo lugar:

- `perfil` → tu nombre, frase de presentación, correo, GitHub, LinkedIn y las
  líneas que se "escriben" en la terminal del hero.
- `stack` → tus lenguajes y tecnologías, con un nivel del 1 al 5.
- `proyectos` → tus proyectos reales: nombre, descripción, tecnologías usadas,
  link al repositorio y a la demo si la tienes.
- `certificados` → tus certificados y estudios.

No necesitas tocar `App.jsx` ni `App.css` a menos que quieras cambiar el diseño.

## Publicarlo en internet (gratis)

La forma más simple es con [Vercel](https://vercel.com) o [Netlify](https://netlify.com):

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a Vercel o Netlify, conecta tu cuenta de GitHub e importa el repositorio.
3. Ambos detectan Vite automáticamente — solo confirma y despliega.

## Estructura del proyecto

```
portafolio-fernando/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx     (punto de entrada, normalmente no necesitas tocarlo)
    ├── App.jsx       (estructura de las secciones)
    ├── App.css       (estilos y animaciones)
    └── data.js       ← EDITA ESTE ARCHIVO con tu información real
```
