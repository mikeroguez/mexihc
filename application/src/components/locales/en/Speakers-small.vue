<script setup>
import SpeakerItem from '@/components/SpeakerItem.vue'
import Tr from '@/i18n/translation'
</script>

<template>
    <div class="row mb-4">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/roberto.png" alt="Photo of Roberto Martínez-Maldonado"
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
            <template #puesto>Associate Professor in Learning Analytics</template>

            Monash University, Australia. His research examines the sociotechnical dimensions of artificial intelligence
            in education and human-centered technologies that support learning, collaboration, and human agency.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/nophoto.png" alt="Photo unavailable for Gillian Hayes"
                    class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url('/assets/img/nophoto.png');"></div>
            </template>
            <template #name>
                <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#gillian-hayes' })" class="uline">
                    Gillian Hayes
                </RouterLink>
            </template>
            <template #puesto>Chancellor’s Professor and Kleist Professor of Informatics</template>

            University of California, Irvine. Her research sits at the intersection of human-centered computing,
            accessibility, and mobile and ubiquitous computing, with a focus on agency, dignity, and flourishing in
            everyday life.
        </SpeakerItem>
    </div>
</template>
