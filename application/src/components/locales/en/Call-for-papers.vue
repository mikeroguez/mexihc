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
            { label: 'Type of submissions', to: Tr.i18nRoute({ name: 'call-for-papers', hash: '#cfp-types' }) },
            { label: 'Submission details', to: Tr.i18nRoute({ name: 'call-for-papers', hash: '#cfp-submission' }) },
            { label: 'Important Dates', to: Tr.i18nRoute({ name: 'call-for-papers', hash: '#cfp-dates' }) },
            { label: 'Publication', to: Tr.i18nRoute({ name: 'call-for-papers', hash: '#cfp-publication' }) }
        ]"
        :milestones="[
            { label: 'Submission deadline', date: '2026-06-01' },
            { label: 'Notification of acceptance', date: '2026-08-07' },
            { label: 'Camera-ready final submissions', date: '2026-09-01' },
            { label: 'MexIHC 2026 starts', date: '2026-11-04', kind: 'conference-start' },
            { label: 'MexIHC 2026 ends', date: '2026-11-06', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cfp-dates' })"
        all-dates-label="See all important dates"
    />

    <p>
        We invite original contributions on the theme of HCI in the age of new realities, and
        relevant topics in Human-Computer Interaction and Interaction Design. Papers will
        be anonymously peer-reviewed by the members of the MexIHC 2026 program
        committee. Submissions will be evaluated based on their originality, significance of
        the contribution to the field and theme, technical correctness, and presentation.
    </p>

    <h2 id="cfp-types">Type of submissions</h2>
    <br>    
    <h3>Full papers (Up to 8 pages)</h3>
    <p>
        Full papers should describe original work that has not previously been published and
        provide significant scientific research results. Full papers may expand upon
        previously published work-in-progress papers and posters, but must present novel
        and significantly extended content, and should cite any previous abstracts for
        posters or working-progress papers. Full papers could be written in English or
        Spanish.
    </p>

    <h3>Short papers or Notes (Up to 4 pages)</h3>
    <p>
        Short papers should describe innovative work in progress, without significant results
        yet, that contribute to well-founded research. Short papers could be written in
        English or Spanish.
    </p>

    <p>
        At least one author of accepted submissions must register as the presenter by the
        early registration deadline. Other tracks such as Graduate Consortium, and Posters,
        will be announced soon. Please check back for more information at a later time.
    </p>

    <h2 id="cfp-submission">Submission details</h2>

    <p>
        Submissions for full and short papers written in English or Spanish should use <a
            href="https://mexihc.org/aihc_template.zip" class="uline">the
            AmexIHC “Avances en Interacción Humano-Computadora” Journal Template</a>.
        The submission Web page for MexIHC 2026 is <a href="https://easychair.org/conferences/?conf=mexihc2026" class="uline">https://easychair.org/conferences/?conf=mexihc2026</a>.
    </p>

    <h2 id="cfp-dates">Important Dates</h2>
    <ul>
        <li>Deadline for submissions: June 1, 2026</li>
        <li>Notification of acceptance: August 7, 2026</li>
        <li>Camera-ready final submissions: September 1, 2026</li>
        <li>MexIHC 2026: November 4-6, 2026</li>
    </ul>

    <h2>Anonymous submission</h2>

    <p>
        MexIHC 2026 will utilize a fully-anonymous review process for Full and Short Papers, in which the authors must
        anonymize their paper submissions. You should not anonymize references to your prior work (these are needed as
        part of the review process). Rather, you should refer to all prior work in the third person. While it may not be
        possible to remove all clues to who the authors are, we expect authors to do their best.
    </p>

    <h2 id="cfp-publication">Publication</h2>

    <p>
        All accepted full and short papers will be published in a Special Issue of <a
            href="https://revistaaihc.mx/" class="uline">the AMexIHC journal Avances en Interacción Humano-Computadora</a>.
    </p>
    
    <h2>Topics of interest</h2>

    <p>
        MexIHC 2026 seeks paper contributions on (but not limited to) the following key areas:
    </p>

    <h3>AI in HCI</h3>
    <ul>
        <li>AI-driven user experience design</li>
        <li>Ethical considerations in AI for HCI</li>
        <li>Natural Language Processing in interfaces</li>
        <li>Emotion recognition and response</li>
        <li>AI and accessibility</li>
        <li>Predictive user interfaces</li>
        <li>Impact of AI on human cognitive processes</li>
    </ul>

    <h3>Evaluation of Interactive Applications</h3>
    <ul>
        <li>New methods and methodologies</li>
        <li>Tools for evaluation</li>
        <li>Case studies</li>
        <li>Accessibility evaluation</li>
        <li>Theoretical aspects of HCI</li>
    </ul>
    
    <h3>Theories for HCI</h3>
    <ul>
        <li>Theoretical discussions or challenges to current theories</li>
        <li>Formal modeling</li>
    </ul>
    
    <h3>Design</h3>
    <ul>
        <li>New methods and methodologies</li>
        <li>Case studies</li>
        <li>Tools for designing</li>
        <li>Information visualization</li>
        <li>Adaptive interfaces</li>
        <li>Universal design</li>
        <li>Participatory design</li>
    </ul>
    
    <h3>User evaluation</h3>
    <ul>
        <li>New methods and methodologies</li>
        <li>Tools for evaluations</li>
        <li>Case studies</li>
        <li>Evaluation of user experience</li>
        <li>User evaluation with people with disabilities</li>
        <li>Human error and cognitive studies</li>
        <li>Contextual evaluation and ethno-methodologies</li>
        <li>Games user research</li>
    </ul>

    <h3>Education in HCI</h3>
    <ul>
        <li>Case studies of education in HCI</li>
        <li>HCI to improve the teaching/learning</li>
    </ul>
    
    <h3>Topics related to HCI</h3>
    <ul>
        <li>AI in HCI</li>
        <li>Usability</li>
        <li>Accessibility</li>
        <li>Ergonomics</li>
        <li>Computer Graphics</li>
        <li>Virtual Reality</li>
        <li>Augmented Reality</li>
        <li>Multi-modal Interaction</li>
        <li>Social Networks</li>
        <li>Mobile Devices</li>
        <li>HCI in the Medical Context</li>
        <li>Video Games</li>
        <li>Ludic and Aesthetic Applications</li>
        <li>Cultural aspects in the design</li>
        <li>Brain-Computer Interaction</li>
        <li>e-Government</li>
    </ul>

    <h3 class="my-4">{{ $t("organizers.program_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/adriana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Adriana L. Iñiguez-Carrillo
                </template>
                <template #institution>
                    Universidad de Guadalajara (UdG)
                </template>
                <template #email>
                    Program Chairs
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/mayraBarrera.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/mayraBarrera.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Mayra Donaji Barrera-Machuca
                </template>
                <template #institution>
                    University of Calgary (UCalgary)
                </template>
                <template #email>
                    Program Chairs
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Marcela D. Rodríguez
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California (UABC)
                </template>
                <template #email>
                    Program Chairs
                </template>
            </OrganizerItem>
        </div>        

    </div>
</template>
