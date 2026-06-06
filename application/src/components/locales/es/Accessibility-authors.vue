<script setup>
import OrganizerItem from '@/components/OrganizerItem.vue'
</script>

<template>
    <p>
        Nos comprometemos a proporcionar un entorno inclusivo y maximizar la experiencia para todos. Como principales
        productores de información, alentamos a todos los participantes a seguir estas recomendaciones.
    </p>
    <p class="acc-wcag-note">Estas recomendaciones están fundamentadas en WCAG 2.2 (W3C, 2023), las guías de accesibilidad de ACM SIGACCESS y las mejores prácticas actuales para la comunicación académica accesible.</p>

    <!-- Language recommendations -->
    <h2 id="language-recommendations">Recomendaciones de lenguaje</h2>

    <p>
        La comunicación efectiva de ideas de investigación es un aspecto crucial de nuestra conferencia.
        Le invitamos a consultar las siguientes guías publicadas por <a class="uline"
            href="https://www.sigaccess.org/">ACM SIGACCESS</a>:
    </p>

    <p>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/"
            target="_blank" rel="noopener">Guía de Escritura Accesible</a>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/"
            target="_blank" rel="noopener">Guía de Presentación Accesible</a>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/describing-figures/"
            target="_blank" rel="noopener">Cómo describir figuras</a>
    </p>

    <p>
        El uso de lenguaje respetuoso e inclusivo es una responsabilidad profesional. SIGACCESS reconoce que las
        preferencias varían —entre lenguaje basado en identidad y lenguaje centrado en la persona— y recomienda
        informarse sobre las mejores prácticas actuales. Si tiene dudas sobre terminología, el <a class="uline"
            href="https://dl.acm.org/doi/10.1145/3517428.3544813"
            target="_blank" rel="noopener">estudio de Sharif et al. (ASSETS 2022)</a> ofrece evidencia empírica
        sobre las preferencias de personas con discapacidad.
    </p>

    <div class="acc-note">
        <strong>Recomendación:</strong> Evite pronombres y formulaciones genéricas excluyentes. Use
        <em>«las personas autoras»</em> o <em>«quien presenta»</em> en lugar de formas que asumen un género.
    </div>
    <!-- end Language recommendations -->

    <!-- Accessible document author recommendations -->
    <h2 id="accessible-document-author-recommendations">Documentos accesibles</h2>

    <p>
        Los documentos accesibles deben diseñarse con alternativas de percepción e interacción para garantizar la
        comprensión de todos los lectores. Consulte la guía oficial de su herramienta:
    </p>

    <p>
        <a class="acc-tool-btn"
            href="https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d"
            target="_blank" rel="noopener">Microsoft Word</a>
        <a class="acc-tool-btn"
            href="https://support.google.com/docs/answer/6199477?hl=es"
            target="_blank" rel="noopener">Google Docs</a>
        <a class="acc-tool-btn"
            href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html"
            target="_blank" rel="noopener">Adobe Acrobat Pro</a>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-pdf-author-guide/"
            target="_blank" rel="noopener">Guía PDF accesible (SIGACCESS)</a>
        <a class="acc-tool-btn"
            href="https://wiki.documentfoundation.org/Accessibility/Creating_Accessible_LibreOffice_Files"
            target="_blank" rel="noopener">LibreOffice</a>
    </p>

    <ul class="acc-checklist">
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use estilos de encabezado integrados:</strong> ayuda a quienes usan lectores de pantalla
            a navegar activamente el documento línea a línea.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use texto significativo en los enlaces:</strong> evite frases como «haga clic aquí» o
            «más información». El texto del enlace debe describir su destino.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Agregue texto alternativo a todas las imágenes:</strong> debe ser conciso y describir
            el contenido o función de la imagen, no su apariencia decorativa.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>No transmita información solo mediante color:</strong> combine color con formas, patrones
            o etiquetas. WCAG 2.2 requiere un ratio de contraste mínimo de 4.5:1 para texto normal y 3:1
            para texto grande.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use tablas solo para datos tabulares:</strong> agregue texto alternativo, configure la
            fila de encabezado, y añada subtítulos descriptivos. Evite tablas como estructura de diseño.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use lenguaje sencillo:</strong> escriba oraciones cortas, evite jerga innecesaria y
            prefiera la voz activa. Esto beneficia a todos los lectores, incluidos hablantes no nativos.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Agregue subtítulos a figuras y tablas:</strong> facilita la comprensión y la navegación
            para todos los lectores.</span>
        </li>
    </ul>

    <div class="row mt-3 g-3">
        <div class="col-md-4">
            <div class="acc-tool-box">
                <p class="acc-tool-box-title">LaTeX</p>
                <p class="acc-tool-box-body">
                    Use el paquete <code>hyperref</code> y el comando <code>\pdftooltip</code> (paquete
                    <code>pdfcomment</code>) para añadir texto alternativo a figuras en documentos PDF.
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="acc-tool-box">
                <p class="acc-tool-box-title">Apple Pages / Keynote</p>
                <p class="acc-tool-box-body">
                    Consulte las <a class="uline" href="https://support.apple.com/en-my/HT210563"
                        target="_blank" rel="noopener">guías de accesibilidad de Apple</a> para Pages,
                    Numbers y Keynote.
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="acc-tool-box">
                <p class="acc-tool-box-title">Verificar PDF</p>
                <p class="acc-tool-box-body">
                    En Acrobat Pro: Archivo → Propiedades → Descripción. Verifique que aparezca
                    «PDF etiquetado: Sí» en las propiedades avanzadas.
                </p>
            </div>
        </div>
    </div>
    <!-- end Accessible document author recommendations -->

    <!-- Accessible slide author recommendations -->
    <h2 id="accessible-slide-author-recommendations">Presentaciones accesibles</h2>

    <p>
        Sus presentaciones estarán disponibles como productos digitales de MexIHC 2026. Quienes las consulten
        podrían usar un lector de pantalla, por lo que la accesibilidad de diapositivas es fundamental.
    </p>

    <p>
        <a class="acc-tool-btn"
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/"
            target="_blank" rel="noopener">Guía de Presentación Accesible (SIGACCESS)</a>
        <a class="acc-tool-btn"
            href="https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25"
            target="_blank" rel="noopener">PowerPoint</a>
        <a class="acc-tool-btn"
            href="https://support.google.com/docs/answer/6199477?hl=es"
            target="_blank" rel="noopener">Google Slides</a>
        <a class="acc-tool-btn"
            href="https://support.apple.com/en-my/HT210563"
            target="_blank" rel="noopener">Keynote</a>
    </p>

    <ul class="acc-checklist">
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Dé a cada diapositiva un título único:</strong> use el cuadro de título integrado de
            la plantilla para que los lectores de pantalla anuncien el título de cada diapositiva.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Texto alternativo en imágenes o márquelas como decorativas:</strong> si la imagen no
            añade información, márquela explícitamente como decorativa para que los lectores de pantalla
            la ignoren.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>No use solo color para resaltar información clave:</strong> combine color con
            subrayado, negrita, íconos o etiquetas. Use la herramienta
            <a class="uline" href="https://webaim.org/resources/contrastchecker/"
                target="_blank" rel="noopener">WebAIM Contrast Checker</a>
            para verificar los ratios de contraste.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Verifique el orden de lectura:</strong> en PowerPoint, use el panel «Orden de
            selección» para confirmar que el orden en que los lectores de pantalla leerán los elementos
            sea el correcto.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Evite tablas en la medida de lo posible:</strong> si las usa, manténgalas simples
            —sin celdas combinadas ni anidadas— y agregue encabezados de fila y columna.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Use fuentes de al menos 18–24 pt para el cuerpo:</strong> favorece la legibilidad
            para personas con baja visión y para quienes ven la presentación en salas grandes.</span>
        </li>
    </ul>
    <!-- end Accessible slide author recommendations -->

    <!-- Accessible video author recommendations -->
    <h2 id="accessible-video-author-recommendations">Videos con subtítulos</h2>

    <p>
        Los subtítulos benefician a personas con discapacidad auditiva, a quienes están en entornos donde no
        pueden reproducir audio, y a quienes no tienen el español o el inglés como idioma nativo.
    </p>

    <ul class="acc-checklist">
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Genere y revise subtítulos automáticos en YouTube:</strong> las transcripciones
            automáticas son útiles como punto de partida, pero deben editarse para corregir errores de
            pronunciación, terminología técnica y puntuación.
            YouTube Studio → Subtítulos → Editar.</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Descargue el archivo de subtítulos (.SRT o .VTT):</strong> una vez revisados,
            descargue el archivo desde YouTube Studio para reutilizarlo en otras plataformas (Vimeo,
            Zoom, plataformas de e-learning).</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Incluya descripciones de sonidos no verbales relevantes:</strong> si hay aplausos,
            señales sonoras o cambios de escena importantes, descríbalos entre corchetes.
            p. ej. [aplausos].</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Identifique a los hablantes:</strong> en videos con múltiples participantes, indique
            quién habla. p. ej. [Moderadora: …].</span>
        </li>
        <li>
            <span class="acc-check-box" aria-hidden="true"></span>
            <span><strong>Cuide la velocidad de lectura:</strong> los subtítulos no deben desaparecer antes de
            que el lector promedio pueda terminarlos. Una velocidad de referencia es 17 caracteres por
            segundo como máximo.</span>
        </li>
    </ul>

    <div class="acc-note acc-note--tip">
        <strong>Consejo:</strong> Si comienza su proceso de grabación escribiendo primero el guión o
        transcripción, el proceso de subtitulado será significativamente más rápido y preciso.
    </div>
    <!-- end Accessible video author recommendations -->

    <h2 class="my-4">Responsable del sitio web</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/mike.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url('/assets/img/people/mike.png');"></div>
                </template>
                <template #name>Miguel Ángel Rodríguez Ortiz</template>
                <template #institution>Universidad de Colima</template>
            </OrganizerItem>
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-top: 2.25rem;
    margin-bottom: 1rem;
}

