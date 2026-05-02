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
            { label: 'Goals', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-goals' }) },
            { label: 'Important dates', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-dates' }) },
            { label: 'Submission details', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-submission' }) },
            { label: 'Selection process', to: Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-selection' }) }
        ]"
        :milestones="[
            { label: 'Submission deadline', date: '2026-08-16' },
            { label: 'Camera-ready deadline', date: '2026-09-13' },
            { label: 'MexIHC 2026 starts', date: '2026-10-27', kind: 'conference-start' },
            { label: 'MexIHC 2026 ends', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-dates' })"
        all-dates-label="See all important dates"
    />

    <h2 id="sdc-goals">Goals</h2>
    <ul>
        <li>Provide students from different human-computer interaction related fields with an opportunity to participate in a practical activity and demonstrate their skills in problem solving, interaction design, and user experience.</li>
        <li>Create a space for addressing real problems through different approaches, including design research, brainstorming, prototyping, implementation, and evaluation.</li>
        <li>Foster greater interaction between industry representatives and students.</li>
    </ul>

    <h2>The Design Challenge: Human-Centered Artificial Intelligence for the Common Good</h2>
    <p>
        Over the last decade, artificial intelligence has moved from a speculative frontier to one of the central drivers of global development. However, its implementations do not happen in a technical vacuum; they are embedded in social contexts marked by historical inequalities, broad informal economies, and persistent digital divides. For AI to become a common good rather than a new vector of exclusion, it is necessary to move from passive adoption to situated implementation that responds to local urgencies.
    </p>
    <p>
        The transformative potential of AI in the region, from optimizing essential public services to democratizing access to knowledge, depends on ethical governance and a framework of technological sovereignty. The point is not simply to automate processes, but to use computational capacity to dismantle bureaucratic barriers, improve preventive medicine in rural areas, and strengthen institutional transparency. The challenge for universities, governments, and civil society is to ensure that innovation does not only increase productivity, but also acts as a catalyst for social justice and collective well-being.
    </p>
    <p>
        In this edition of the Student Design Competition, we invite you to submit a project in which artificial intelligence is used to promote the common good of a population sector that has been historically or recently vulnerable, while incorporating user-centered design as a fundamental part of the proposal. This challenge has been intentionally framed in an open way to encourage broad student participation and accommodate different interests. The project must be non-profit for its creators, but it may address any topic that promotes the use of AI within the field of human-computer interaction.
    </p>

    <h2 id="sdc-dates">Important Dates</h2>
    <ul>
        <li>Submission deadline: August 16, 2026.</li>
        <li>Camera-ready deadline: September 13, 2026.</li>
    </ul>

    <h2>Team Requirements</h2>
    <ul>
        <li>A group of up to 4 students and 1 supervisor, for a maximum of 5 participants.</li>
        <li>Each team must include at least one student and one supervisor.</li>
        <li>The supervisor may come from academia or industry.</li>
    </ul>

    <p>
        Proposals are welcome from students at any stage of their university education, from undergraduate to graduate level. Multidisciplinary teams are recommended, but not required.
    </p>

    <h2 id="sdc-submission">Submission Details</h2>
    <p>
        Each team must submit a presentation of up to <strong>15 slides</strong> and a written report of up to <strong>4 pages</strong>, following the <a class="uline"
            href="https://mexihc.org/aihc_template.zip">Proceedings Format</a>, providing more detail on the points raised in the presentation. Both documents must be submitted in Spanish or English, in PDF format, and must describe:
    </p>

    <ul>
        <li>The problem being addressed.</li>
        <li>The social impact of the proposal in a global context.</li>
        <li>The process used during the project.</li>
        <li>The methodology, methods, and techniques used.</li>
        <li>The description of the target audience.</li>
        <li>The proposed solution.</li>
    </ul>

    <p>
        We also encourage teams to provide an optional supplementary video of up to 5 minutes illustrating how the solution fits into the lives of users from the vulnerable population through scenarios. Although the video is optional, it can help the jury better understand the proposed solution. In all cases, the selection process will be based on the two mandatory files: the presentation and the written report.
    </p>

    <p>
        As with other submissions to MexIHC 2026, Student Design Competition proposals must be original and must not have been previously accepted for presentation or publication at any other event.
    </p>

    <p>Please send proposals to <strong>sdc.2026@mexihc.org</strong></p>

    <h2 id="sdc-selection">Selection Process</h2>
    <p>Submissions will be evaluated according to the following criteria:</p>
    <ul>
        <li>Quality of the work.</li>
        <li>Novelty of the proposal.</li>
        <li>Importance of the contribution to the field of human-computer interaction.</li>
        <li>Clarity of the written document.</li>
        <li>Strength of the argument regarding the expected physical, psychological, or social impact of the proposal.</li>
    </ul>

    <p>
        The confidentiality of submissions will be maintained during the review process. All rejected submissions will remain confidential indefinitely. Materials from accepted submissions will remain confidential until the beginning of the conference, except for the title and author information, which may be published on the website beforehand. Submissions must not include confidential, private, or proprietary information that cannot be disclosed at publication time.
    </p>

    <p>
        A jury composed of researchers and industry representatives will select the top five projects based on the two submitted files. These five finalist projects will be invited to MexIHC 2026.
    </p>

    <p><strong>Submissions sent after the stated deadlines will not be considered.</strong></p>

    <h2>Publication</h2>
    <p>
        Accepted works will be published on the official conference website and will receive a participation diploma. The top three places will receive their corresponding recognition during the conference.
    </p>

    <h2>At the conference</h2>
    <p>
        The top five projects will be invited to give a short oral presentation during the conference.
    </p>
    <p>
        The presentation may be delivered in English or Spanish, and at least two team representatives must present the project during the event. A four-member jury representing industry and academia will choose the three winning projects.
    </p>

    <h2 class="my-4">{{ $t("organizers.student_design_competition_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/carlos.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/carlos.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Carlos Toxtli
                </template>
                <template #institution>
                    Clemson University, USA
                </template>
                <template #email>
                    sdc.2026@mexihc.org
                </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/niels.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/niels.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Niels Martínez
                </template>
                <template #institution>
                    Universidad Autónoma de Coahuila, MX
                </template>
                <template #email>
                    sdc.2026@mexihc.org
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>
