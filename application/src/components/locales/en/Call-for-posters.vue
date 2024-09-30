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
                <strong class="text-primary text-gradient">Deadline for submission:</strong> August <del>8th</del> 30th, 2024 (extended)
                <strong>({{ $t("about.open") }})</strong><br>
                <RouterLink :class="uline" :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' })" class="uline">
                    See all important dates
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        We invite practitioners, researchers, and students to submit their work to the poster track at MexIHC 2024.
        Posters provide a great opportunity for academics and practitioners to get valuable feedback on early-stage work
        and discuss potential collaborations. Posters must present work in progress, preliminary results, small-scale
        studies, late-breaking scientific and professional news showing promise, a demonstration of a technical tool,
        etc. Contributions will be exhibited in a poster session during the MexIHC conference. Works submitted to the
        poster track can be written either in English or Spanish (title and abstract in English).
    </p>

    <h2 id="cpt-dates">Important Dates</h2>
    <ul>
        <li>Submission deadline: Wednesday, August <del>8th</del> 30th (extended) </li>
        <li>Notification of acceptance: Friday, September <del>6th</del> 13th</li>
        <li>Camera-ready final submissions: Friday, September <del>13th</del> 20th</li>
    </ul>

    <h2>Submission Details</h2>

    <P>
        Authors wishing to submit a paper must:
    </P>
    <ul>
        <li>
            Format their papers (four pages maximum) following the official <a class="uline"
                href="https://mexihc.org/aihc_template.zip">AmexIHC Journal Format</a>.
        </li>
        <li>
            Accepted papers will be published in the <a class="uline"
                href="https://revistaaihc.mx/"></a>AMexIHC publication “Avances en Interacción
            Humano-Computadora”.
        </li>
        <li>
            Proposals should be submitted by email with subject “MexIHC 2024 Poster” to: posters.2024@mexihc.org
        </li>
        <li>
            We encourage you to read the
            <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })">
                {{ $t("nav.accessibility_for_autors") }}
            </RouterLink>.
        </li>
    </ul>
    <p>
        Your submission must be original work. It cannot be under concurrent review for publication by another
        conference or journal, nor has it been published elsewhere. Please submit accurate and complete references.
    </p>

    <h2>Review Process</h2>
    <p>
        Papers will be anonymously peer-reviewed by the members of the MexIHC 2024 program committee. Submissions will
        be evaluated based on their originality, significance of the contribution to the field, technical correctness,
        and presentation.
    </p>
    <p>
        The Poster chairs will send poster exhibition instructions to the authors of the accepted papers.
    </p>

    <h2>Attendance</h2>
    <p>
        At least one author of each accepted submission must register for the conference and present the poster.
    </p>

    <h2 class="my-4">Poster Chairs</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/adolfo.jpg" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/adolfo.jpg&quot;);">
                    </div>
                </template>
                <template #name>
                    Adolfo Mejía
                </template>
                <template #institution>
                    Universidad Autónoma de Coahuila
                </template>
                <template #email>
                    posters.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>        

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/jose.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/jose.png&quot;);">
                    </div>
                </template>
                <template #name>
                    José Mercado Chan
                </template>
                <template #institution>
                    CICESE-UT3, MX
                </template>
                <template #email>
                    posters.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/sanely.jpg" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/sanely.jpg&quot;);">
                    </div>
                </template>
                <template #name>
                    Sanely Gaytán
                </template>
                <template #institution>
                    Universidad de Colima
                </template>
                <template #email>
                    posters.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>