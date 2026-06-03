<script>
import OrganizerItem from '@/components/OrganizerItem.vue';
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue';

import Tr from '@/i18n/translation'

export default {
    components: {
        OrganizerItem,
        InPageNavigationPanel
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <InPageNavigationPanel
        :links="[
            { label: 'Objective', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-objective' }) },
            { label: 'Participation', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-participation' }) },
            { label: 'Submission materials', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-materials' }) },
            { label: 'Submission and selection', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-submission' }) },
            { label: 'Important dates', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' }) }
        ]"
        :milestones="[
            { label: 'Submission deadline', date: '2026-08-09' },
            { label: 'Acceptance notification', date: '2026-09-04' },
            { label: 'Camera-ready submission', date: '2026-09-13' },
            { label: 'MexIHC 2026 starts', date: '2026-10-27', kind: 'conference-start' },
            { label: 'MexIHC 2026 ends', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' })"
        all-dates-label="See all important dates"
    />

    <p>
        We warmly welcome master's and doctoral students currently enrolled in graduate programs focused on <strong>Human-Computer Interaction (HCI)</strong> to submit their research proposals for consideration in the Graduate Colloquium of the <strong>XI Mexican Conference on Human-Computer Interaction (MexIHC 2026)</strong>.
    </p>

    <h2 id="cgc-objective">Objective</h2>
    <p>
        The MexIHC Graduate Colloquium offers graduate students a unique platform to present their research projects to Mexico's HCI academic community. This space fosters connections with other graduate students, creates networking opportunities, and provides personalized mentorship from distinguished international leaders in the field, from both industry and academia.
    </p>

    <h2 id="cgc-participation">Participation in the Graduate Colloquium</h2>
    <p>
        Interested students should provide essential information and a four-page abstract describing their research work. As a participant, you should be prepared to:
    </p>

    <ul>
        <li><strong>Concise presentation:</strong> deliver a 10-minute presentation about your research during the event.</li>
        <li><strong>Academic discussion:</strong> actively participate in group feedback sessions centered on your work and your peers' work.</li>
        <li><strong>Mentorship:</strong> benefit from personalized advice led by HCI researchers.</li>
    </ul>

    <h2 id="cgc-materials">Guidelines for Preparing Materials</h2>

    <h3 id="cgc-paper-requirements">Paper requirements</h3>
    <p>
        Applicants must submit a paper of <strong>up to 4 pages</strong>, including figures, tables, and references, explaining the development of their research. The student presenting at the colloquium must be listed as the <strong>first author</strong>.
    </p>
    <p>
        Accepted proposals will be published in the <a href="https://publicaciones.amexihc.org/" class="uline"><em>Avances en Interacción Humano-Computadora</em> (AMexIHC)</a> journal and shared on the event website.
    </p>
    <p>
        <strong>Progress note:</strong> experiments may be proposed where applicable, and preliminary evaluations and findings are welcome, but they are not required for submission. Authors are encouraged to use the <a href="https://mexihc.org/aihc_template.zip" class="uline">AMexIHC journal template</a>.
    </p>

    <p>The paper should include:</p>
    <ul>
        <li>Motivation for the proposed research.</li>
        <li>Background and related work, including key references.</li>
        <li>Description of the proposed research, research questions or hypotheses, and planned methodology.</li>
        <li>Specific issues, challenges, or research questions the student would like to discuss during the colloquium.</li>
    </ul>

    <h3>Format requirements</h3>
    <ul>
        <li>The paper may be written in Spanish or English.</li>
        <li>It must be submitted as a single PDF file with embedded fonts.</li>
        <li>If the paper is written in Spanish, the title and abstract must also be provided in English.</li>
        <li>The maximum length is 4 pages, including figures, tables, and references.</li>
    </ul>

    <h2 id="cgc-submission">Submission Guidelines and Selection Criteria</h2>
    <p>
        Students are responsible for ensuring that their submissions follow the requested format and are printable on a standard printer. Members of the Graduate Colloquium Program Committee will review all submissions.
    </p>
    <p>
        This call is open to the entire graduate student community. Abstracts will be evaluated based on conceptual and methodological clarity, the technical quality of the written proposal, and the potential impact of the project in HCI.
    </p>

    <h2 id="cgc-dates">Important dates</h2>
    <ul>
        <li><strong>August 9, 2026</strong> - Submission deadline</li>
        <li><strong>August 18-31, 2026</strong> - Review period</li>
        <li><strong>September 4, 2026</strong> - Acceptance notification</li>
        <li><strong>September 13, 2026</strong> - Camera-ready submission</li>
        <li><strong>To be determined</strong> - Graduate Colloquium</li>
    </ul>

    <h2 class="my-4">{{ $t("organizers.graduate_colloquium_chairs_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/abdel.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;/assets/img/people/abdel.png&quot;);"></div>
                </template>
                <template #name>
                    David Abdel Mejía
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/ramonRene.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;/assets/img/people/ramonRene.png&quot;);"></div>
                </template>
                <template #name>
                    Ramón Palacio
                </template>
                <template #institution>
                    Instituto Tecnológico de Sonora
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>
