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
            { label: 'Objective', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-objective' }) },
            { label: 'Themes', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-themes' }) },
            { label: 'Guidelines', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-guidelines' }) },
            { label: 'Important Dates', to: Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' }) }
        ]"
        :milestones="[
            { label: 'Proposal submission deadline', date: '2026-06-01' },
            { label: 'Acceptance notification', date: '2026-08-07' },
            { label: 'MexIHC 2026 Start', date: '2026-10-27', kind: 'conference-start' },
            { label: 'MexIHC 2026 End', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-dates' })"
        all-dates-label="See all important dates"
    />

    <p>
        The MexIHC 2026 organizing committee invites the academic, scientific, and professional community to submit tutorial proposals on topics related to Human-Computer Interaction (HCI) and related areas.
    </p>

    <h2 id="cwt-objective">Objective</h2>
    <p>
        The tutorials aim to offer intensive training spaces that allow participants to acquire theoretical, methodological, or practical knowledge in current, emerging, or frontier topics in HCI.
    </p>

    <h2>Format and Duration</h2>
    <p>
        Tutorials can be delivered in the form of: interactive mini-workshops, training sessions, or any innovative modality oriented towards active learning. Each tutorial should have a duration of 2 to 4 hours.
    </p>

    <h2>Dates and Venue</h2>
    <p>
        The tutorials will be held within the framework of MexIHC 2026 at the facilities of CICESE and UABC on October 27 and 28.
    </p>
    <p>
        <strong>NOTE:</strong> One day is dedicated to tutorials; however, depending on the demand and quality of the proposals received, the organizing committee may enable up to two days for their delivery.
    </p>

    <h2 id="cwt-themes">Themes</h2>
    <p>
        Tutorial proposals are accepted in any area related to Human-Computer Interaction (HCI), including but not limited to:
    </p>
    
    <h3>General lines:</h3>
    <ul>
        <li>Interface design and evaluation</li>
        <li>User experience (UX)</li>
        <li>Accessibility and digital inclusion</li>
        <li>Information visualization</li>
        <li>Multimodal interaction</li>
        <li>Human-centered artificial intelligence</li>
        <li>Emerging technologies applied to interaction</li>
    </ul>

    <h3>Emerging topics of special interest:</h3>
    <ul>
        <li>Design for Agentic AI and human–agent ecosystems</li>
        <li>Generative (GenUI) and adaptive interfaces</li>
        <li>Human-robot interaction (HRI) in public and industrial environments</li>
        <li>Ubiquitous, multimodal computing and "Zero-UI" paradigms</li>
        <li>Sustainable and circular HCI</li>
    </ul>
    <p>
        For a broader list of suggested topics, it is recommended to consult the conference call for papers.
    </p>

    <h2 id="cwt-guidelines">Guidelines for Proposals</h2>
    <p>
        Tutorial proposals must contain the necessary information to allow the coordinators to evaluate their importance, quality, and community interest in the proposed topics. They must not exceed two pages. When proposing a tutorial, please provide (at minimum) the following information:
    </p>

    <ul>
        <li>Title and objectives of the tutorial.</li>
        <li>Estimated duration of the tutorial.</li>
        <li>Relevance of the tutorial in relation to the conference themes.</li>
        <li>Brief description of the content (e.g., objectives, scope).</li>
        <li>Target audience.</li>
        <li>Estimated number of participants (maximum).</li>
        <li>Names, affiliations, email, and a brief biography of the tutorial organizers, who must have experience in the topics covered.</li>
        <li>Special requirements regarding logistics (e.g., poster stands, more than one video projector, etc.).</li>
        <li>Biography of the organizers with relevant information about their experience in the tutorial topic (publications, projects, etc.).</li>
    </ul>
    <p>
        Proposals may be written in Spanish or English. Proposals should be sent via email to the coordinators.
    </p>

    <h2>After Acceptance</h2>
    <p>
        Organizers of accepted tutorials should promote them (as well as the conference in general) among their contacts and use additional and accessible mailing lists. Tutorial coordinators will indicate the date and time of each tutorial delivery, as well as the deadline for sharing the material to be used.
    </p>

    <h2 id="cwt-dates">Important Dates</h2>
    <ul>
        <li><strong>June 1, 2026</strong> – Deadline for tutorial proposals</li>
        <li><strong>August 7, 2026</strong> – Acceptance notification</li>
        <li><strong>October 27 and 28, 2026</strong> – Tutorial delivery</li>
    </ul>

    <h2 class="my-4">{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                    </div>
                </template>
                <template #name>
                    José Ángel González Fraga
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California
                </template>
                <template #email>
                    angel_fraga@uabc.edu.mx
                </template>
            </OrganizerItem>
        </div>
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/tonyGarcia.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/people/tonyGarcia.png&quot;);">
                    </div>
                </template>
                <template #name>
                    J. Antonio García Macías
                </template>
                <template #institution>
                    CICESE
                </template>
                <template #email>
                    jagm@cicese.edu.mx
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>
