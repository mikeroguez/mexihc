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
                <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>8</del> 15 de agosto de 2024 (12pm
                (medio día) UTC-6) (extendida)<strong>({{ $t("about.open") }})</strong><br>
                <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' })" class="uline">
                    Ver todas las fechas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        Damos una cálida bienvenida tanto a estudiantes de maestría como de doctorado
        actualmente inscritos en programas de posgrado centrados en la interacción humano-
        computadora (HCI) a presentar sus propuestas de investigación para su consideración
        en el Coloquio de Graduados de la X Conferencia Mexicana sobre Interacción Humano-
        Computadora (MexIHC 2024).
    </p>

    <h2>Objetivo</h2>
    <p>
        El Coloquio de Graduados MexIHC ofrece a los estudiantes de posgrado una
        plataforma única para presentar su investigación a la comunidad académica de
        Interacción Humano-Computadora (HCI) de México, fomentando conexiones con otros
        estudiantes graduados, oportunidades de networking y mentoría de distinguidos líderes
        internacionales en HCI, tanto de la industria como de la academia.
    </p>

    <h2>Participación en el Consorcio de Graduados MexIHC</h2>

    <p>
        Si estás interesado en unirte al consorcio de graduados, deberás completar un
        formulario proporcionando detalles esenciales sobre ti, tu investigación, tus
        motivaciones para participar y enviar un resumen de cuatro páginas que describa tu
        trabajo. Como participante, debes estar preparado para:
    </p>

    <ul>
        <li>Realizar una presentación concisa de 10 minutos sobre tu investigación durante el consorcio.</li>
        <li>Participar en animadas discusiones grupales centradas en tu trabajo y el de tus compañeros.</li>
        <li>Beneficiarte de sesiones de mentoría personalizadas dirigidas por sobresalientes investigadores del área de
            HCI.</li>
    </ul>

    <h2>Preparación de los materiales de presentación para el consorcio de graduados</h2>

    <p>
        La propuesta de investigación debe estar escrita en inglés o español, utilizando la <a
            href="https://mexihc.org/aihc_template.zip" class="uline">Plantilla de la Revista &quot;Avances en
            Interacción Humano-Computadora&quot;</a> de AMexIHC
        (hasta 4 páginas), y el estudiante que presente en el coloquio debe ser el primer autor,
        los artículos aceptados se publicarán en la <a href="https://publicaciones.amexihc.org/" class="uline">revista
            AMexIHC</a>.
    </p>
    <p>
        Los participantes deben estar preparados para dar una charla de <strong>10 minutos durante el
            coloquio sobre su trabajo en curso</strong>. Se pueden proponer experimentos si corresponde;
        se reciben cualquier evaluación preliminar y hallazgos, pero no es obligatorio. Al final
        de cada charla, se llevará a cabo una discusión grupal.
    </p>

    <p>
        Te animamos a leer las
        <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })" class="uline">
            recomendaciones de accesibilidad para autores.
        </RouterLink>
    </p>

    <h2>Requisitos del artículo</h2>
    <p>
        Los solicitantes deben enviar a través del formulario en línea un artículo de 4 páginas
        explicando su investigación.
    </p>

    <ol>
        <li>
            <p>
                <strong>Explicación de la investigación.</strong> Si bien las versiones finales de los artículos
                aceptados se publicarán en la revista AMexIHC, en el sitio web del Consorcio de
                Graduados y se publicarán en la comunidad MexIHC.
            </p>
            <p>
                La explicación de la investigación debe incluir:
            </p>
            <ul>
                <li>Motivación para la investigación propuesta.</li>
                <li>Antecedentes y trabajos relacionados (incluidas referencias clave).</li>
                <li>Descripción de la investigación propuesta, incluidas las preguntas clave
                    de investigación y/o hipótesis, así como la metodología planeada para la
                    investigación.</li>
                <li>Problemas específicos de investigación y/o desafíos que el estudiante
                    quisiera discutir.</li>
            </ul>
        </li>
        <li>
            <p>
                <strong>Requisitos de formato.</strong> Los artículos enviados deben estar escritos en inglés o
                español, con formato según las pautas de formato de la revista Avances en
                Interacción Humano-Computadora (AMexIHC), y enviados como un único
                archivo PDF (incrustando todas las fuentes necesarias). El artículo no debe
                tener más de 4 páginas de longitud, incluidas figuras y referencias. El título y el
                resumen deben estar escritos en inglés si el artículo está en español.
            </p>
        </li>
        <li>
            <p>
                <strong>Envío anónimo.</strong> MexIHC 2024 utilizará un proceso de revisión completamente
                anónimo, en el que los autores deben anonimizar sus envíos de artículos. No se
                debe anonimizar las referencias a su trabajo previo (estas son necesarias como
                parte del proceso de revisión). En su lugar, debe referirse a todo trabajo previo
                en tercera persona. Aunque puede que no sea posible eliminar todas las pistas
                sobre quiénes son los autores, esperamos que los autores hagan su mejor
                esfuerzo.
            </p>
        </li>
    </ol>

    <h2>Directrices de envío</h2>
    <p>
        Los estudiantes son responsables de asegurarse de que sus envíos cumplan con el
        formato estándar y sean imprimibles en una impresora estándar. Los miembros del
        Comité de Programa del Consorcio de Graduados revisarán todos los envíos.
    </p>
    <p>
        Por favor, utiliza el <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4K357Pa9qA06M9HCRYzJfcK_9HVA_sVQKGw3b3wKza5HzCQ/viewform"
            class="uline">formulario de envío del Consorcio de Graduados</a> para enviar
        propuestas.
    </p>

    <h2>Criterios de selección</h2>
    <p>
        Esta convocatoria da la bienvenida a las presentaciones de todos los estudiantes de
        posgrado. Los envíos serán evaluados en función de un resumen de investigación de
        cuatro páginas. Los criterios principales para seleccionar trabajos serán la claridad y la
        calidad del artículo presentado.
    </p>

    <h2 id="cgc-dates">Fechas importantes</h2>
    <ul>
        <li>Fecha límite de envío (12pm (medio día) UTC-6): <del>8</del> 15 de agosto de 2024 (extendida)</li>
        <li>Notificación de aceptación: 6 de septiembre de 2024</li>
        <li>Envío de la versión final: 13 de septiembre de 2024</li>
        <li>Consorcio: Por determinar</li>
    </ul>


    <h2 class="my-4">{{ $t("organizers.graduate_colloquium_chairs_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/valeria.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/valeria.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Valeria Soto Mendoza
                </template>
                <template #institution>
                    CIMA Universidad Autónoma de Coahuila, MX
                </template>
                <template #email>
                    gc.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/raymundo.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/raymundo.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Raymundo Cornejo
                </template>
                <template #institution>
                    Universidad Autónoma de Chihuahua, MX
                </template>
                <template #email>
                    gc.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>