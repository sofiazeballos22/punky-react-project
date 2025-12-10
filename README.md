# Punky® - Proyecto React

Conversión del sitio web de Punky de HTML plano a React + Vite + Tailwind siguiendo la arquitectura **Feature-Sliced Design (FSD)** adaptada a NextAI Gestión.

## 🏛️ Arquitectura

Este proyecto sigue la arquitectura **Feature-Sliced Design (FSD)**, que organiza el código por funcionalidades independientes en lugar de por tipo de archivo.

### Estructura del proyecto

```
src/
  features/               # Features independientes
    hero/
      components/
      pages/
        HeroPage.jsx
      index.js
    comoFunciona/
      pages/
        ComoFuncionaPage.jsx
      index.js
    soluciones/
      components/
        SolutionCard.jsx
      pages/
        SolucionesPage.jsx
      index.js
    fuerzas/
      pages/
        FuerzasPage.jsx
      index.js
    abuelos/
      components/
        ChatMessage.jsx
      pages/
        AbuelosPage.jsx
      index.js
    compras/
      pages/
        ComprasPage.jsx
      index.js
    preguntasFrecuentes/
      pages/
        PreguntasFrecuentesPage.jsx
      index.js

  components/             # Componentes globales
    ui/
      FloatingWhatsAppButton.jsx
      PhoneMockup.jsx
    layout/
      Navbar.jsx
      Footer.jsx

  hooks/                  # Hooks globales reutilizables
    useScrollReveal.js
    useTypingEffect.js

  utils/                  # Funciones auxiliares
    whatsapp.js

  styles/                 # Estilos globales
    globals.css

  App.jsx
  main.jsx
```

### Principios de la arquitectura

✅ **Separación por features**: Cada sección del sitio es un feature independiente
✅ **Carpetas estándar en inglés**: `components/`, `pages/`, `hooks/`, `utils/`, `styles/`
✅ **Nombres derivados del HTML en español**: `abuelos/`, `comoFunciona/`, `soluciones/`
✅ **UI global reutilizable**: Componentes universales en `src/components/ui`
✅ **Rutas absolutas**: Uso de `@/` para imports limpios
✅ **Nomenclatura camelCase**: Para archivos y funciones

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🎨 Mejoras UI implementadas

### 1. Navbar con hover mejorado
- **Antes**: Solo cambiaba el color del texto
- **Ahora**: Background rounded-full con gradient morado sutil y tornasolado
- **Efecto**: Transición suave con contraste en las letras

### 2. Celular flotante con nitidez mejorada
- **Problema**: La animación float causaba pérdida de nitidez en textos
- **Solución**: 
  - `transform: translateZ(0)` para forzar aceleración de hardware
  - `textRendering: optimizeLegibility` en textos
  - `backface-visibility: hidden` para evitar blur

### 3. Sección Abuelos con efecto typing
- **Card más grande**: Espacio optimizado para la conversación
- **Efecto typing letra por letra**: 
  - Abuela (izquierda): Velocidad lenta (60ms/letra)
  - Punky (derecha): Velocidad rápida (30ms/letra)
- **Layout reorganizado**: Conversación visual clara entre usuario y asistente

### 4. Sección Soluciones - Texto estático
- **Problema**: El texto se elevaba en hover creando movimiento molesto
- **Solución**: `transform: translateZ(0)` en el contenido para mantener estático

### 5. Preguntas Frecuentes con transiciones suaves
- **Transiciones suaves**: `transition: all 0.3s ease-in-out`
- **Efecto de iluminación en hover**: Gradient de slate-50 a violet-50/30
- **Scroll suave**: `scroll-behavior: smooth` en HTML

## 🧩 Componentes clave

### Hooks personalizados

#### `useTypingEffect(text, speed, delay)`
Efecto de typing letra por letra para simular escritura en tiempo real.

```jsx
import { useTypingEffect } from '@/hooks/useTypingEffect';

const { displayedText } = useTypingEffect('Hola mundo', 50, 500);
```

#### `useScrollReveal()`
Activa animaciones reveal cuando los elementos entran en el viewport.

```jsx
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();
  // ...
}
```

### Utilidades

#### `openWhatsApp(message)`
Abre WhatsApp con un mensaje predefinido.

```jsx
import { openWhatsApp } from '@/utils/whatsapp';

<button onClick={() => openWhatsApp('Hola Punky!')}>
  Chatear
</button>
```

## 🎨 Colores personalizados

```js
colors: {
  punkyDark: '#1e293b',
  punkyAccentStart: '#8b5cf6',
  punkyAccentEnd: '#6366f1',
}
```

## 📝 Convenciones de código

### Nomenclatura
- **Archivos y carpetas de features**: español (ej: `abuelos/`, `ComoFuncionaPage.jsx`)
- **Carpetas estándar**: inglés (ej: `components/`, `hooks/`, `utils/`)
- **Funciones y variables**: camelCase (ej: `openWhatsApp`, `displayedText`)
- **Componentes**: PascalCase (ej: `ChatMessage`, `SolutionCard`)

### Rutas absolutas
Usar siempre `@/` para imports:

```jsx
// ✅ Correcto
import { openWhatsApp } from '@/utils/whatsapp';
import Navbar from '@/components/layout/Navbar';

// ❌ Incorrecto
import { openWhatsApp } from '../../../utils/whatsapp';
```

## 🌐 Features

- ✅ **Hero**: Sección principal con mockup de celular
- ✅ **Cómo Funciona**: Explicación del proceso en 3 pasos
- ✅ **Soluciones**: Grid de cards con servicios de Punky
- ✅ **Fuerzas**: Sección dedicada a Fuerzas Armadas y de Seguridad
- ✅ **Abuelos**: Sección para jubilados con conversación interactiva
- ✅ **Compras**: Ayuda para compras inteligentes
- ✅ **Preguntas Frecuentes**: FAQ con acordeón suave

## 📱 Responsive

El proyecto es completamente responsive y se adapta a:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🔧 Tecnologías

- **React 18**: Biblioteca de UI
- **Vite**: Build tool ultra rápido
- **Tailwind CSS**: Framework de utilidades CSS
- **PostCSS**: Procesamiento de CSS
- **Autoprefixer**: Compatibilidad de navegadores

## 📄 Licencia

© 2025 Punky IA. Todos los derechos reservados.

---

**Desarrollado siguiendo la arquitectura Feature-Sliced Design (FSD) adaptada a NextAI Gestión**
