<script>
import OrganizerItem from '@/components/OrganizerItem.vue'
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'

export default {
    components: {
        OrganizerItem,
        InPageNavigationPanel
    },
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <InPageNavigationPanel
        :links="[
            { label: 'Important Dates', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' }) },
            { label: 'Submission Details', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-submission' }) },
            { label: 'Review Process', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-review' }) },
            { label: 'Attendance', to: Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-attendance' }) }
        ]"
        :milestones="[
            { label: 'Submission deadline', date: '2026-08-30' },
            { label: 'Acceptance notification', date: '2026-09-14' },
            { label: 'Camera-ready submission', date: '2026-09-20' },
            { label: 'MexIHC 2026 starts', date: '2026-10-27', kind: 'conference-start' },
            { label: 'MexIHC 2026 ends', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' })"
        all-dates-label="See all important dates"
    />

    <p>
        We invite practitioners, researchers, and students to submit their work to the poster track at MexIHC 2026.
        Posters provide a great opportunity for academics and practitioners to receive valuable feedback on early-stage
        work and discuss potential collaborations. Posters should present work in progress, preliminary results,
        small-scale studies, promising scientific and technological advances, demonstrations of technical tools, etc.
        Contributions will be exhibited during a session at MexIHC 2026. Papers submitted to this track may be written
        in English or Spanish (title and abstract in English).
    </p>

    <h2 id="cpt-dates">Important Dates</h2>
    <ul>
        <li>Submission deadline: Sunday, August 30, 2026</li>
        <li>Acceptance notification: Monday, September 14, 2026</li>
        <li>Camera-ready submission: Sunday, September 20, 2026</li>
    </ul>

    <h2 id="cpt-submission">Submission Details</h2>
    <p>Authors wishing to submit a paper must:</p>
    <ul>
        <li>
            Follow the official <a class="uline" href="https://mexihc.org/aihc_template.zip">AMexIHC Journal format</a>
            (four pages maximum).
        </li>
        <li>
            Accepted papers will be published in the AMexIHC journal "Avances en Interacción Humano-Computadora."
        </li>
        <li>
            Proposals must be submitted through EasyChair at
            <a class="uline" href="https://easychair.org/cfp/MexIHC2026Posters">https://easychair.org/cfp/MexIHC2026Posters</a>.
        </li>
        <li>
            We encourage you to read the
            <a class="uline" href="https://www.mexihc.org/2024/es/accessibility-recommendations-for-authors">
                Accessibility recommendations for authors
            </a>.
        </li>
    </ul>
    <p>
        The submitted proposal must be original. It cannot be under concurrent review for publication by another
        conference or journal, nor have been published elsewhere. Please also ensure that the references in your
        proposal are accurate and complete.
    </p>

    <h2 id="cpt-review">Review Process</h2>
    <p>
        Papers will be anonymously peer-reviewed by members of the MexIHC 2026 program committee. Submissions will be
        evaluated based on their originality, significance of the contribution to the field, technical correctness,
        and presentation.
    </p>
    <p>The poster chairs will send exhibition instructions to the authors of accepted papers.</p>

    <h2 id="cpt-attendance">Attendance</h2>
    <p>At least one author of each accepted paper must register for the conference and present the poster.</p>

    <h2 class="my-4">Poster Chairs</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/cristina.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url('/assets/img/people/cristina.png');"></div>
                </template>
                <template #name>Cristina Ramírez Fernández</template>
                <template #institution>Instituto Tecnológico de Ensenada (TecNM - ITE)</template>
                <template #email><a class="uline" href="mailto:cramirez@ite.edu.mx">cramirez@ite.edu.mx</a></template>
            </OrganizerItem>
        </div>
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/gilberto.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url('/assets/img/people/gilberto.png');"></div>
                </template>
                <template #name>Gilberto Borrego Soto</template>
                <template #institution>Instituto Tecnológico de Sonora (ITSON)</template>
            </OrganizerItem>
        </div>
    </div>
</template>
