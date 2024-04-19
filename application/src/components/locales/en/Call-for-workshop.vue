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
                <strong class="text-primary text-gradient">Deadline for workshop & tutorial proposals:</strong> May 17th, 2024
                <span class="text-bold">({{ $t("about.open") }})</span><br>

                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' })"
                    class="uline">
                    See all important dates
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        In order to promote the access to the knowledge of experts and encourage the exchange of experiences, the
        Organizing Committee of the MexIHC conference conveys the following call for participation on interdisciplinary,
        relevant, current and practical topics on different areas of research in the area of Human-Computer Interaction.
        The modalities of participation are:
    </p>

    <h3>Workshop</h3>
    <p>
        Every subject related to Human-Computer Interaction, such as those listed in the conference, with a duration of
        3 up to 8 hours.
    </p>

    <h3>Tutorial</h3>
    <p>
        A conference, an interactive mini-workshop, a training session or any other modality which explore new forms of
        interaction with duration from 1 up to 3 hours.
    </p>

    <h3>GUIDELINES FOR PROPOSALS</h3>
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

    <h3>AFTER ACCEPTANCE</h3>
    <p>
        Organizers of workshops should develop the Web Page with the call for papers. They should promote the call for
        papers among their contacts, and additional and convenient mailing-lists
    </p>

    <h3 id="cwt-dates">Important Dates</h3>
    <ul>
        <li><strong>May 17th, 2024</strong> – Deadline for workshop & tutorial proposals</li>
        <li><strong>May 24th, 2024</strong> – Notification acceptance</li>
        <li><strong>November 6th-8th, 2024</strong> - MexIHC Conference</li>
    </ul>
    <p>Workshops organizers should consider that the submission for workshop papers would be</p>
    <ul>
        <li><strong>Aug 9th, 2024</strong> – Deadline for workshop & tutorial submissions</li>
        <li><strong>Ago 23th, 2024</strong> – Notification acceptance</li>
        <li><strong>Sep 13th, 2024</strong> – Camera Ready</li>
    </ul>    

    <h3 class="my-4">{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h3>
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