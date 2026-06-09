<script>
import OrganizerItem from '@/components/OrganizerItem.vue'
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'

export default {
    components: {
        OrganizerItem,
        InPageNavigationPanel
    },
    setup() {
        return { Tr }
    }
}
</script>

<script setup>
import { RouterLink } from 'vue-router'
import Tr from '@/i18n/translation'
</script>

<template>
    <InPageNavigationPanel
        :links="[
            { label: 'Fechas importantes', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' }) },
            { label: 'Detalles de envío', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-submission' }) },
            { label: 'Proceso de revisión', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-review' }) },
            { label: 'Asistencia', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-attendance' }) }
        ]"
        :milestones="[
            { label: 'Fecha límite de recepción', date: '2026-08-30' },
            { label: 'Notificación de aceptación', date: '2026-09-14' },
            { label: 'Versión final', date: '2026-09-20' },
            { label: 'Inicio de MexIHC 2026', date: '2026-10-27', kind: 'conference-start' },
            { label: 'Cierre de MexIHC 2026', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' })"
        all-dates-label="Ver todas las fechas importantes"
    />

    <p>
        Invitamos a profesionales, investigadores y estudiantes a enviar sus trabajos a la sección de pósteres en MexIHC
        2026. Los pósteres brindan una gran oportunidad para que académicos y profesionales obtengan comentarios valiosos
        sobre trabajos en etapas iniciales y discutan posibles colaboraciones. Los pósteres deben presentar trabajos en
        progreso, resultados preliminares, estudios a pequeña escala, avances científicos y tecnológicos que sean
        prometedores, demostraciones de herramientas técnicas, etc. Las contribuciones se exhibirán en una sesión durante
        la conferencia MexIHC 2026. Los trabajos presentados en esta modalidad pueden estar escritos en inglés o español
        (título y resumen en inglés).
    </p>

    <h2 id="cpt-dates">Fechas importantes</h2>
    <ul>
        <li>Fecha límite de recepción: domingo 30 de agosto de 2026</li>
        <li>Notificación de aceptación: lunes 14 de septiembre de 2026</li>
        <li>Versión final: domingo 20 de septiembre de 2026</li>
    </ul>

    <h2 id="cpt-submission">Detalles de envío</h2>
    <p>Los autores que deseen enviar un artículo deben:</p>
    <ul>
        <li>
            Cumplir con el <a class="uline" href="https://mexihc.org/aihc_template.zip">formato oficial de revista
                AMexIHC</a> (hasta 4 páginas máximo).
        </li>
        <li>
            Los trabajos aceptados serán publicados en la Revista de la AMexIHC "Avances en Interacción
            Humano-Computadora".
        </li>
        <li>
            Las propuestas deberán enviarse por correo electrónico a
            <a class="uline" href="mailto:posters.2026@mexihc.org">posters.2026@mexihc.org</a>.
        </li>
        <li>
            Te invitamos a leer las
            <RouterLink class="uline" :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })">
                Recomendaciones de accesibilidad para autores
            </RouterLink>.
        </li>
    </ul>
    <p>
        La propuesta que se envíe debe ser original. No puede estar bajo revisión simultánea para su publicación en otra
        conferencia o revista, ni haber sido publicada en otro lugar. Revise también que las referencias en su propuesta
        sean precisas y estén completas.
    </p>

    <h2 id="cpt-review">Proceso de revisión</h2>
    <p>
        Los artículos serán revisados de forma anónima por miembros pares que formen parte del comité del programa MexIHC 2026.
        Las presentaciones serán evaluadas en función de su originalidad, importancia de la contribución al campo,
        corrección técnica y presentación.
    </p>
    <p>
        Los coordinadores de la sesión de pósteres enviarán las instrucciones de exhibición a los autores de los trabajos aceptados.
    </p>

    <h2 id="cpt-attendance">Asistencia</h2>
    <p>Al menos un autor de cada trabajo aceptado deberá registrarse en el congreso y presentar el póster.</p>

    <h2 class="my-4">Coordinadores de la Sesión de Pósteres</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/cristina.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url('/assets/img/people/cristina.png');"></div>
                </template>
                <template #name>Cristina Ramírez Fernández</template>
                <template #institution>Instituto Tecnológico de Ensenada (TecNM - ITE)</template>
                <template #email><a class="uline" href="mailto:cramirez@ite.edu.mx">cramirez@ite.edu.mx</a></template>
            </OrganizerItem>
        </div>
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/gilberto.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url('/assets/img/people/gilberto.png');"></div>
                </template>
                <template #name>Gilberto Borrego Soto</template>
                <template #institution>Instituto Tecnológico de Sonora (ITSON)</template>
            </OrganizerItem>
        </div>
    </div>
</template>
