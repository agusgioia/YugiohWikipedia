# 🃏 Yugioh- Wikipedia - Angular App

**Yugioh- Wikipedia** es una aplicación web desarrollada con Angular que permite visualizar y explorar cartas del juego de cartas Yu-Gi-Oh! utilizando la [API oficial de YGOProDeck](https://ygoprodeck.com/api-guide/). La app está desplegada en Netlify para fácil acceso desde cualquier dispositivo.

## 🚀 Demo en vivo

🔗[ Accedé a la aplicación aquí](https://yugiohwiki.netlify.app)]

## 📦 Tecnologías utilizadas

- Angular 17+
- TypeScript
- HTML / SCSS
- YGOProDeck API
- Netlify (para deployment)

## 🎯 Funcionalidades principales

- 🔍 Búsqueda de cartas por nombre
- 🔍 Búsqueda de cartas por arquetipo
- 🖼️ Visualización de imágenes y detalles de cada carta
- ⚡ Interfaz responsiva y rápida

## 🔧 Instalación local

```bash
git clone https://github.com/tu-usuario/YugiohWikipedia.git
cd YugiohWikipedia
npm install
ng serve
```

La app estará disponible en `http://localhost:4200`.

## 🌐 Despliegue

Este proyecto está desplegado automáticamente en Netlify con cada push al branch principal. Para configurar el deploy:

1. Crear una cuenta en [Netlify](https://www.netlify.com/)
2. Conectar tu repo desde GitHub
3. Usar los siguientes parámetros de build:
   - Build Command: `ng build --configuration=production`
   - Publish Directory: `dist/ygocard-viewer` (o el nombre real de tu proyecto)

## 📄 Fuente de datos

Todos los datos provienen de la [API de YGOProDeck](https://ygoprodeck.com/api-guide/).  
Ejemplo de endpoint usado:

```
https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician
```

