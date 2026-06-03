<script>
import OrganizerItem from '@/components/OrganizerItem.vue';
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue';

import Tr from '@/i18n/translation'

export default {
    components: {
        OrganizerItem,
        InPageNavigationPanel
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <InPageNavigationPanel
        :links="[
            { label: 'Objetivo', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-objective' }) },
            { label: 'Participación', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-participation' }) },
            { label: 'Preparación de materiales', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-materials' }) },
            { label: 'Envío y selección', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-submission' }) },
            { label: 'Fechas importantes', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' }) }
        ]"
        :milestones="[
            { label: 'Fecha límite de envío', date: '2026-08-09' },
            { label: 'Notificación de aceptación', date: '2026-09-04' },
            { label: 'Envío de versión final', date: '2026-09-13' },
            { label: 'Inicio de MexIHC 2026', date: '2026-10-27', kind: 'conference-start' },
            { label: 'Cierre de MexIHC 2026', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' })"
        all-dates-label="Ver todas las fechas importantes"
    />

    <p>
        Damos una cálida bienvenida a la comunidad estudiantil de maestría y doctorado actualmente inscrita en programas de posgrado centrados en la <strong>Interacción Humano-Computadora (HCI)</strong>, a presentar sus propuestas de investigación para ser consideradas en el Coloquio de Graduados de la <strong>XI Conferencia Mexicana sobre Interacción Humano-Computadora (MexIHC 2026)</strong>.
    </p>

    <h2 id="cgc-objective">Objetivo</h2>
    <p>
        El Coloquio de Graduados MexIHC ofrece a las y los estudiantes de posgrado una plataforma única para presentar sus proyectos de investigación a la comunidad académica de HCI en México. Este espacio busca fomentar conexiones con otros estudiantes de posgrado, generar oportunidades de <em>networking</em> y brindar mentoría personalizada por parte de distinguidos líderes internacionales en el área, tanto de la industria como de la academia.
    </p>

    <h2 id="cgc-participation">Participación en el Coloquio de Graduados</h2>
    <p>
        Las personas interesadas deberán proporcionar sus datos esenciales y un resumen de cuatro páginas que describa su trabajo de investigación. Como participante, deberás prepararte para:
    </p>

    <ul>
        <li><strong>Presentación concisa:</strong> realizar una exposición de 10 minutos sobre tu investigación durante el evento.</li>
        <li><strong>Discusión académica:</strong> participar activamente en sesiones de retroalimentación grupal centradas en tu trabajo y el de tus pares.</li>
        <li><strong>Mentoría:</strong> beneficiarte de asesorías personalizadas dirigidas por investigadores e investigadoras del área de HCI.</li>
    </ul>

    <h2 id="cgc-materials">Directrices para la preparación de materiales</h2>

    <h3 id="cgc-paper-requirements">Requisitos del artículo</h3>
    <p>
        Para postularse, se debe enviar un artículo de <strong>máximo 4 páginas</strong>, incluyendo figuras, tablas y referencias, que explique el desarrollo de la investigación. La persona estudiante que presente en el coloquio debe figurar como <strong>primer autor</strong>.
    </p>
    <p>
        Las propuestas aceptadas se publicarán en la revista <a href="https://revistaaihc.mx/index.php/aihc" class="uline"><em>Avances en Interacción Humano-Computadora</em> (AMexIHC)</a> y se difundirán en el sitio web del evento.
    </p>
    <p>
        <strong>Nota sobre el avance:</strong> se pueden proponer experimentos si corresponde, así como evaluaciones preliminares y hallazgos, pero estos últimos no son obligatorios para la postulación. Se recomienda utilizar la <a href="http://mexihc.org/aihc_template.docx" class="uline">plantilla de la revista AMexIHC</a>.
    </p>

    <p>El artículo debe incluir:</p>
    <ul>
        <li>Motivación de la investigación propuesta.</li>
        <li>Antecedentes y trabajos relacionados, incluyendo referencias clave.</li>
        <li>Descripción de la investigación propuesta, preguntas de investigación o hipótesis, y metodología planeada.</li>
        <li>Problemas, retos o desafíos específicos que la persona estudiante quisiera discutir durante el coloquio.</li>
    </ul>

    <h3>Requisitos de formato</h3>
    <ul>
        <li>El artículo puede estar escrito en español o inglés.</li>
        <li>Debe enviarse como un único archivo PDF con las fuentes incrustadas.</li>
        <li>Si el artículo está en español, el título y el resumen deben estar también en inglés.</li>
        <li>La extensión máxima es de 4 páginas, incluyendo figuras, tablas y referencias.</li>
    </ul>

    <h2 id="cgc-submission">Directrices de envío y criterios de selección</h2>
    <p>
        Las personas estudiantes son responsables de asegurar que sus envíos cumplan con el formato solicitado y sean imprimibles en una impresora estándar. Los miembros del Comité de Programa del Coloquio de Graduados revisarán todos los envíos.
    </p>
    <p>
        Esta convocatoria está abierta a toda la comunidad estudiantil de posgrado. Los resúmenes serán evaluados con base en la claridad conceptual y metodológica, la calidad técnica de la propuesta escrita y el potencial de impacto del proyecto en el área de HCI.
    </p>

    <h2 id="cgc-dates">Fechas importantes</h2>
    <ul>
        <li><strong>9 de agosto de 2026</strong> - Fecha límite de envío</li>
        <li><strong>18 al 31 de agosto de 2026</strong> - Periodo de revisión</li>
        <li><strong>4 de septiembre de 2026</strong> - Notificación de aceptación</li>
        <li><strong>13 de septiembre de 2026</strong> - Envío de versión final (camera-ready)</li>
        <li><strong>Por determinar</strong> - Celebración del Coloquio</li>
    </ul>

    <h2 class="my-4">{{ $t("organizers.graduate_colloquium_chairs_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/abdel.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;/assets/img/people/abdel.png&quot;);"></div>
                </template>
                <template #name>
                    David Abdel Mejía
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/ramonRene.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;/assets/img/people/ramonRene.png&quot;);"></div>
                </template>
                <template #name>
                    Ramón Palacio
                </template>
                <template #institution>
                    Instituto Tecnológico de Sonora
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>
