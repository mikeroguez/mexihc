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
            { label: 'Guidelines for proposals', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-guidelines' }) },
            { label: 'Important Dates', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' }) },
            { label: 'After acceptance', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-after' }) },
            { label: 'Accepted Workshops and Tutorials', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-accepted' }) }
        ]"
        :milestones="[
            { label: 'Deadline for workshop & tutorial proposals', date: '2024-06-07' },
            { label: 'Notification of acceptance', date: '2024-06-14' },
            { label: 'Workshop/tutorial submissions deadline', date: '2024-08-09' },
            { label: 'Workshop/tutorial notification', date: '2024-08-23' },
            { label: 'Camera-ready final submissions', date: '2024-09-13' },
            { label: 'MexIHC 2024 starts', date: '2024-11-06', kind: 'conference-start' },
            { label: 'MexIHC 2024 ends', date: '2024-11-08', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' })"
        all-dates-label="See all important dates"
    />

    <p>
        In order to promote the access to the knowledge of experts and encourage the exchange of experiences, the
        Organizing Committee of the MexIHC conference conveys the following call for participation on interdisciplinary,
        relevant, current and practical topics on different areas of research in the area of Human-Computer Interaction.
        The modalities of participation are:
    </p>

    <h2>Workshop</h2>
    <p>
        Every subject related to Human-Computer Interaction, such as those listed in the conference, with a duration of
        3 up to 8 hours.
    </p>

    <h2>Tutorial</h2>
    <p>
        A conference, an interactive mini-workshop, a training session or any other modality which explore new forms of
        interaction with duration from 1 up to 3 hours.
    </p>

    <h2 id="cwt-guidelines">GUIDELINES FOR PROPOSALS</h2>
    <p>
        Proposals for workshops and tutorials should contain the necessary information to enable the workshops chairs to
        judge its importance, quality and interest of the community in the proposed topics. These should not exceed two
        pages. When to propose a workshop, please provide (at least) the following information:
    </p>

    <ul>
        <li>Title and goals of the workshop or tutorial.</li>
        <li>Time required to deliver the workshop or tutorial.</li>
        <li>The relevance of the workshop or tutorial in connection with the themes of the conference.</li>
        <li>A brief description of the content (eg. objectives, scope).</li>
        <li>The specific topics to be addressed at the workshop (brief agenda).</li>
        <li>The target audience.</li>
        <li>Expected number of participants (maximum of participants).</li>
        <li>Names, affiliations, e-mail and short biographies of the organizers of the workshop, who must have
            experience in the topics of the workshop.</li>
        <li>Special requirements with respect to logistics (eg. stands for posters, more than one video projector,
            etc.).</li>
        <li>A bio of the organizers with relevant information regarding their expertise to the theme of the
            workshop/tutorial (publications, projects, etc.).</li>
        <li>The proposal can be written in Spanish or English, and have an extension of 3-4 pages.</li>
        <li>Accepted works will be published within Journal Avances en Interacción Humano-Computadora (AIHC) de la
            <a class="uline" href="http://aihc.amexihc.org/index.php/aihc">AmexIHC</a> in the section Work in progress.
            The template is the
            following: https://mexihc.org/aihc_template.zip
        </li>
    </ul>

    <p>Proposals should be submitted to: ws.2024@mexihc.org</p>

    <h2 id="cwt-after">AFTER ACCEPTANCE</h2>
    <p>
        Organizers of workshops should develop the Web Page with the call for papers. They should promote the call for
        papers among their contacts, and additional and convenient mailing-lists
    </p>

    <h2 id="cwt-dates">Important Dates</h2>
    <ul>
        <li><strong><del>>May 17th</del> June 7th, 2024 (extended)</strong> – Deadline for workshop & tutorial proposals
        </li>
        <li><strong><del>May 24th</del> June 14th, 2024 (extended)</strong> – Notification acceptance</li>
        <li><strong>November 6th-8th, 2024</strong> - MexIHC Conference</li>
    </ul>
    <p>Workshops organizers should consider that the submission for workshop papers would be</p>
    <ul>
        <li><strong>Aug 9th, 2024</strong> – Deadline for workshop & tutorial submissions</li>
        <li><strong>Ago 23th, 2024</strong> – Notification acceptance</li>
        <li><strong>Sep 13th, 2024</strong> – Camera Ready</li>
    </ul>

    <h2 id="cwt-accepted">Accepted Workshops and Tutorials</h2>
    <ul>
        <li>
            <RouterLink :to="Tr.i18nRoute({ name: 'calls-for-accepted-workshops' })" class="uline">
                {{ $t("nav.workshop_calls") }}
            </RouterLink>
        </li>
        <li>
            <RouterLink :to="Tr.i18nRoute({ name: 'accepted-tutorials' })" class="uline">
                {{ $t("nav.tutorial") }}
            </RouterLink>
        </li>        
    </ul>

    <h2 class="my-4">{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/rene.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/rene.png&quot;);">
                    </div>
                </template>
                <template #name>
                    René F. Navarro
                </template>
                <template #institution>
                    Universidad de Sonora
                </template>
                <template #email>
                    ws.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>
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
                    Adriana Iñiguez
                </template>
                <template #institution>
                    Universidad de Guadalajara
                </template>
                <template #email>
                    ws.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>
