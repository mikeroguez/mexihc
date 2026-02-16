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
            { label: 'Fechas importantes', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' }) },
            { label: 'Detalles de envío', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-submission' }) },
            { label: 'Proceso de revisión', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-review' }) },
            { label: 'Asistencia', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-attendance' }) }
        ]"
        :milestones="[
            { label: 'Fecha límite de recepción', date: '2024-08-30' },
            { label: 'Notificación de aceptación', date: '2024-09-13' },
            { label: 'Versión final', date: '2024-09-20' },
            { label: 'Inicio de MexIHC 2024', date: '2024-11-06', kind: 'conference-start' },
            { label: 'Cierre de MexIHC 2024', date: '2024-11-08', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' })"
        all-dates-label="Ver todas las fechas importantes"
    />

    <p>
        Invitamos a profesionales, investigadores y estudiantes a enviar sus trabajos a la sección de posters en MexIHC
        2024. Los posters brindan una gran oportunidad para que académicos y profesionales obtengan comentarios valiosos
        sobre trabajos en etapas iniciales y discutan posibles colaboraciones. Los posters deben presentar trabajos en
        progreso, resultados preliminares, estudios a pequeña escala, avances científicos y tecnológicos que sean
        prometedores, demostraciones de herramientas técnicas, etc. Las contribuciones se exhibirán en una sesión
        durante la conferencia MexIHC 2024. Los trabajos presentados en esta modalidad pueden estar escritos en inglés o
        español (título y resumen en inglés).
    </p>

    <h2 id="cpt-dates">Fechas importantes</h2>
    <ul>
        <li>Fecha límite de recepción: Miércoles <del>8</del> 30 de agosto (extendida)</li>
        <li>Notificación de aceptación: Viernes <del>6</del> 13 de septiembre</li>
        <li>Versión final: Viernes <del>13</del> 20 de septiembre</li>
    </ul>

    <h2 id="cpt-submission">Detalles de envío</h2>

    <P>
        Los autores que deseen enviar un artículo deben:
    </P>
    <ul>
        <li>
            Cumplir con el <a class="uline" href="https://mexihc.org/aihc_template.zip">formato oficial de revista
                AmexIHC</a> (hasta 4 páginas máximo).
        </li>
        <li>
            Los trabajos aceptados serán publicados en la <a class="uline"
                href="https://revistaaihc.mx/"></a>Revista de la AMexIHC “Avances en Interacción
            Humano-Computadora”.
        </li>
        <li>
            Las propuestas deberán enviarse por correo electrónico con asunto “Póster MexIHC 2024” a:
            posters.2024@mexihc.org
        </li>
        <li>
            Te invitamos a leer las
            <RouterLink class="uline" :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })">
                {{ $t("nav.accessibility_for_autors") }}
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
        Los artículos serán revisados de forma anónima por miembros pares que formen parte del comité del programa
        MexIHC 2024. Las presentaciones serán evaluadas en función de su originalidad, importancia de la contribución al
        campo, corrección técnica y presentación.
    </p>
    <p>
        Los coordinadores de la sesión de posters enviarán las instrucciones de exhibición a los autores de los trabajos aceptados.
    </p>

    <h2 id="cpt-attendance">Asistencia</h2>
    <p>
        Al menos un autor de cada trabajo aceptado deberá registrarse al congreso y presentar el poster.
    </p>

    <h2 class="my-4">Coordinadores de la Sesión de Pósteres</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/adolfo.jpg" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/adolfo.jpg&quot;);">
                    </div>
                </template>
                <template #name>
                    Adolfo Mejía
                </template>
                <template #institution>
                    Universidad Autónoma de Coahuila
                </template>
                <template #email>
                    posters.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/jose.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/jose.png&quot;);">
                    </div>
                </template>
                <template #name>
                    José Mercado Chan
                </template>
                <template #institution>
                    CICESE-UT3, MX
                </template>
                <template #email>
                    posters.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/sanely.jpg" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/sanely.jpg&quot;);">
                    </div>
                </template>
                <template #name>
                    Sanely Gaytán
                </template>
                <template #institution>
                    Universidad de Colima
                </template>
                <template #email>
                    posters.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>
