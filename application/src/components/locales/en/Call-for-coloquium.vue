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
            { label: 'Paper requirements', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-paper-requirements' }) },
            { label: 'Important Dates', to: Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' }) }
        ]"
        :milestones="[
            { label: 'Submission deadline', date: '2024-08-15' },
            { label: 'Notification of acceptance', date: '2024-09-13' },
            { label: 'Camera-ready final submissions', date: '2024-09-20' },
            { label: 'MexIHC 2024 starts', date: '2024-11-06', kind: 'conference-start' },
            { label: 'MexIHC 2024 ends', date: '2024-11-08', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-dates' })"
        all-dates-label="See all important dates"
    />

    <p>
        We warmly welcome both master's and doctoral students currently enrolled in graduate
        programs focused on human-computer interaction (HCI) to submit their research
        proposals for consideration in the Graduate Colloquium of the X Mexican Conference
        on Human-Computer Interaction (MexIHC 2024).
    </p>

    <h2 id="cgc-objective">Objective</h2>
    <p>
        The MexIHC Graduate Colloquium offers graduate students a unique platform to
        present their research to Mexico's Human-Computer Interaction (HCI) academic
        community, fostering connections with fellow graduate scholars, networking
        opportunities, and mentorship from distinguished international leaders in HCI, spanning
        both industry and academia.
    </p>

    <h2 id="cgc-participation">Participating in the MexIHC Graduate Consortium</h2>

    <p>
        If you're interested in joining the graduate consortium, you'll need to fill out a form
        providing essential details about yourself, your research, your motivations for
        participating, and submit a four-page abstract outlining your work. As a participant, you
        should be ready to:
    </p>

    <ul>
        <li>Deliver a concise 10-minute presentation on your research during the consortium.</li>
        <li>Engage in lively group discussions centered around your work and that of your peers.</li>
        <li>Benefit from personalized mentoring sessions led by esteemed HCI researchers.</li>
    </ul>

    <h2>Preparing the submission materials to the graduate consortium</h2>

    <p>
        The research proposal must be written in English or Spanish, using <a
            href="https://mexihc.org/aihc_template.zip" class="uline">the AmexIHC
            "Avances en Interacción Humano-Computadora" Journal Template</a> (up to 4 pages), and
        the student presenting at the colloquium should be the first author, the accepted papers
        will be published in the <a href="https://publicaciones.amexihc.org/" class="uline">AMexIHC journal</a>.
    </p>
    <p>
        Student participants should be prepared to give a <strong>10-minute talk during the
            colloquium about their work in progress</strong>. Proposed experiments if appropriate; Any
        preliminary evaluation and findings are welcomed, but this is not required. At the end of
        each talk, a group discussion will be held.
    </p>

    <p>
        We encourage you to read the
        <RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })" class="uline">
            Accessibility recommendations for authors.
        </RouterLink>
    </p>

    <h2 id="cgc-paper-requirements">Paper requirements</h2>
    <p>
        Applicants must submit via the online form a 4-page paper explaining their research.
    </p>

    <ol>
        <li>
            <p>
                <strong>Research Explanation.</strong> While final versions of accepted papers will be
                published in the AMexIHC journal, on the Graduate Consortium website and
                publicized in the MexIHC community.
            </p>
            <p>
                The research explanation should include:
            </p>
            <ul>
                <li>Motivation for the proposed research</li>
                <li>Background and related work (including key references)</li>
                <li>Description of proposed research, including key research questions and/or
                    hypothesis, as well as the planned methodology to be used for
                    investigating</li>
                <li>Specific research issues and/or challenges the student would like to
                    discuss</li>
            </ul>
        </li>
        <li>
            <p>
                <strong>Format Requirements.</strong> Submitted papers must be written in English or Spanish,
                formatted according to Avances en Interacción Humano-Computadora
                (AMexIHC) format guidelines, and submitted as a single PDF file (embedding all
                required fonts). The paper should be no more than 4 pages in length including
                figures and references. The title and the abstract must be written in English if the
                paper is in Spanish.
            </p>
        </li>
        <li>
            <p>
                <strong>Anonymous submission.</strong> MexIHC 2024 will utilize a fully-anonymous review
                process for Full and Short Papers, in which the authors must anonymize their
                paper submissions. You should not anonymize references to your prior work
                (these are needed as part of the review process). Rather, you should refer to all
                prior work in the third person. While it may not be possible to remove all clues to
                who the authors are, we expect authors to do their best.
            </p>
        </li>
    </ol>

    <h2>Submission guidelines</h2>
    <p>
        Students are responsible for ensuring that their submissions adhere to standard
        formatting and are printable on a standard printer. The Program Committee members of
        the Graduate Consortium will review all submissions.
    </p>
    <p>
        Please use the <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4K357Pa9qA06M9HCRYzJfcK_9HVA_sVQKGw3b3wKza5HzCQ/viewform" class="uline">Graduate Consortium submission form</a> to submit proposals.
    </p>

    <h2>Selection criteria</h2>
    <p>
        This call welcomes submissions from all graduate students. Submissions will be
        evaluated based on a four-page research summary. The primary criteria for selecting
        works will be clarity and quality of the submitted paper.
    </p>

    <h2 id="cgc-dates">Important dates</h2>
    <ul>
        <li>Submission deadline (12pm (noon) UTC-6): August <del>8th</del> 15th, 2024 (extended)</li>
        <li>Notification of acceptance: September 6th, 2024</li>
        <li>Camera-ready submission: September 13th, 2024</li>
        <li>Consortium: TBD</li>
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
