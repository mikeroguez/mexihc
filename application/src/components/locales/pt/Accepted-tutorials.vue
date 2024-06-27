<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered mb-4">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'accepted-tutorials', hash: '#first' })" class="uline">
                        Utilizing ChatGPT to Support R Programming in HCI Research
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'accepted-tutorials', hash: '#second' })" class="uline">
                        Taller de creación de un mini robot con Tinkercad
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>

    <p>
        We are pleased to present a series of workshops designed to delve into various aspects of Human-Computer
        Interaction (HCI). These workshops are intended to provide participants with practical experiences and knowledge
        applicable to their research and professional practices. Below are details of two of the workshops that will be
        offered during the event:
    </p>

    <h3 id="first">Taller de creación de un mini robot con Tinkercad</h3>
    <p>
        This workshop aims to provide a comprehensive experience in the design, prototyping, and programming of a mini
        robot using Tinkercad and Arduino. Participants will learn to use the basic tools of Tinkercad, design and model
        3D parts, assemble the robot, and program it to perform basic movements. The assembled mini robot will serve as
        a functional prototype for HCI research, especially in areas such as social robotics, tangible interfaces, and
        education.
    </p>

    <h3 id="second">Utilizando ChatGPT para apoyar la programación en R en la investigación en IHC</h3>
    <p>
        This workshop focuses on using ChatGPT to support and enhance R programming for research applications.
        Participants will learn to integrate ChatGPT into their R workflows to simplify coding processes, resolve
        errors, and optimize data analysis tasks. Through practical exercises and real-world examples, attendees will
        gain experience in using ChatGPT to simulate data, create visualizations, debug code, and interpret results.
    </p>
</template>