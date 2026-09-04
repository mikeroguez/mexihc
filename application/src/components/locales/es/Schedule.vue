<script>
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'

export default {
    components: {
        InPageNavigationPanel
    },
    setup() {
        const days = [
            {
                id: 'tuesday',
                date: 'Martes 27 de octubre',
                items: [
                    { time: 'Por confirmar', activity: 'Registro de participantes' },
                    { time: 'Por confirmar', activity: 'Talleres aceptados y tutoriales' },
                    { time: 'Por confirmar', activity: 'Coloquio de Graduados y actividades para autores' }
                ]
            },
            {
                id: 'wednesday',
                date: 'Miércoles 28 de octubre',
                items: [
                    { time: 'Por confirmar', activity: 'Registro e inauguración' },
                    { time: 'Por confirmar', activity: 'Conferencia magistral' },
                    { time: 'Por confirmar', activity: 'Sesiones técnicas, talleres, tutoriales y pósters' }
                ]
            },
            {
                id: 'thursday',
                date: 'Jueves 29 de octubre',
                items: [
                    { time: 'Por confirmar', activity: 'Conferencia magistral' },
                    { time: 'Por confirmar', activity: 'Sesiones técnicas y presentaciones de trabajos' },
                    { time: 'Por confirmar', activity: 'Concurso de Diseño Estudiantil y actividades de comunidad' }
                ]
            },
            {
                id: 'friday',
                date: 'Viernes 30 de octubre',
                items: [
                    { time: 'Por confirmar', activity: 'Sesiones técnicas finales' },
                    { time: 'Por confirmar', activity: 'Actividades de cierre' },
                    { time: 'Por confirmar', activity: 'Clausura de MexIHC 2026' }
                ]
            }
        ]

        return { Tr, days }
    }
}
</script>

<template>
    <InPageNavigationPanel
        :links="days.map((day) => ({
            label: day.date,
            to: Tr.i18nRoute({ name: 'schedule', hash: `#${day.id}` })
        }))"
    />

    <p>
        El programa preliminar de MexIHC 2026 contempla actividades del 27 al 30 de octubre de 2026 en Ensenada,
        Baja California. Los horarios, salas y detalles de cada sesión se publicarán conforme avance la confirmación
        del programa.
    </p>

    <div class="alert alert-secondary" role="status">
        Programa preliminar sujeto a cambios.
    </div>

    <section v-for="day in days" :id="day.id" :key="day.id" class="mt-5">
        <h2 class="text-primary text-gradient text-center py-4">{{ day.date }}</h2>

        <div class="table-responsive">
            <table class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col" style="width: 22%;">Horario</th>
                        <th scope="col">Actividad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in day.items" :key="`${day.id}-${item.activity}`">
                        <th scope="row">{{ item.time }}</th>
                        <td>{{ item.activity }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
