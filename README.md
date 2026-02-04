# DEVOPS_PRUEBA_CLASE_UC3M

## 🧮 Calculadora React con Vite

Una calculadora sencilla desarrollada con React y Vite, con despliegue automatizado a GitHub Pages.

### 🚀 Características

- Operadores básicos: suma (+), resta (-), multiplicación (×), división (÷)
- Funciones adicionales: porcentaje (%), cambio de signo (+/-)
- Diseño limpio y responsivo
- Despliegue automático a GitHub Pages con GitHub Actions

### 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm

### 🛠️ Comando para crear el proyecto con Vite

Si deseas crear un proyecto similar desde cero, usa:

```bash
npm create vite@latest nombre-proyecto -- --template react
```

### 💻 Instalación y desarrollo local

1. Clona el repositorio:
```bash
git clone https://github.com/100472753/DEVOPS_PRUEBA_CLASE_UC3M.git
cd DEVOPS_PRUEBA_CLASE_UC3M
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### 🏗️ Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `/dist` |
| `npm run preview` | Vista previa de la versión de producción |
| `npm run lint` | Ejecuta el linter ESLint |

### 📦 Estructura del proyecto

```
DEVOPS_PRUEBA_CLASE_UC3M/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions para despliegue
├── src/
│   ├── components/
│   │   ├── Calculator.jsx  # Componente principal
│   │   └── Calculator.css  # Estilos del componente
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### 🌐 Despliegue a GitHub Pages

El proyecto incluye un workflow de GitHub Actions que despliega automáticamente a GitHub Pages cada vez que se hace push a `main`.

#### Configuración inicial en GitHub:

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El despliegue se realizará automáticamente en cada push a `main`

#### 3 comandos finales para vincular y subir a GitHub:

Si estás creando el proyecto desde cero y quieres vincularlo a tu repositorio de GitHub:

```bash
# 1. Inicializa el repositorio git (si no está inicializado)
git init

# 2. Vincula tu repositorio local con el repositorio remoto de GitHub
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 3. Añade todos los archivos, haz commit y súbelos a la rama main
git add .
git commit -m "Initial commit: React calculator with Vite"
git push -u origin main
```

### 🔗 Demo en vivo

Visita la calculadora en: https://100472753.github.io/DEVOPS_PRUEBA_CLASE_UC3M/

### 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
