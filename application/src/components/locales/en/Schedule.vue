<script>
import Tr from '@/i18n/translation'
import { ref } from 'vue'

export default {
    setup() {
        const showIndustryDayModal = ref(false)

        const openIndustryDayModal = () => {
            showIndustryDayModal.value = true
        }

        const closeIndustryDayModal = () => {
            showIndustryDayModal.value = false
        }

        return { Tr, showIndustryDayModal, openIndustryDayModal, closeIndustryDayModal }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#wednesday' })" class="uline">
                        Wednesday, November 6
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#thursday' })" class="uline">
                        Thursday, November 7
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#friday' })" class="uline">
                        Friday, November 8
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Wednesday, November 6</h2>

    <div class="table-responsive">
        <table class="table table-striped text-center align-middle w-100" style="table-layout: fixed;">
            <thead>
                <tr>
                    <th scope="col" style="width: 10%;"></th>
                    <th scope="col" style="width: 18%;">Room 1</th>
                    <th scope="col" style="width: 18%;">Room 2</th>
                    <th scope="col" style="width: 18%;">Room 3</th>
                    <th scope="col" style="width: 18%;">Room 4</th>
                    <th scope="col" style="width: 18%;">Room 5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">8:15</th>
                    <td colspan="5">Bus Hotel-Infoteca</td>
                </tr>
                <tr>
                    <th scope="row">9:00 - 9:30</th>
                    <td rowspan="3" class="bg-posters"><strong>
                            <a href="#" @click.prevent="openIndustryDayModal" class="text-decoration-underline fw-bold">
                                Industry Day
                            </a>
                        </strong></td>
                    <td colspan="4">Registration</td>
                </tr>
                <tr>
                    <th scope="row">9:30 - 12:00</th>
                    <td>Workshop:<br><strong>IMSABI</strong></td>
                    <td>Workshop:<br><strong>Responsible AI</strong></td>
                    <td>Tutorial:<br><strong>Building a Mini Robot</strong></td>
                    <td><strong>Postgraduate Colloquium</strong></td>
                </tr>
                <tr>
                    <th scope="row">12:00 - 12:30</th>
                    <td colspan="4">Toast</td>
                </tr>
                <tr>
                    <th scope="row">12:30 - 15:00</th>
                    <td><strong>Design Competition</strong></td>
                    <td>Taller:<br><strong>IMSABI</strong></td>
                    <td>Taller:<br><strong>Responsible AI</strong></td>
                    <td>Tutorial:<br><strong>Building a Mini Robot</strong></td>
                    <td>Tutorial:<br><strong>ChatGPT y R</strong></td>
                </tr>
                <tr>
                    <th scope="row">15:15</th>
                    <td colspan="5">Bus Infoteca-Hotel</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2 id="thursday" class="text-primary text-gradient text-center py-4"> Thursday, November 7</h2>

    <div class="table-responsive">
        <table class="table table-striped text-center align-middle w-100" style="table-layout: fixed;">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" colspan="2">Aula 1</th>
                    <th scope="col">Lobby</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">8:15</th>
                    <td colspan="3">Bus Hotel-Infoteca</td>
                </tr>
                <tr>
                    <th scope="row">9:00 - 9:30</th>
                    <td colspan="3">Registration</td>
                </tr>
                <tr>
                    <th scope="row">9:30 - 10:00</th>
                    <td colspan="3">Opening Ceremony</td>
                </tr>
                <tr>
                    <th scope="row">10:00 - 11:30</th>
                    <td colspan="3" class="text-bold bg-keynotes">Keynote: Saiph Savage</td>
                </tr>
                <tr>
                    <th scope="row">11:30 - 12:00</th>
                    <td colspan="3">Coffee break</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="5">12:00 - 13:00</th>
                    <td rowspan="5">AI in HCI</td>
                    <td class="text-bold">Diseño de interacción (IxD) de un tutor inteligente para el aprendizaje de
                        programación basado en LLM</td>
                    <td rowspan="22" class="text-bold bg-posters">Posters</td>
                </tr>
                <tr>
                    <td class="text-bold">Videos de TikTok en la Percepción del Consumidor acerca de la Calidad de Productos y Servicios <span class="text-danger">(Change)</span></td>
                </tr>
                <tr>
                    <td class="text-bold">AI Assistants in the Workplace: Goal-Oriented Recommendations Using LLM</td>
                </tr>
                <tr>
                    <td class="text-bold">A Study of LLM-Powered Student Query Support</td>
                </tr>
                <tr>
                    <td class="text-bold">Q&A Session</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="5">13:00 - 14:00</th>
                    <td rowspan="5">User-Centered Design and Emerging Technologies</td>
                    <td class="text-bold">Using AI tools for generating proto-personas: An exploration in the design of
                        strategies for promoting ethical awareness on responsible computing</td>
                </tr>
                <tr>
                    <td class="text-bold">Evaluación de la Aceptación de Tinkercad al Diseñar Objetos en 3D utilizando
                        Códigos de Bloques</td>
                </tr>
                <tr>
                    <td class="text-bold">User-Centered Design and Usability Testing of an AHU testing application: A
                        Case
                        Study</td>
                </tr>
                <tr>
                    <td class="text-bold">This century (so far) of HCI in Mexico: a bibliometric analysis</td>
                </tr>
                <tr>
                    <td class="text-bold">Q&A Session</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="3">14:00 - 14:30</th>
                    <td rowspan="3">Mobile Health and Social Interaction Design</td>
                    <td class="text-bold">Social Battery as a Design Metaphor: Crafting Wearable Devices to Enhance
                        Social
                        Interactions</td>
                </tr>
                <tr>
                    <td class="text-bold">A Mobile Application for Mexican Youth Alcohol Consumption Patterns: A
                        Formative
                        Evaluation</td>
                </tr>
                <tr>
                    <td class="text-bold">Q&A Session</td>
                </tr>
                <tr>
                    <th scope="row">14:30 - 15:30</th>
                    <td colspan="2">Lunch</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="3">15:30 - 16:00</th>
                    <td rowspan="3">Mobile Health and Social Interaction Design (cont.)</td>
                    <td class="text-bold">Diseño de una Interfaz de Aplicación Móvil para búsqueda de Empleo con
                        Perspectiva
                        de Género</td>
                </tr>
                <tr>
                    <td class="text-bold">NutriDiabetes Mellitus: Prototipo de una aplicación móvil para el aprendizaje
                        y
                        seguimiento de la alimentación a personas con Diabetes Mellitus</td>
                </tr>
                <tr>
                    <td class="text-bold">Q&A Session</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="5">16:00 - 17:00</th>
                    <td rowspan="5">Pervasive healthcare</td>
                    <td class="text-bold">Cactus: A Mobile Haptic Interface to Define Vibrotactile Patterns Mimicking
                        Surface Textures</td>
                </tr>
                <tr>
                    <td class="text-bold">A formative evaluation of HAR technology for parent-child interactions</td>
                </tr>
                <tr>
                    <td class="text-bold">How to design adaptive systems to improve stress management using artificial
                        intelligence</td>
                </tr>
                <tr>
                    <td class="text-bold">Design of a Virtual Assistant for Emotional Support of Children with Autism
                        Spectrum Disorder</td>
                </tr>
                <tr>
                    <td class="text-bold">Q&A Session</td>
                </tr>
                <tr>
                    <th scope="row">17:15</th>
                    <td colspan="3">Bus Infoteca-Hotel</td>
                </tr>
            </tbody>
        </table>
    </div>


    <h2 id="friday" class="text-primary text-gradient text-center py-4">Friday, November 8</h2>

    <div class="table-responsive">
        <table class="table table-striped text-center align-middle w-100" style="table-layout: fixed;">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" colspan="2">Room 1</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">9:00</th>
                    <td colspan="2">Bus Hotel-Infoteca</td>
                </tr>
                <tr>
                    <th scope="row">10:00 - 11:30</th>
                    <td colspan="2" class="text-bold bg-keynotes">Keynote: Jesús Favela.<br> La importancia de la Interacción Humano-Computadora en la Inteligencia Artificial Centrada en el Humano</td>
                </tr>
                <tr>
                    <th scope="row">11:30 - 12:00</th>
                    <td colspan="2">Coffee break</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="5">12:00 - 13:00</th>
                    <td rowspan="5">User-Centered Prototyping for Learning Technologies</td>
                    <td class="text-bold">From Transcription to Empathy: Employing Artificial Intelligence Tools in
                        User-Centered Design for an Online Assessment Platform</td>
                </tr>
                <tr>
                    <td class="text-bold">Design of a Serious Game to Teach Water Scarcity Concepts in Rural
                        Communities.
                    </td>
                </tr>
                <tr>
                    <td class="text-bold">Métodos para la detección de movimiento en mecanismos de papel para interfaces
                        tangibles de realidad aumentada</td>
                </tr>
                <tr>
                    <td class="text-bold">PlexLSM: Una Plataforma Extensible basada en Escenarios para Capacitación de
                        Personas Oyentes en Lengua de Señas Mexicana</td>
                </tr>
                <tr>
                    <td class="text-bold">Q&A Session</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="5">13:00 - 14:00</th>
                    <td rowspan="5">Interactive Systems Evaluation</td>
                    <td class="text-bold">GigSense: An LLM-Infused Tool for Workers’ Collective Intelligence</td>
                </tr>
                <tr>
                    <td class="text-bold">Mapping the Crowdsourcing Workforce in Latin America and the Caribbean</td>
                </tr>
                <tr>
                    <td class="text-bold">AI Companions in Ride-Hailing: Enhancing Sense of Safety with Voice Chatbots <span class="text-danger">(change)</span></td>
                </tr>
                <tr>
                    <td class="text-bold">Percepción de usabilidad y aceptación de un dispositivo de asistencia del
                        vestir
                        para infantes con discapacidad cognitiva: resultados preliminares</td>
                </tr>
                <tr>
                    <td class="text-bold">Q&A Session</td>
                </tr>
                <tr>
                    <th scope="row">14:00 - 14:30</th>
                    <td colspan="2">Closing Ceremony</td>
                </tr>
                <tr>
                    <th scope="row">14:45</th>
                    <td colspan="2">Bus Infoteca-Hotel</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal for "Industry Day" -->
    <div v-if="showIndustryDayModal" class="modal fade show d-block" tabindex="-1"
        style="background-color: rgba(0, 0, 0, 0.5);">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Industry Day Events</h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeIndustryDayModal"></button>
                </div>
                <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
                    <!-- Table of events for Industry Day -->
                    <div class="table-responsive">
                        <table class="table table-striped text-center align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">Time</th>
                                    <th scope="col">Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">9:00 - 9:15</th>
                                    <td><strong>Registration and Access</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">9:15 - 9:30</th>
                                    <td>
                                        <strong>Industry Day Opening</strong><br>
                                        <p class="small mb-0">
                                            Jessica Beltrán / General Co-Chair MexIHC 2024<br>
                                            Dagoberto Cruz / General Co-Chair MexIHC 2024<br>
                                            Arian Martínez / Industry Day Chair MexIHC 2024<br>
                                            Víctor García / Industry Day Chair MexIHC 2024
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">9:30 - 10:00</th>
                                    <td>
                                        <strong>The Importance of Academia in the Industry</strong><br>
                                        <p class="small mb-0">
                                            Conference<br>
                                            Arian Martínez<br>
                                            Principal Design Manager · Microsoft
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">10:00 - 10:30</th>
                                    <td>
                                        <strong>Beyond Data, the Power of UX Design in Interaction</strong><br>
                                        <p class="small mb-0">
                                            Conference<br>
                                            Pedro Abundio<br>
                                            Product Designer · Microsoft
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">10:30 - 10:45</th>
                                    <td><strong>Break</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">10:45 - 11:15</th>
                                    <td>
                                        <strong>Designing with New Materials</strong><br>
                                        <p class="small mb-0">
                                            Conference<br>
                                            Priscila Mendoza<br>
                                            Principal Studio Manager · Microsoft
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">11:15 - 11:45</th>
                                    <td>
                                        <strong>BBVA Mexico: 10 Years of Digital Transformation - Challenges and
                                            Opportunities for Young Talent</strong><br>
                                        <p class="small mb-0">
                                            Conference<br>
                                            Víctor García<br>
                                            Design & UX Discipline Manager · BBVA Mexico
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">11:45 - 12:15</th>
                                    <td>
                                        <strong>HCI in the Professional Field</strong><br>
                                        <p class="small mb-0">
                                            Panel Discussion<br>
                                            Pedro Abundio, Priscila Mendoza, Arian Martínez, Víctor García
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">12:15 - 12:30</th>
                                    <td><strong>Event Closing</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeIndustryDayModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>