.acc-wcag-note {
    font-size: 0.83rem;
    color: var(--mexihc-slate);
    border-left: 3px solid var(--mexihc-mist);
    padding-left: 0.85rem;
    margin-bottom: 0.5rem;
}

.acc-tool-btn {
    display: inline-block;
    padding: 0.22rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: var(--mexihc-indigo) !important;
    border: 1.5px solid var(--mexihc-indigo);
    border-radius: 6px;
    text-decoration: none !important;
    -webkit-text-fill-color: var(--mexihc-indigo);
    background-image: none !important;
    transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
    margin-right: 0.35rem;
    margin-bottom: 0.5rem;
}

.acc-tool-btn:hover,
.acc-tool-btn:focus-visible {
    background-color: var(--mexihc-indigo);
    color: var(--mexihc-white) !important;
    -webkit-text-fill-color: var(--mexihc-white) !important;
    background-image: none !important;
    text-decoration: none !important;
}

.acc-note {
    border-left: 3px solid var(--mexihc-magenta);
    background: rgba(135, 0, 88, 0.05);
    border-radius: 0 8px 8px 0;
    padding: 0.875rem 1.1rem;
    margin: 1.25rem 0;
    color: var(--mexihc-night);
    font-size: 0.92rem;
}

.acc-note--tip {
    border-left-color: var(--mexihc-indigo);
    background: rgba(73, 99, 137, 0.06);
}

.acc-checklist {
    list-style: none;
    padding-left: 0;
    margin-top: 0.75rem;
}

.acc-checklist li {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid rgba(189, 184, 194, 0.35);
    font-size: 0.93rem;
}

.acc-checklist li:last-child {
    border-bottom: none;
}

.acc-check-box {
    flex-shrink: 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    border: 2px solid var(--mexihc-indigo);
    border-radius: 3px;
    background: transparent;
}

.acc-tool-box {
    background: var(--mexihc-paper);
    border: 1px solid var(--mexihc-mist);
    border-top: 3px solid var(--mexihc-indigo);
    border-radius: 8px;
    padding: 1rem 1rem 0.875rem;
    height: 100%;
}

.acc-tool-box-title {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--mexihc-indigo);
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
}

.acc-tool-box-body {
    font-size: 0.82rem;
    color: var(--mexihc-slate);
    margin: 0;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
}

code {
    font-size: 0.8em;
    color: var(--mexihc-magenta);
    background: rgba(135, 0, 88, 0.07);
    padding: 0.1em 0.35em;
    border-radius: 4px;
}
</style>
