<script>
import OrganizerItem from '@/components/OrganizerItem.vue';

import Tr from '@/i18n/translation'

export default {
    components: {
        OrganizerItem
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered my-3">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <strong class="text-primary text-gradient">Fecha límite para propuestas de talleres y
                    tutoriales:</strong> <del>17 de mayo</del> 7 de junio de 2024 (extendida) <strong> ({{ $t("about.open") }})</strong><br>
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' })"
                    class="uline">
                    Ver todas las fechas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        Para promover el acceso al conocimiento de expertos y fomentar el intercambio de experiencias, el Comité
        Organizador de la conferencia MexIHC realiza la siguiente convocatoria para la participación en temas
        interdisciplinarios, relevantes, actuales y prácticos en diversas áreas de investigación en el campo de la
        Interacción Humano-Computadora.
        Las modalidades de participación son:
    </p>

    <h2>Taller</h2>
    <p>
        Cada tema relacionado con la Interacción Humano-Computadora, como los que se enumeran en la conferencia, con una
        duración de 3 hasta 8 horas.
    </p>

    <h2>Tutorial</h2>
    <p>
        Una conferencia, un mini-taller interactivo, una sesión de capacitación o cualquier otra modalidad que explore
        nuevas formas de interacción con una duración de 1 a 3 horas.
    </p>

    <h2>GUÍA PARA PROPUESTAS</h2>
    <p>
        Las propuestas para talleres y tutoriales deben contener la información necesaria para permitir a los
        responsables de los talleres evaluar su importancia, calidad e interés de la comunidad en los temas propuestos.
        Estas no deben exceder de dos páginas. Al proponer un taller, por favor proporciona (al menos) la siguiente
        información:
    </p>

    <ul>
        <li>Título y objetivos del taller o tutorial.</li>
        <li>Tiempo necesario para impartir el taller o tutorial.</li>
        <li>La relevancia del taller o tutorial en relación con los temas de la conferencia.</li>
        <li>Una breve descripción del contenido (por ejemplo, objetivos, alcance).</li>
        <li>Los temas específicos que se abordarán en el taller (agenda breve).</li>
        <li>El público objetivo.</li>
        <li>Número esperado de participantes (máximo de participantes).</li>
        <li>Nombres, afiliaciones, correo electrónico y biografías cortas de los organizadores del taller, quienes deben
            tener experiencia en los temas del taller.</li>
        <li>Requisitos especiales con respecto a la logística (por ejemplo, soportes para pósters, más de un proyector
            de video, etc.).</li>
        <li>Una biografía de los organizadores con información relevante sobre su experiencia en el tema del
            taller/tutorial (publicaciones, proyectos, etc.).</li>
        <li>La propuesta puede estar escrita en español o inglés, y tener una extensión de 3-4 páginas.</li>
        <li>Los trabajos aceptados serán publicados dentro del Journal Avances en Interacción Humano-Computadora (AIHC)
            de la <a class="uline" href="http://aihc.amexihc.org/index.php/aihc">AmexIHC</a> en la sección Trabajo en
            progreso. La plantilla es la siguiente:
            <a class="uline" href="https://mexihc.org/aihc_template.zip">https://mexihc.org/aihc_template.zip</a>
        </li>
    </ul>

    <p>Las propuestas deben enviarse a: ws.2024@mexihc.org</p>

    <h2>DESPUÉS DE LA ACEPTACIÓN</h2>
    <p>
        Los organizadores de los talleres deben desarrollar la página web con la convocatoria para presentar trabajos.
        Deben promover la convocatoria entre sus contactos y listas de correo adicionales y convenientes.
    </p>

    <h2 id="cwt-dates">Fechas importantes</h2>
    <ul>
        <li><strong><del>17 de mayo</del> 7 de junio de 2024 (extendida)</strong> – Fecha límite para propuestas de talleres y tutoriales</li>
        <li><strong><del>24 de mayo</del> 14 de junio de 2024 (extendida)</strong> – Notificación de aceptación</li>
        <li><strong>6 al 8 de noviembre de 2024</strong> - Conferencia MexIHC</li>
    </ul>
    <p>Los organizadores de talleres deben considerar que la fecha límite para la entrega de trabajos de los talleres será:</p>
    <ul>
        <li><strong>9 de agosto de 2024</strong> – Fecha límite para envíos de talleres y tutoriales</li>
        <li><strong>23 de agosto de 2024</strong> – Notificación de aceptación</li>
        <li><strong>13 de septiembre de 2024</strong> – Entrega final (Camera Ready)</li>
    </ul>

    <h2 class="my-4">{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/rene.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/rene.png&quot;);">
                    </div>
                </template>
                <template #name>
                    René F. Navarro
                </template>
                <template #institution>
                    Universidad de Sonora
                </template>
                <template #email>
                    ws.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/adriana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Adriana Iñiguez
                </template>
                <template #institution>
                    Universidad de Guadalajara
                </template>
                <template #email>
                    ws.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>