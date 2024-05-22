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
                <strong class="text-primary text-gradient">Fecha límite de envío:</strong> 16 de agosto de 2024 <strong>
                    ({{ $t("about.open") }})</strong><br>
            </div>
        </li>
    </ol>

    <h3>Objetivos</h3>
    <ul>
        <li>Proveer una oportunidad a los estudiantes de diferentes campos de Interacción
            humano computadora (Ciencias de la computación, interacción y diseño visual,
            psicología, ciencias sociales, etc.) a participar en una actividad practica y demostrar
            sus habilidades en la resolución de problemas, diseño interactivo y experiencia de
            usuario.
        </li>
        <li>
            Crear un espacio para soluciones para problemas reales utilizando diferentes
            enfoques (investigación de diseño, lluvia de ideas, prototipos, implementación,
            evaluación, etc.)
        </li>
        <li>
            Fomentar una mayor interacción entre los representantes de la industria y los
            estudiantes
        </li>
    </ul>

    <h3>Desafío de diseño: Apoyo para poblaciones vulnerables</h3>
    <p>
        Según la Organización Mundial de la Salud, aproximadamente el 15% de la población
        mundial tiene alguna forma de discapacidad o forma parte de una población vulnerable. Las
        poblaciones vulnerables incluyen (1) niños y menores de edad; (2) personas con
        trastornos/discapacidades del desarrollo; (3) personas con enfermedades crónicas (por
        ejemplo, VIH, cáncer, enfermedades mentales); (4) pacientes traumatizados; (5) pacientes
        terminales; (6) adultos mayores; (7) prisioneros; (8) personas económicamente
        desfavorecidas, entre otros. La vulnerabilidad de estas personas se ve aumentada por la
        raza, etnia, edad, sexo, y factores como ingresos, cobertura de seguro (o falta de ella), y la
        ausencia de una fuente usual de servicios de atención. Sus problemas y necesidades de
        salud y atención médica se entrecruzan con factores sociales, incluyendo vivienda, pobreza y
        educación inadecuada. A pesar de los esfuerzos y metas del Gobierno Mexicano para reducir
        o aliviar algunos de los desafíos de las poblaciones vulnerables (por ejemplo,
        centros/servicios públicos para proporcionar servicios de educación especial), persisten
        disparidades significativas, incluyendo factores de riesgo, acceso a servicios de atención
        médica, morbilidad y mortalidad, en las poblaciones vulnerables.
    </p>

    <p>
        En esta Competencia de Diseño Estudiantil, te animamos a contribuir apoyando a las
        poblaciones vulnerables: utiliza enfoques de diseño centrados en el ser humano para
        desarrollar una nueva forma (por ejemplo, un producto, interfaz, sistema o servicio) para
        apoyar, empoderar o aliviar los desafíos físicos, psicológicos o sociales alrededor de una
        población vulnerable. El alcance de este desafío de diseño es amplio: por ejemplo, podrías

        enfocarte en atención médica, educación, servicios públicos, caridad, alimentación, pobreza
        o arte, solo por nombrar algunos. Puedes trabajar con una población vulnerable en particular
        (por ejemplo, autismo) o puedes trabajar con múltiples poblaciones vulnerables que tengan
        características comunes (por ejemplo, condiciones crónicas de salud). Puedes adoptar
        diferentes estrategias de diseño, incluyendo diseño participativo, co-creación y co-diseño,
        diseño de servicios, diseño para la innovación social, diseño inclusivo e innovación abierta.
        Puedes idear un enfoque de diseño participativo y de co-creación utilizando tecnologías
        existentes o puedes encontrar oportunidades en desarrollos tecnológicos contemporáneos,
        como impresión 3D, fabricación digital, percepción ciudadana, economía colaborativa, big
        data, redes sociales, IoT, gamificación, nuevos sensores y actuadores, y Realidad
        Aumentada, por nombrar solo algunos.
    </p>

    <p>Recomendamos especialmente que se consideren los siguientes criterios:</p>

    <ul>
        <li>¿La solución de diseño aborda uno o más desafíos reales de la población vulnerable?</li>
        <li>¿La solución de diseño utiliza la tecnología de una manera apropiada y novedosa?</li>
        <li>¿Se identificó y citó adecuadamente el trabajo previo más relevante?</li>
        <li>¿Fue el análisis, la síntesis, el diseño y la evaluación sistemáticos y suficientes?</li>
        <li>¿Fueron éticamente apropiados el proceso de investigación y la participación de las
            partes interesadas (por ejemplo, se siguieron las directrices institucionales)?</li>
        <li>¿Estuvieron involucrados verdaderos interesados en el proceso de investigación,
            desarrollo y evaluación?</li>
        <li>¿Exploró el equipo todo el entorno de las partes interesadas, condiciones y contextos?</li>
        <li>¿La solución de diseño estuvo bien elaborada y presentada de manera efectiva?</li>
    </ul>
    <h3 id="sdc-dates">Fechas importantes</h3>
    <ul>
        <li>Fecha límite de recepción de trabajos: 16 de agosto de 2024.</li>
        <li>Fecha límite de camera ready: 13 de septiembre de 2024.</li>
    </ul>

    <h3>Características de los equipos</h3>
    <ul>
        <li>Un grupo de cuatro estudiantes y un supervisor (máximo 5 participantes).</li>
        <li>Cada equipo deberá tener al menos un estudiante y un supervisor.</li>
        <li>Cada supervisor podrá asesorar únicamente a un equipo.</li>
        <li>El supervisor puede pertenecer a un ambiente académico o industrial.</li>
    </ul>

    <p>
        Las propuestas son bienvenidas a estudiantes que estén cursando cualquier periodo en sus
        universidades, desde licenciatura a posgrado. Se recomienda mas no es obligatorio, que el
        equipo sea multidisciplinario.
    </p>

    <h3>Detalles de envío</h3>
    <p>
        Cada equipo deberá enviar una presentación de un máximo de <strong>15 diapositivas</strong> y un reporte
        escrito de hasta <strong>cuatro páginas</strong> con el siguiente formato <a class="uline"
            href="https://drive.google.com/file/d/1MGeTyj5zWwj9W7KeORBbJjM1MzuSHbVC/view">Proceedings Format</a>
        describiendo
        con más detalle los puntos planteados en la presentación, sea en español o inglés, en
        formato PDF. Ambos documentos deben describir:
    </p>

    <ul>
        <li>El problema a tratar</li>
        <li>El impacto social de la propuesta en un contexto de México.</li>
        <li>El Proceso utilizado durante el proyecto.</li>
        <li>La Metodología, métodos y técnicas utilizadas.</li>
        <li>La descripción del público objetivo.</li>
        <li>La solución propuesta.</li>
    </ul>

    <p>
        Además, animamos al equipo a proporcionar un vídeo complementario (máximo 5 minutos)
        que ilustre cómo su solución se adapta a las vidas de los usuarios de la población vulnerable
        con la ayuda de escenarios. Aunque el vídeo complementario es opcional, puede ayudar al
        jurado a comprender mejor la solución propuesta. En todo caso, el proceso de selección se
        basará en los dos expedientes preceptivos (presentación e informe escrito).
    </p>

    <p>
        Al igual que con otras presentaciones enviadas a MexIHC 2024, las propuestas del Concurso
        de Diseño Estudiantil no debieron haber sido aceptadas previamente para su presentación o
        publicación en ningún otro evento.
    </p>

    <p>Favor de mandar las propuestas a <strong>sdc.2024@mexihc.org</strong></p>

    <h3>Proceso de selección</h3>
    <p>Las propuestas se evaluarán tomando en cuenta los siguientes puntos:</p>
    <ul>
        <li>Calidad del trabajo.</li>
        <li>Propuesta novedosa.</li>
        <li>Importancia de la contribución al área de interacción humano computadora.</li>
        <li>Claridad en la escritura del documento.</li>
        <li>Solidez del argumento sobre el impacto físico, psicológico o social esperado de la
            propuesta.</li>
    </ul>

    <p>
        La confidencialidad de los envíos se mantiene durante el proceso de revisión. Todas las
        presentaciones rechazadas se mantendrán confidenciales a perpetuidad. Todos los
        materiales enviados para las presentaciones aceptadas se mantendrán confidenciales hasta
        el inicio de la conferencia, con la excepción del título y la información del autor que se
        publicarán en el sitio web antes de la conferencia. Los envíos no deben contener información
        confidencial, privada o de propiedad exclusiva que no pueda divulgarse en el momento de la
        publicación.
    </p>

    <p>
        Un jurado formado por investigadores y representantes de la industria elegirá los cinco
        mejores proyectos a partir de los dos expedientes presentados. Los cinco proyectos finalistas
        serán invitados al evento MexIHC 2024.
    </p>

    <p><strong>Propuestas enviadas fuera de las fechas señalas no serán consideradas.</strong>.</p>

    <h3>En la conferencia</h3>
    <p>
        Los mejores cinco proyectos serán invitados como una presentación oral corta en la
        conferencia.
    </p>
    <p>
        La presentación deberá ser en Inglés o Español y al menos dos representantes del equipo,
        deberán realizar la presentación del proyecto durante el evento. Un jurado de cuatro
        personas representativas de la industria y la academia seleccionaran a los tres proyectos
        ganadores.
    </p>

    <h3>Publicación</h3>
    <p>
        Todos los trabajos aceptados serán publicados en <a class="uline"
            href="https://aihc.amexihc.org/index.php/aihc/about">AMexIHC publication journal</a>.
    </p>

    <h3 class="my-4">{{ $t("organizers.student_design_competition_title") }}</h3>
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
                    sdc.2024@mexihc.org
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
                    sdc.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>