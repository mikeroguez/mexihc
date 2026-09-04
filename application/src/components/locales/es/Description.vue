<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <h3 class="text-white mb-0">La conferencia más grande de Interacción Humano-Computadora en México</h3>

    <p class="text-white mt-3 mb-3">
        MexIHC es el principal foro de México para que investigadores y profesionales presenten avances en Interacción
        Humano-Computadora en un formato bienal. Organizado por la Asociación Mexicana de Interacción
        Humano-Computadora. (<a class="uline-dark" href="https://www.amexihc.org/">AMexIHC</a>).
    </p>

    <div class="d-flex flex-wrap justify-content-center gap-2">
        <RouterLink :to="Tr.i18nRoute({ name: 'schedule' })" class="btn bg-gradient-yellow btn-round btn-lg">
            Agenda preliminar
        </RouterLink>
        <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="btn btn-outline-light btn-round btn-lg">
            Prepárate para asistir
        </RouterLink>
    </div>
</template>
