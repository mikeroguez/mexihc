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

            Assistant Professor and Director of the Civic A.I. Lab at Northeastern University. Her research focuses on
            developing
            intelligent civic technology to organize collective action and combat misinformation. She has worked at
            Intel Labs and
            Microsoft Bing and has taught at universities like West Virginia and Carnegie Mellon. Her work has been
            recognized in
            academic and media outlets, and she has received multiple awards and scholarships.
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/jesus_fa.jpg" alt="" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/jesus_fa.jpg&quot;);"></div>
            </template>
            <template #name>
                Jesús Favela
            </template>
            Researcher in the Department of Computer Science at CICESE, leading the Mobile and Ubiquitous Computing
            Laboratory.
            He studied at UNAM and earned his Master's and Doctorate degrees at MIT. His interests include ubiquitous
            computing
            and human-computer interaction. He has served as President of the Mexican Society of Computer Science and is
            a level
            3 member of the SNI.
        </SpeakerItem>
    </div>
</template>