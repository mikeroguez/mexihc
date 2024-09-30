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
        Nos complace presentar una serie de talleres diseñados para profundizar en diversos aspectos de la Interacción
        Humano-Computadora (IHC). Estos talleres están concebidos para proporcionar a los participantes experiencias
        prácticas y conocimientos aplicables a sus investigaciones y prácticas profesionales. A continuación, se
        detallan dos de los talleres que se ofrecerán durante el evento:
    </p>

    <h3 id="first">Taller de creación de un mini robot con Tinkercad</h3>
    <p>
        Este taller tiene como objetivo proporcionar una experiencia integral en el diseño, prototipado y programación
        de un mini robot utilizando Tinkercad y Arduino. Los participantes aprenderán a manejar las herramientas básicas
        de Tinkercad, diseñar y modelar piezas en 3D, ensamblar el robot y programarlo para realizar movimientos
        básicos. El mini robot ensamblado servirá como un prototipo funcional para investigaciones en IHC, especialmente
        en áreas como robótica social, interfaces tangibles y educación.
    </p>
    <p><a href="https://turing.iimas.unam.mx/~ricardo/mexihc2024/">Sitio web del taller</a></p>

    <h3 id="second">Utilizando ChatGPT para apoyar la programación en R en la investigación en IHC</h3>
    <p>
        Este taller se centra en el uso de ChatGPT para apoyar y mejorar la programación en R en aplicaciones de
        investigación. Los participantes aprenderán a integrar ChatGPT en sus flujos de trabajo de R para simplificar
        procesos de codificación, resolver errores y optimizar tareas de análisis de datos. A través de ejercicios
        prácticos y ejemplos del mundo real, los asistentes adquirirán experiencia en el uso de ChatGPT para simular
        datos, crear visualizaciones, depurar código e interpretar resultados.
    </p>
    <p><a href="https://sites.google.com/view/mexihc-programando-en-r-usando">Sitio web del taller</a></p>
</template>