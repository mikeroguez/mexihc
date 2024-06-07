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
                <strong class="text-primary text-gradient">Deadline for submission:</strong> August 16th, 2024 <strong>
                    ({{ $t("about.open") }})</strong><br>
            </div>
        </li>
    </ol>

    <h3>Goals</h3>
    <ul>
        <li>Provide an opportunity for students of Human-Computer Interaction and related fields
            (e. g. Computer Science, interaction and visual design, Psychology, Social Sciences,
            etc.) to participate in a practical activity and to demonstrate their skills in problem
            solving, interaction design and user experience.
        </li>
        <li>
            Create an exhibition space of solutions to a real-world challenge using myriad
            approaches (design research, brainstorming, prototyping, implementation, evaluation,
            etc.).
        </li>
        <li>
            Foster greater interaction between industry representatives and students.
        </li>
    </ul>

    <h3>The Design Challenge: Supporting Vulnerable Populations</h3>
    <p>
        According to the World Health Organization, about 15% of the world’s population, have some
        form of disability or they are part of a vulnerable population. Vulnerable populations include
        (1) Children and minors; (2) individuals with developmental disorders/disabilities; (3)
        individuals with chronic health conditions (e.g., HIV, Cancer, mental illness); (4) traumatized
        patients; (5) terminally ill patients; (6) older adults; (7) prisoners; (8) economically
        disadvantaged persons; among others. The vulnerability of these individuals is enhanced by
        race, ethnicity, age, sex, and factors such as income, insurance coverage (or lack thereof),
        and absence of a usual source of care services. Their health and healthcare problems and
        needs intersect with social factors, including housing, poverty, and inadequate education.
        Despite efforts and goals in the Mexican Government to reduce or alleviate some of the
        challenges of vulnerable populations (e.g., public centers/schools to provide special education
        services), significant disparities, including risk factors, access to healthcare services,
        morbidity, and mortality, continue in vulnerable populations.
    </p>

    <p>
        In this Student Design Competition, we encourage you to contribute by ‘Supporting
        Vulnerable Populations’: use human-centered design approaches to develop a new way (e.g.,
        a product, interface, system or service) to support, empower, or alleviate the physical,
        psychological or social challenges around a vulnerable population. The scope of this design
        challenge is broad: for example, you could focus on healthcare, education, public services,
        charity, food, poverty, or art, just to name a few. You can either work with a particular
        vulnerable population (e.g., autism) or you could work with multiple vulnerable populations
        that have common characteristics (e.g., chronic healthcare conditions). You may adopt
        different design strategies, including participatory design, co-creation and co-design, service
        design, design for social innovation, inclusive design and open innovation. You may come up
        with a participatory design and co-creation approach using existing technologies or you may

        find opportunity in contemporary developments in technology, such as 3D printing, digital
        fabrication, citizen sensing, the sharing economy, big data, social networks, IoT, gamification,
        new sensors and actuators, and Augmented Reality, to name just a few.
    </p>

    <p>We particularly encourage that the following criteria be considered:</p>

    <ul>
        <li>Does the design solution address a real challenge or challenges of a vulnerable
            population or populations?
        </li>
        <li>
            Does the design solution use technology in an appropriate and novel way?
        </li>
        <li>
            Was relevant prior work properly identified and cited?
        </li>
        <li>
            Were analysis, synthesis, design and evaluation both systematic and sufficient?
        </li>
        <li>
            Were the research process and the involvement of stakeholders ethically appropriate
            (e.g., were institutional guidelines followed)?
        </li>
        <li>
            Were genuine stakeholders involved in the process of research, development and
            evaluation?
        </li>
        <li>
            Did the team explore the entire ecosystem of stakeholders, conditions, and contexts?
        </li>
        <li>
            Was the design solution well-crafted and effectively presented?
        </li>
    </ul>
    <h3 id="sdc-dates">Important Dates</h3>
    <ul>
        <li>Deadline for submission of works: August 16th, 2024.</li>
        <li>Deadline for camera ready: September 13th, 2024.</li>
    </ul>

    <h3>Student Team Requirements</h3>
    <ul>
        <li>Groups of up 4 students with one supervisor (5 participants max).</li>
        <li>Each team must have at least one student and one supervisor.</li>
        <li>Each supervisor can have only one team.</li>
        <li>The supervisor may be a professor or industry professional.</li>
    </ul>

    <p>
        Submissions are invited from all students at all stages of their university careers, from
        undergraduate to postgraduate. While not a mandatory requirement, it is strongly encouraged
        that the teams put forward a multidisciplinary team.
    </p>

    <h3>SUBMISSION DETAILS</h3>
    <p>
        Each group must submit a presentation with a maximum of <strong>15 slides</strong>, a written report of up to
        <strong>4 pages</strong> in the following format <a class="uline"
            href="https://mexihc.org/aihc_template.zip">Proceedings Format</a>
        describing in more detail the points
        raised in the presentation; both in Spanish or English, and in PDF format. Both documents
        should describe:
    </p>

    <ul>
        <li>The Problem addressed.</li>
        <li>The Social impact of the proposed solution in the Mexican context.</li>
        <li>The Process used during the project.</li>
        <li>The Methodology, methods, and techniques used.</li>
        <li>The Description of the target audience.</li>
        <li>The Proposed solution.</li>
    </ul>

    <p>
        Additionally, we encourage the team to provide a supplementary video (max 5 minutes),
        illustrating how your solution fits the lives of the users of a vulnerable population with the help
        of scenarios. Even though the supplementary video is optional, it can help the jury to
        understand your proposed solution better. In any case, the selection process will be based on
        the two mandatory files (presentation and written report).
    </p>

    <p>
        As with other submissions sent to MexIHC 2024, the Students Design Competition entries
        should not have been previously accepted for presentation or publication in any other event.
    </p>

    <p>Please send your proposal to <strong>sdc.2024@mexihc.org</strong></p>

    <h3>Selection Process</h3>
    <p>Submissions will be evaluated based on:</p>
    <ul>
        <li>Quality of work.</li>
        <li>Novelty of approach.</li>
        <li>Significance of the contribution to the field of HCI.</li>
        <li>Clarity of written document.</li>
        <li>Strength of the case for the expected physical, psychological or social impact of the
            proposal.</li>
    </ul>

    <p>
        Confidentiality of submissions is maintained during the review process. All rejected
        submissions will be kept confidential in perpetuity. All submitted materials for accepted
        submissions will be kept confidential until the start of the conference, with the exception of
        title and author information which will be published on the website prior to the conference.
        Submissions should not contain sensitive, private, or proprietary information that cannot be
        disclosed at publication time.
    </p>

    <p>
        A jury made up of researchers and industry representatives will choose the best five projects
        based on the two files submitted. The five projects selected will be invited to be presented
        during MexIHC 2024.
    </p>

    <p>Late submissions will <strong>NOT be considered</strong>.</p>

    <h3>At the conference</h3>
    <p>
        The best five projects proposals will be invited as a short oral presentation during the
        conference.
    </p>
    <p>
        The presentation should be in English or Spanish. At least two representatives of each team
        must be present during the event to make the presentation of their project. A jury of four
        representatives from industry and academia will choose the three winning projects.
    </p>

    <h3>Archives</h3>
    <p>
        The accepted submissions will be published in <a class="uline" href="https://revistaaihc.mx/">the AMexIHC publication journal</a>.
    </p>

    <h3 class="my-4">{{ $t("organizers.student_design_competition_title") }}</h3>
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
                    sdc.2024@mexihc.org
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
                    sdc.2024@mexihc.org
                </template>
            </OrganizerItem>
        </div>

    </div>
</template>