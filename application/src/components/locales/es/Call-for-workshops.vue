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
            { label: 'Modalidad', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-format' }) },
            { label: 'Guía para propuestas', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-guidelines' }) },
            { label: 'Tras la aceptación', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-after-acceptance' }) },
            { label: 'Fechas importantes', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-dates' }) },
            { label: 'Talleres aceptados', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-accepted-workshops' }) },
            { label: 'Envío de propuestas', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-submission' }) }
        ]"
        :milestones="[
            { label: 'Fecha límite extendida para propuestas de taller', date: '2026-06-08' },
            { label: 'Notificación extendida de aceptación del taller', date: '2026-06-12' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-accepted-workshops' })"
        all-dates-label="Ver sitios de talleres"
        completed-label="Recepción de propuestas de talleres cerrada"
        completed-next-stage="Registro de participación a talleres"
    />

    <p><strong>Actualización:</strong> la convocatoria de talleres fue extendida. La fecha límite pasó del <del>25 de mayo de 2026</del> al <strong>8 de junio de 2026</strong>, y la notificación de aceptación cambió del <del>29 de mayo de 2026</del> al <strong>12 de junio de 2026</strong>.</p>

    <p>
        Con el objetivo de promover el acceso al conocimiento especializado y fomentar el intercambio de experiencias, el Comité Organizador de MexIHC 2026 invita a investigadores, académicos y profesionales a presentar propuestas de talleres sobre temas interdisciplinarios, actuales y prácticos en el campo de la Interacción Humano-Computadora (IHC).
    </p>

    <h2 id="cws-format">Modalidad de participación</h2>
    <p>
        Se buscan propuestas que fomenten la colaboración y la discusión activa sobre temas alineados con las áreas de la conferencia.
    </p>

    <ul>
        <li><strong>Duración:</strong> sesiones de 3 a 8 horas.</li>
        <li><strong>Formato:</strong> espacios dinámicos enfocados en la resolución de problemas, el aprendizaje de herramientas o la exploración de metodologías emergentes.</li>
    </ul>

    <h2 id="cws-guidelines">Guía para la presentación de propuestas</h2>
    <p>
        Las propuestas deben contener información suficiente para evaluar su relevancia e interés para la comunidad. El documento podrá entregarse en español o inglés, con una extensión de 3 a 4 páginas, y debe elaborarse usando el <a href="https://mexihc.org/Template_Talleres_MexIHC_2026.zip">template oficial de talleres de MexIHC 2026</a>.
    </p>
    <p>
        Cada propuesta debe incluir como mínimo la siguiente información:
    </p>

    <ul>
        <li><strong>Título y objetivos:</strong> definición clara del propósito del taller e inclusión de los tópicos de interés.</li>
        <li><strong>Relevancia:</strong> justificación de su importancia dentro de los temas de la conferencia.</li>
        <li><strong>Público objetivo:</strong> perfil de las personas asistentes y cupo máximo de participantes.</li>
        <li><strong>Contenido y agenda:</strong> descripción del alcance y desglose de las actividades programadas, incluyendo los criterios de evaluación que serán considerados.</li>
        <li><strong>Requisitos logísticos:</strong> necesidades específicas como soportes para pósters, proyectores adicionales u otro equipamiento.</li>
        <li><strong>Perfil de las personas organizadoras:</strong> nombres, afiliaciones, contacto y biografía breve que acredite experiencia en el tema, por ejemplo proyectos o publicaciones.</li>
    </ul>

    <h2 id="cws-after-acceptance">Responsabilidades tras la aceptación</h2>
    <p>
        Tras recibir la notificación de aceptación, las personas organizadoras deberán:
    </p>

    <ul>
        <li>Crear una página web del taller con su propia convocatoria de trabajos.</li>
        <li>Promover activamente el taller en sus redes académicas y listas de correo.</li>
        <li>Apegarse a las fechas generales de la conferencia para la publicación de los trabajos.</li>
    </ul>

    <h2 id="cws-dates">Fechas importantes</h2>
    <ul>
        <li><del>25 de mayo de 2026</del> <strong>8 de junio de 2026</strong> – Fecha límite para propuestas de taller <strong>(extendida)</strong></li>
        <li><del>29 de mayo de 2026</del> <strong>12 de junio de 2026</strong> – Notificación de aceptación del taller <strong>(extendida)</strong></li>
        <li><strong>27 al 30 de octubre de 2026</strong> – Celebración de MexIHC 2026</li>
    </ul>

    <h2 id="cws-accepted-workshops">Talleres aceptados</h2>
    <p>
        En construcción.
    </p>

    <h2 id="cws-submission">Envío de propuestas</h2>
    <p>
        Las propuestas deberán enviarse por correo a <a href="mailto:ws.2026@mexihc.org">ws.2026@mexihc.org</a>. Para preparar el documento, utilice el <a href="https://mexihc.org/Template_Talleres_MexIHC_2026.zip">template oficial de talleres</a>.
    </p>

    <p>
        Te invitamos a leer las
        <RouterLink class="uline" :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })">
            Recomendaciones de accesibilidad para autores
        </RouterLink>
        al preparar tu propuesta.
    </p>

    <h2 class="my-4">Responsables de talleres</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/sandra.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/people/sandra.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Sandra Nava
                </template>
                <template #institution>
                    Universidad Autónoma de San Luis Potosí
                </template>
                <template #email>
                    senavam@uaslp.mx
                </template>
            </OrganizerItem>
        </div>
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/pabloGarcia.jpg" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/people/pabloGarcia.jpg&quot;);">
                    </div>
                </template>
                <template #name>
                    Juan Pablo García Vázquez
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California
                </template>
                <template #email>
                    pablo.garcia@uabc.edu.mx
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>
