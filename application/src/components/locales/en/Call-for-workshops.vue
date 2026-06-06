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
            { label: 'Format', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-format' }) },
            { label: 'Proposal Guidelines', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-guidelines' }) },
            { label: 'After Acceptance', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-after-acceptance' }) },
            { label: 'Important Dates', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-dates' }) },
            { label: 'Submission', to: Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-submission' }) }
        ]"
        :milestones="[
            { label: 'Extended workshop proposal deadline', date: '2026-06-08' },
            { label: 'Extended workshop acceptance notification', date: '2026-06-12' },
            { label: 'Participant submission deadline', date: '2026-08-05' },
            { label: 'Participant acceptance notification', date: '2026-08-24' },
            { label: 'Camera-ready deadline', date: '2026-09-14' },
            { label: 'MexIHC 2026 Start', date: '2026-10-27', kind: 'conference-start' },
            { label: 'MexIHC 2026 End', date: '2026-10-30', kind: 'conference-end' }
        ]"
        :all-dates-to="Tr.i18nRoute({ name: 'call-for-workshops', hash: '#cws-dates' })"
        all-dates-label="See all important dates"
    />

    <p><strong>Update:</strong> the workshop call was extended. The proposal deadline moved from <del>May 25, 2026</del> to <strong>June 8, 2026</strong>, and the acceptance notification moved from <del>May 29, 2026</del> to <strong>June 12, 2026</strong>.</p>

    <p>
        To promote access to specialized knowledge and foster the exchange of experiences, the MexIHC 2026 Organizing Committee invites researchers, academics, and professionals to submit workshop proposals on interdisciplinary, timely, and practical topics in the field of Human-Computer Interaction (HCI).
    </p>

    <h2 id="cws-format">Format de participación</h2>
    <p>
        We seek proposals that encourage collaboration and active discussion on topics aligned with the conference areas.
    </p>

    <ul>
        <li><strong>Duration:</strong> sessions from 3 to 8 hours.</li>
        <li><strong>Format:</strong> dynamic spaces focused on problem solving, tool-based learning, or the exploration of emerging methodologies.</li>
    </ul>

    <h2 id="cws-guidelines">Proposal Guidelines</h2>
    <p>
        Proposals must contain enough information to assess their relevance and interest to the community. The document may be submitted in Spanish or English, must be 3 to 4 pages long, and should be prepared using the <a href="https://mexihc.org/Template_Talleres_MexIHC_2026.zip">official MexIHC 2026 workshop template</a>.
    </p>
    <p>
        Each proposal must include at least the following information:
    </p>

    <ul>
        <li><strong>Title and objectives:</strong> a clear definition of the workshop purpose, including the topics of interest.</li>
        <li><strong>Relevance:</strong> justification of its importance within the conference themes.</li>
        <li><strong>Target audience:</strong> attendee profile and maximum number of participants.</li>
        <li><strong>Content and agenda:</strong> scope description and a breakdown of the planned activities, including the evaluation criteria that will be considered.</li>
        <li><strong>Logistical requirements:</strong> specific needs such as poster stands, additional projectors, or other equipment.</li>
        <li><strong>Organizer profile:</strong> names, affiliations, contact details, and a short bio demonstrating experience in the topic, such as projects or publications.</li>
    </ul>

    <h2 id="cws-after-acceptance">Responsibilities After Acceptance</h2>
    <p>
        After receiving the acceptance notification, organizers must:
    </p>

    <ul>
        <li>Create a workshop webpage with its own call for papers.</li>
        <li>Actively promote the workshop through their academic networks and mailing lists.</li>
        <li>Adhere to the conference-wide deadlines for the publication of accepted works.</li>
    </ul>

    <h2 id="cws-dates">Important Dates</h2>
    <ul>
        <li><del>May 25, 2026</del> <strong>June 8, 2026</strong> – Workshop proposal deadline <strong>(extended)</strong></li>
        <li><del>May 29, 2026</del> <strong>June 12, 2026</strong> – Workshop acceptance notification <strong>(extended)</strong></li>
        <li><strong>August 5, 2026</strong> – Deadline for participant submissions</li>
        <li><strong>August 24, 2026</strong> – Notification of accepted participant submissions</li>
        <li><strong>September 14, 2026</strong> – Camera-ready deadline</li>
        <li><strong>October 27-30, 2026</strong> – MexIHC 2026 conference dates</li>
    </ul>

    <h2 id="cws-submission">Submission</h2>
    <p>
        Proposals must be submitted by email to <a href="mailto:ws.2026@mexihc.org">ws.2026@mexihc.org</a>. To prepare the document, use the <a href="https://mexihc.org/Template_Talleres_MexIHC_2026.zip">official workshop template</a>.
    </p>

    <h2 class="my-4">Workshops Chairs</h2>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/sandra.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/people/sandra.png&quot;);">
                    </div>
                </template>
                <template #name>
                    Sandra Nava
                </template>
                <template #institution>
                    Universidad Autónoma de San Luis Potosí
                </template>
                <template #email>
                    senavam@uaslp.mx
                </template>
            </OrganizerItem>
        </div>
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/pabloGarcia.jpg" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;/assets/img/people/pabloGarcia.jpg&quot;);">
                    </div>
                </template>
                <template #name>
                    Juan Pablo García Vázquez
                </template>
                <template #institution>
                    Universidad Autónoma de Baja California
                </template>
                <template #email>
                    pablo.garcia@uabc.edu.mx
                </template>
            </OrganizerItem>
        </div>
    </div>
</template>
