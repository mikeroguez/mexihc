# AGENTS.md

Guía operativa para agentes que colaboren en este repositorio.

## 1) Objetivo del proyecto

Sitio oficial de **MexIHC 2026** construido con **Vue 3 + Vite** y contenido multilenguaje (**es/en**).

Objetivo de cada cambio:
- mantener consistencia visual y de contenido;
- evitar regresiones en rutas, i18n y assets;
- entregar cambios pequeños, verificables y fáciles de revisar.

## 2) Stack y comandos

- Node.js: `18+` (LTS recomendado)
- Gestor: `npm`
- Framework: `vue@3`
- Bundler: `vite`

Comandos principales:
- `npm run dev` -> desarrollo local (`http://localhost:5173/`)
- `npm run build` -> build general
- `npm run build:github` -> build para GitHub Pages
- `npm run build:prod` -> build modo producción
- `npm run preview` -> revisar build local

## 3) Estructura relevante

- `src/views/` -> vistas por ruta
- `src/components/` -> componentes reutilizables
- `src/components/locales/{es,en}/` -> contenido por idioma
- `src/i18n/` -> configuración de internacionalización y diccionarios
- `public/assets/img/` -> imágenes públicas (logos, personas, banners)
- `src/router/index.js` -> enrutamiento

## 4) Convenciones de trabajo

1. Mantén los cambios enfocados en una sola intención.
2. No reestructures archivos sin justificación funcional.
3. Si agregas contenido visible, valida impacto en `es` y `en`.
4. Si agregas imágenes nuevas:
   - usa nombres de archivo descriptivos y estables;
   - referencia desde rutas públicas (`/assets/img/...`) de forma consistente;
   - evita duplicados innecesarios.
5. Respeta el estilo existente del archivo antes de introducir nuevas convenciones.
6. Evita dependencias nuevas salvo necesidad real del producto.

## 5) Flujo recomendado para cambios

1. Identifica archivo(s) mínimos a tocar.
2. Implementa solo la modificación necesaria.
3. Ejecuta validación local:
   - `npm run build`
   - opcional: `npm run dev` y revisión manual rápida en navegador
4. Resume impacto funcional y archivos tocados.
5. Propón commit con Conventional Commits.

## 6) Convenciones de commit

Formato:

`tipo(scope): descripción corta en imperativo`

Tipos más comunes:
- `feat`: nueva funcionalidad/contenido nuevo relevante
- `fix`: corrección de bug o regresión
- `refactor`: mejora interna sin cambio funcional esperado
- `chore`: tareas de mantenimiento
- `docs`: documentación

Ejemplos:
- `feat(organizers): add Juan Pablo Garcia Vazquez profile`
- `fix(i18n): correct missing translation key in speakers section`
- `chore(assets): compress homepage banner images`

## 7) Checklist antes de entregar

- [ ] El proyecto compila (`npm run build`).
- [ ] No se rompieron rutas de `vue-router`.
- [ ] No hay llaves i18n faltantes obvias.
- [ ] No hay referencias rotas a imágenes/assets.
- [ ] El cambio está descrito claramente para review.

## 8) Fuera de alcance por defecto

- Migraciones grandes de arquitectura.
- Cambios de diseño masivos no solicitados.
- Actualización de dependencias sin ticket/objetivo esplicito.
