<script>
import SpeakerItem from '../../SpeakerItem.vue'
import Tr from '@/i18n/translation'

export default {
    components: {
        SpeakerItem
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <div class="row mb-4">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/saiph.jpg" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/saiph.jpg&quot;);">
                </div>
            </template>
            <template #name>
                Saiph Savage
            </template>

            Profesora asistente y directora del Civic A.I. Lab en Northeastern University. Su investigación se centra en
            desarrollar
            tecnología cívica inteligente para organizar la acción colectiva y combatir la desinformación. Ha trabajado
            en Intel
            Labs y Microsoft Bing, y ha enseñado en universidades como West Virginia y Carnegie Mellon. Su trabajo ha
            sido
            reconocido en medios académicos y ha recibido varios premios y becas.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/jesus_fa.jpg" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/jesus_fa.jpg&quot;);">
                </div>
            </template>
            <template #name>
                Jesús Favela
            </template>
            Investigador en el Departamento de Ciencias de la Computación del CICESE y dirige el Laboratorio de Cómputo
            Móvil y
            Ubicuo. Estudió en la UNAM y obtuvo su maestría y doctorado en el MIT. Sus áreas de interés incluyen el
            cómputo
            ubicuo y la interacción humano-computadora. Ha sido presidente de la Sociedad Mexicana de Ciencias de la
            Computación
            y es miembro nivel 3 del SNI.
        </SpeakerItem>
    </div>
</template>