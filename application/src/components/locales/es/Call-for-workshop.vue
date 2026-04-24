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
            { label: 'Objetivo', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-objective' }) },
            { label: 'Temáticas', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-themes' }) },
            { label: 'Lineamientos', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-guidelines' }) },
            { label: 'Fechas importantes', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' }) }
        ]"
        :milestones="[
            { label: 'Fecha límite para propuestas', date: '2026-06-01' },
            { label: 'Notificación de aceptación', date: '2026-08-07' },
            { label: 'Inicio de MexIHC 2026', date: '2026-10-27', kind: 'conference-start' },
            { label: 'Cierre de MexIHC 2026', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' })"
        all-dates-label="Ver todas las fechas importantes"
    />

    <p>
        El comité organizador de MexIHC 2026 invita a la comunidad académica, científica y profesional a someter propuestas de tutoriales en temas relacionados con la Interacción Humano-Computadora (IHC) y áreas afines.
    </p>

    <h2 id="cwt-objective">Objetivo</h2>
    <p>
        Los tutoriales tienen como propósito ofrecer espacios de formación intensiva que permitan a los participantes adquirir conocimientos teóricos, metodológicos o prácticos en temas actuales, emergentes o de frontera en IHC.
    </p>

    <h2>Modalidad y duración</h2>
    <p>
        Los tutoriales podrán impartirse en formato de: mini-taller interactivo, sesión de capacitación, o cualquier modalidad innovadora orientada al aprendizaje activo. Cada tutorial deberá tener una duración de 2 a 4 horas.
    </p>

    <h2>Fechas y sede</h2>
    <p>
        Los tutoriales se llevarán a cabo en el marco de MexIHC 2026 en las instalaciones de CICESE y UABC los días 27 y 28 de octubre.
    </p>
    <p>
        <strong>NOTA:</strong> Se contempla un día dedicado a tutoriales; sin embargo, en función de la demanda y calidad de las propuestas recibidas, el comité organizador podrá habilitar hasta dos días para su impartición.
    </p>

    <h2 id="cwt-themes">Temáticas</h2>
    <p>
        Se aceptan propuestas de tutoriales en cualquier área relacionada con la Interacción Humano-Computadora (IHC), incluyendo, pero no limitándose a:
    </p>
    
    <h3>Líneas generales:</h3>
    <ul>
        <li>Diseño y evaluación de interfaces</li>
        <li>Experiencia de usuario (UX)</li>
        <li>Accesibilidad e inclusión digital</li>
        <li>Visualización de información</li>
        <li>Interacción multimodal</li>
        <li>Inteligencia artificial centrada en el humano</li>
        <li>Tecnologías emergentes aplicadas a la interacción</li>
    </ul>

    <h3>Temas emergentes de especial interés:</h3>
    <ul>
        <li>Diseño para IA agéntica (Agentic AI) y ecosistemas humano–agente</li>
        <li>Interfaces generativas (GenUI) y adaptativas</li>
        <li>Interacción humano-robot (HRI) en entornos públicos e industriales</li>
        <li>Computación ubicua, multimodal y paradigmas “Zero-UI”</li>
        <li>IHC sostenible y circular</li>
    </ul>
    <p>
        Para una lista más amplia de temas sugeridos, se recomienda consultar el llamado para artículos del congreso.
    </p>

    <h2 id="cwt-guidelines">Lineamientos para propuestas</h2>
    <p>
        Las propuestas de tutoriales deben contener la información necesaria para que los coordinadores puedan evaluar su importancia, calidad e interés para la comunidad en los temas propuestos. No deben exceder las dos páginas. Al proponer un tutorial, proporcione (como mínimo) la siguiente información:
    </p>

    <ul>
        <li>Título y objetivos del tutorial.</li>
        <li>Duración estimada del tutorial.</li>
        <li>Relevancia del tutorial en relación con los temas de la conferencia.</li>
        <li>Breve descripción del contenido (por ejemplo, objetivos, alcance).</li>
        <li>Público objetivo.</li>
        <li>Número estimado de participantes (máximo).</li>
        <li>Nombres, afiliaciones, correo electrónico y breve biografía de los organizadores del tutorial, quienes deben tener experiencia en los temas tratados.</li>
        <li>Requisitos especiales en cuanto a logística (por ejemplo, soportes para pósters, más de un proyector de vídeo, etc.).</li>
        <li>Biografía de los organizadores con información relevante sobre su experiencia en el tema del tutorial (publicaciones, proyectos, etc.).</li>
    </ul>
    <p>
        La propuesta puede redactarse en español. Las propuestas deben enviarse vía correo electrónico a los coordinadores.
    </p>

    <h2>Tras aceptación</h2>
    <p>
        Los organizadores de los tutoriales aceptados deberán promocionarlos (así como la conferencia en general) entre sus contactos y utilizar listas de correo adicionales y accesibles. Los coordinadores de tutoriales les indicarán la fecha y hora de impartición de cada tutorial, así como la fecha límite para compartir el material que será utilizado.
    </p>

    <h2 id="cwt-dates">Fechas importantes</h2>
    <ul>
        <li><strong>1 de junio de 2026</strong> – Fecha límite para propuestas de tutoriales</li>
        <li><strong>7 de agosto de 2026</strong> – Notificación de aceptación</li>
        <li><strong>27 y 28 de octubre de 2026</strong> – Impartición de tutoriales</li>
    </ul>

    <h2 class="my-4">{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                    </div>
                </template>
                <template #name>
                    José Ángel González Fraga
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California
                </template>
                <template #email>
                    angel_fraga@uabc.edu.mx
                </template>
            </OrganizerItem>
        </div>
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/tonyGarcia.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/people/tonyGarcia.png&quot;);">
                    </div>
                </template>
                <template #name>
                    J. Antonio García Macías
                </template>
                <template #institution>
                    CICESE
                </template>
                <template #email>
                    jagm@cicese.edu.mx
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>
