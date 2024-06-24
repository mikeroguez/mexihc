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
                <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>14 de junio</del> 1 de julio de 2024 (extendida)
                <strong>(Abierta)</strong><br>
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cfp-dates' })" class="uline">
                    Ver todas las fechas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        Invitamos a contribuciones originales sobre el tema de la IHC en la era de las nuevas realidades, así como temas
        relevantes en Interacción Humano-Computadora y Diseño de Interacción. Los artículos serán revisados de manera
        anónima por los miembros del comité del programa MexIHC 2024. Las propuestas serán evaluadas en función de su
        originalidad, la importancia de la contribución al campo y al tema, la corrección técnica y la presentación.
    </p>

    <h2>Tipo de contribuciones</h2>
    <br>
    <h3>Artículos completos (Hasta 8 páginas)</h3>
    <p>
        Los artículos completos deben describir trabajos originales que no hayan sido publicados previamente y
        proporcionar resultados significativos de investigación científica. Los artículos completos pueden expandir
        trabajos previamente publicados en forma de resúmenes o pósteres, pero deben presentar contenido novedoso y
        significativamente ampliado, y deberían citar cualquier resumen previo de pósteres o trabajos en progreso. Los
        artículos completos pueden estar escritos en inglés o español.
    </p>

    <h3>Artículos cortos o Notas (Hasta 4 páginas)</h3>
    <p>
        Los artículos cortos deben describir trabajos innovadores en progreso, sin resultados significativos aún, que
        contribuyan a una investigación bien fundamentada. Los artículos cortos pueden estar escritos en inglés o
        español.
    </p>

    <p>
        Al menos un autor de las contribuciones aceptadas debe registrarse como presentador antes de la fecha límite de
        registro temprano. Otras pistas, como el Consorcio de Posgrado y los Pósteres, se anunciarán pronto. Por favor,
        vuelva más tarde para obtener más información.
    </p>

    <h2>Detalles de envío</h2>

    <p>
        Los artículos completos y cortos escritos en inglés o español deben utilizar <a
            href="https://mexihc.org/aihc_template.zip" class="uline">a plantilla de revista "Avances en Interacción Humano-Computadora"</a> de AmexIHC.
            Envíe su artículo utilizando la cuenta de <a href="https://www.easychair.org/my/conference?conf=mexihc2024">EasyChair para MexIHC 2024.</a>.
    </p>

    <h2 id="cfp-dates">Fechas importantes</h2>
    <ul>
        <li>Fecha límite para envíos: <del>14 de junio</del> 1 de julio de 2024 (extendida)</li>
        <li>Notificación de aceptación: 20 de agosto de 2024</li>
        <li>Envío final de versión lista para la publicación: 30 de agosto de 2024</li>
        <li>Versión lista para la publicación: 25 de agosto de 2024</li>
        <li>MexIHC 2024: del 6 al 8 de noviembre</li>
    </ul>

    <h2>Envío anónimo</h2>

    <p>
        MexIHC 2024 utilizará un proceso de revisión completamente anónimo para Artículos Completos y Cortos, en el que
        los autores deben anonimizar sus envíos de papel. No debe anonimizar las referencias a su trabajo anterior
        (estas son necesarias como parte del proceso de revisión). Más bien, debe referirse a todo trabajo anterior en
        tercera persona. Aunque puede que no sea posible eliminar todas las pistas sobre quiénes son los autores,
        esperamos que los autores hagan su mejor esfuerzo.
    </p>

    <h2>Publicación</h2>

    <p>
        Todos los artículos completos y cortos aceptados serán publicados en un número especial de <a
            href="https://revistaaihc.mx/">la revista AMexIHC Avances en Interacción Humano-Computadora</a>.
    </p>

    <h2>Temas de interés</h2>

    <p>
        MexIHC 2024 busca contribuciones de trabajos sobre (pero no limitados a) las siguientes áreas clave:
    </p>

    <h3>IA en HCI</h3>
    <ul>
        <li>Diseño de experiencia de usuario impulsado por IA</li>
        <li>Consideraciones éticas en IA para HCI</li>
        <li>Procesamiento de lenguaje natural en interfaces</li>
        <li>Reconocimiento y respuesta emocional</li>
        <li>IA y accesibilidad</li>
        <li>Interfaces de usuario predictivas</li>
        <li>Impacto de la IA en los procesos cognitivos humanos</li>
    </ul>

    <h3>Evaluación de aplicaciones interactivas</h3>
    <ul>
        <li>Nuevos métodos y metodologías</li>
        <li>Herramientas para evaluación</li>
        <li>Estudios de caso</li>
        <li>Evaluación de accesibilidad</li>
        <li>Aspectos teóricos de HCI</li>
    </ul>

    <h3>Teorías para HCI</h3>
    <ul>
        <li>Discusiones teóricas o desafíos a las teorías actuales</li>
        <li>Modelado formal</li>
    </ul>

    <h3>Diseño</h3>
    <ul>
        <li>Nuevos métodos y metodologías</li>
        <li>Estudios de caso</li>
        <li>Herramientas para diseño</li>
        <li>Visualización de información</li>
        <li>Interfaces adaptativas</li>
        <li>Diseño universal</li>
        <li>Diseño participativo</li>
    </ul>

    <h3>Evaluación de usuarios</h3>
    <ul>
        <li>Nuevos métodos y metodologías</li>
        <li>Herramientas para evaluaciones</li>
        <li>Estudios de caso</li>
        <li>Evaluación de la experiencia del usuario</li>
        <li>Evaluación de usuarios con discapacidad</li>
        <li>Error humano y estudios cognitivos</li>
        <li>Evaluación contextual y etnometodologías</li>
        <li>Investigación de usuarios de juegos</li>
    </ul>

    <h3>Educación en HCI</h3>
    <ul>
        <li>Estudios de caso de educación en HCI</li>
        <li>HCI para mejorar la enseñanza/aprendizaje</li>
    </ul>

    <h3>Temas relacionados con HCI</h3>
    <ul>
        <li>IA en HCI</li>
        <li>Usabilidad</li>
        <li>Accesibilidad</li>
        <li>Ergonomía</li>
        <li>Gráficos por computadora</li>
        <li>Realidad Virtual</li>
        <li>Realidad Aumentada</li>
        <li>Interacción multimodal</li>
        <li>Redes Sociales</li>
        <li>Dispositivos Móviles</li>
        <li>HCI en el Contexto Médico</li>
        <li>Videojuegos</li>
        <li>Aplicaciones Lúdicas y Estéticas</li>
        <li>Aspectos culturales en el diseño</li>
        <li>Interacción Cerebro-Computadora</li>
        <li>e-Gobierno</li>
    </ul>

    <h3 class="my-4">{{ $t("organizers.program_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/pedro.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/pedro.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Pedro C. Santana-Mancilla
                </template>
                <template #institution>
                    Universidad de Colima, MX
                </template>
                <template #email>
                    tpc.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/vicky.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/vicky.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Victoria Meza-Kubo
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California, MX
                </template>
                <template #email>
                    tpc.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/monica.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/monica.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Monica Tentori
                </template>
                <template #institution>
                    CICESE, MX
                </template>
                <template #email>
                    tpc.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>