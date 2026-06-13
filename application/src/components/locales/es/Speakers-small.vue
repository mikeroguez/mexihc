<script setup>
import SpeakerItem from '@/components/SpeakerItem.vue'
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="row mb-4">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/roberto.png" alt="Fotografía de Roberto Martínez-Maldonado"
                    class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url('/assets/img/people/roberto.png');"></div>
            </template>
            <template #name>
                <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#roberto-martinez-maldonado' })"
                    class="uline">
                    Roberto Martínez-Maldonado
                </RouterLink>
            </template>
            <template #puesto>Profesor Asociado en Analíticas del Aprendizaje</template>

            Universidad Monash, Australia. Su investigación aborda los aspectos sociotécnicos de la inteligencia
            artificial en educación y el diseño de tecnologías centradas en las personas para apoyar el aprendizaje,
            la colaboración y la agencia humana.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/gillian.png" alt="Gillian Hayes"
                    class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url('/assets/img/people/gillian.png');"></div>
            </template>
            <template #name>
                <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#gillian-hayes' })" class="uline">
                    Gillian Hayes
                </RouterLink>
            </template>
            <template #puesto>Chancellor’s Professor y Profesora Kleist de Informática</template>

            Universidad de California, Irvine. Su investigación se encuentra en la intersección de la computación
            centrada en las personas, la accesibilidad y el cómputo móvil y ubicuo, con énfasis en la agencia, la
            dignidad y el florecimiento en la vida cotidiana.
        </SpeakerItem>
    </div>
</template>
