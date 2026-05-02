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
            { label: 'Objetivos', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-goals' }) },
            { label: 'Fechas importantes', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-dates' }) },
            { label: 'Detalles de envío', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-submission' }) },
            { label: 'Proceso de selección', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-selection' }) }
        ]"
        :milestones="[
            { label: 'Fecha límite de recepción de trabajos', date: '2026-08-16' },
            { label: 'Fecha límite para camera ready', date: '2026-09-13' },
            { label: 'Inicio de MexIHC 2026', date: '2026-10-27', kind: 'conference-start' },
            { label: 'Cierre de MexIHC 2026', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-dates' })"
        all-dates-label="Ver todas las fechas importantes"
    />

    <h2 id="sdc-goals">Objetivos</h2>
    <ul>
        <li>Proveer a los estudiantes de diferentes campos de interacción humano-computadora una oportunidad para participar en una actividad práctica y demostrar sus habilidades en la resolución de problemas, el diseño interactivo y la experiencia de usuario.</li>
        <li>Crear un espacio para solucionar problemas reales utilizando diferentes enfoques, incluyendo investigación de diseño, lluvia de ideas, prototipos, implementación y evaluación.</li>
        <li>Fomentar una mayor interacción entre los representantes de la industria y los estudiantes.</li>
    </ul>

    <h2>Desafío de diseño: Inteligencia Artificial Centrada en las Personas: Su uso para el bien de la sociedad</h2>
    <p>
        En la última década, la inteligencia artificial ha dejado de ser una frontera especulativa para convertirse en uno de los ejes del desarrollo global. Sin embargo, sus implementaciones no ocurren en un vacío técnico, sino sobre un tejido social marcado por desigualdades históricas, una amplia economía informal y una brecha digital persistente. Para que la IA se traduzca en bien común y no en un nuevo vector de exclusión, es necesario pasar de una adopción pasiva a una implementación situada que responda a las urgencias locales.
    </p>
    <p>
        El potencial transformador de la IA en la región, desde la optimización de servicios públicos esenciales hasta la democratización del conocimiento, depende de una gobernanza ética y de un marco de soberanía tecnológica. No se trata solo de automatizar procesos, sino de aprovechar la capacidad computacional para desarticular barreras burocráticas, mejorar la medicina preventiva en zonas rurales y fortalecer la transparencia institucional. El reto para universidades, gobiernos y sociedad civil es lograr que la innovación no solo incremente la productividad, sino que funcione como catalizador de justicia social y bienestar colectivo.
    </p>
    <p>
        En esta edición del Concurso de Diseño Estudiantil te invitamos a presentar un proyecto en el que el uso de la inteligencia artificial promueva el bien común de un sector de la población históricamente o recientemente vulnerable, incorporando la metodología del Diseño Centrado en el Usuario como parte fundamental de la propuesta. El reto ha sido diseñado de forma abierta para incentivar la participación de estudiantes con distintos perfiles e inquietudes. El proyecto debe ser sin fines de lucro para sus creadores, pero puede abordar cualquier temática que promueva el uso de IA dentro del ámbito de la interacción humano-computadora.
    </p>

    <h2 id="sdc-dates">Fechas importantes</h2>
    <ul>
        <li>Fecha límite de recepción de trabajos: 16 de agosto de 2026.</li>
        <li>Fecha límite para camera ready: 13 de septiembre de 2026.</li>
    </ul>

    <h2>Características de los equipos</h2>
    <ul>
        <li>Un grupo de hasta 4 estudiantes y un supervisor, con un máximo de 5 participantes.</li>
        <li>Cada equipo deberá contar con al menos un estudiante y un supervisor.</li>
        <li>El supervisor puede pertenecer al ámbito académico o industrial.</li>
    </ul>

    <p>
        Las propuestas son bienvenidas para estudiantes que cursen cualquier etapa de sus estudios universitarios, desde licenciatura hasta posgrado. Se recomienda, aunque no es obligatorio, que el equipo sea multidisciplinario.
    </p>

    <h2 id="sdc-submission">Detalles de envío</h2>
    <p>
        Cada equipo deberá enviar una presentación de máximo <strong>15 diapositivas</strong> y un reporte escrito de hasta <strong>4 páginas</strong>, siguiendo el formato <a class="uline"
            href="https://mexihc.org/aihc_template.zip">Proceedings Format</a>, describiendo con mayor detalle los puntos planteados en la presentación. Ambos documentos deberán enviarse en español o inglés, en formato PDF, y deben describir:
    </p>

    <ul>
        <li>El problema a tratar.</li>
        <li>El impacto social de la propuesta en un contexto global.</li>
        <li>El proceso utilizado durante el proyecto.</li>
        <li>La metodología, los métodos y las técnicas utilizadas.</li>
        <li>La descripción del público objetivo.</li>
        <li>La solución propuesta.</li>
    </ul>

    <p>
        Además, se anima al equipo a proporcionar un video complementario de máximo 5 minutos que ilustre cómo su solución se adapta a la vida de los usuarios de la población vulnerable mediante escenarios. Aunque este video es opcional, puede ayudar al jurado a comprender mejor la solución propuesta. En cualquier caso, el proceso de selección se basará en los dos documentos obligatorios: la presentación y el informe escrito.
    </p>

    <p>
        Al igual que otras contribuciones enviadas a MexIHC 2026, las propuestas del Concurso de Diseño Estudiantil deben ser originales y no haber sido aceptadas previamente para presentación o publicación en ningún otro evento.
    </p>

    <p>Favor de mandar las propuestas a <strong>sdc.2026@mexihc.org</strong></p>

    <h2 id="sdc-selection">Proceso de selección</h2>
    <p>Las propuestas se evaluarán tomando en cuenta los siguientes puntos:</p>
    <ul>
        <li>Calidad del trabajo.</li>
        <li>Propuesta novedosa.</li>
        <li>Importancia de la contribución al área de interacción humano-computadora.</li>
        <li>Claridad en la redacción del documento.</li>
        <li>Solidez del argumento sobre el impacto físico, psicológico o social esperado de la propuesta.</li>
    </ul>

    <p>
        La confidencialidad de los envíos se mantiene durante el proceso de revisión. Todas las presentaciones rechazadas se mantendrán confidenciales a perpetuidad. Los materiales de las propuestas aceptadas se mantendrán confidenciales hasta el inicio de la conferencia, con excepción del título y la información de autoría, que podrán publicarse en el sitio web antes del evento. Los envíos no deben contener información confidencial, privada o propietaria que no pueda divulgarse en el momento de la publicación.
    </p>

    <p>
        Un jurado integrado por investigadores y representantes de la industria elegirá los cinco mejores proyectos a partir de los dos expedientes presentados. Los cinco proyectos finalistas serán invitados al evento MexIHC 2026.
    </p>

    <p><strong>Las propuestas enviadas fuera de las fechas señaladas no serán consideradas.</strong></p>

    <h2>Publicación</h2>
    <p>
        Los trabajos aceptados serán publicados en el sitio web oficial de la conferencia y recibirán un diploma de participación. Los tres primeros lugares recibirán su reconocimiento correspondiente durante la conferencia.
    </p>

    <h2>En la conferencia</h2>
    <p>
        Los cinco mejores proyectos serán invitados a presentar una exposición oral corta durante la conferencia.
    </p>
    <p>
        La presentación podrá realizarse en inglés o en español, y al menos dos representantes del equipo deberán presentar el proyecto durante el evento. Un jurado de cuatro personas, representativas de la industria y la academia, seleccionará los tres proyectos ganadores.
    </p>

    <h2 class="my-4">{{ $t("organizers.student_design_competition_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/carlos.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/carlos.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Carlos Toxtli
                </template>
                <template #institution>
                    Clemson University, USA
                </template>
                <template #email>
                    sdc.2026@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/niels.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/niels.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Niels Martínez
                </template>
                <template #institution>
                    Universidad Autónoma de Coahuila, MX
                </template>
                <template #email>
                    sdc.2026@mexihc.org
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>
