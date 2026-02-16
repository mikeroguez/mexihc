# Guía RSS (Sitio Estático, Sin Backend)

Esta guía explica cómo mantener el canal RSS de MexIHC 2026 en un sitio estático.

## Enfoque recomendado

1. Mantener feeds separados por idioma:
- `application/public/rss-es.xml`
- `application/public/rss-en.xml`

2. Mantener un feed agregado:
- `application/public/rss.xml`

3. Publicar siempre estos archivos junto con el deploy del frontend.

## Dónde se enlaza el RSS

1. `Navbar`: muestra un solo link RSS según idioma actual.
2. `Footer`: muestra un solo link RSS según idioma actual.
3. `index.html`: incluye autodiscovery para lectores RSS (`<link rel="alternate" ...>`).
4. `Jumbotron` (post-it): incluye link RSS corto.

## Cómo agregar una noticia nueva

### 1) Editar `rss-es.xml`

Agregar un `<item>` nuevo dentro de `<channel>`, arriba de los anteriores:

```xml
<item>
  <title>Título de la noticia</title>
  <link>https://www.mexihc.org/mexihc/es/ruta</link>
  <guid isPermaLink="true">https://www.mexihc.org/mexihc/es/ruta</guid>
  <description>Resumen corto de la noticia.</description>
  <pubDate>Mon, 16 Feb 2026 12:00:00 GMT</pubDate>
</item>
```

### 2) Editar `rss-en.xml`

Agregar el equivalente en inglés:

```xml
<item>
  <title>News title</title>
  <link>https://www.mexihc.org/mexihc/en/route</link>
  <guid isPermaLink="true">https://www.mexihc.org/mexihc/en/route</guid>
  <description>Short summary.</description>
  <pubDate>Mon, 16 Feb 2026 12:00:00 GMT</pubDate>
</item>
```

### 3) Editar `rss.xml` (agregado)

Agregar uno o ambos items con prefijo de idioma en el título, por ejemplo:
- `[ES] ...`
- `[EN] ...`

### 4) Actualizar `lastBuildDate`

En los 3 archivos (`rss-es.xml`, `rss-en.xml`, `rss.xml`), actualizar:

```xml
<lastBuildDate>Mon, 16 Feb 2026 12:00:00 GMT</lastBuildDate>
```

## Formato de fecha recomendado (RSS)

Usar formato RFC 822 / RFC 1123, por ejemplo:

- `Mon, 16 Feb 2026 12:00:00 GMT`

## Validación rápida antes de publicar

1. Ejecutar build:

```bash
cd application
npm run build
```

2. Revisar que los XML estén en `dist/` después del build.

3. Abrir en navegador:
- `/mexihc/rss-es.xml`
- `/mexihc/rss-en.xml`
- `/mexihc/rss.xml`

Si el navegador muestra XML válido y los links abren, el feed está correcto.

## Publicación

1. Commit de cambios.
2. Deploy normal del sitio.
3. Verificar en producción que los 3 endpoints respondan con `200`.

## Nota importante (sin backend)

No hay persistencia dinámica ni generación automática desde base de datos.
Toda actualización de noticias RSS es manual editando XML en `application/public/`.
