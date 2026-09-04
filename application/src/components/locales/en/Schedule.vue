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
                date: 'Tuesday, October 27',
                items: [
                    { time: 'To be confirmed', activity: 'Participant registration' },
                    { time: 'To be confirmed', activity: 'Accepted workshops and tutorials' },
                    { time: 'To be confirmed', activity: 'Graduate Colloquium and author activities' }
                ]
            },
            {
                id: 'wednesday',
                date: 'Wednesday, October 28',
                items: [
                    { time: 'To be confirmed', activity: 'Registration and opening ceremony' },
                    { time: 'To be confirmed', activity: 'Keynote talk' },
                    { time: 'To be confirmed', activity: 'Technical sessions, workshops, tutorials and posters' }
                ]
            },
            {
                id: 'thursday',
                date: 'Thursday, October 29',
                items: [
                    { time: 'To be confirmed', activity: 'Keynote talk' },
                    { time: 'To be confirmed', activity: 'Technical sessions and paper presentations' },
                    { time: 'To be confirmed', activity: 'Student Design Competition and community activities' }
                ]
            },
            {
                id: 'friday',
                date: 'Friday, October 30',
                items: [
                    { time: 'To be confirmed', activity: 'Final technical sessions' },
                    { time: 'To be confirmed', activity: 'Closing activities' },
                    { time: 'To be confirmed', activity: 'MexIHC 2026 closing ceremony' }
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
        The preliminary MexIHC 2026 program includes activities from October 27 to 30, 2026 in Ensenada,
        Baja California. Times, rooms and session details will be published as the program is confirmed.
    </p>

    <div class="alert alert-secondary" role="status">
        Preliminary program subject to change.
    </div>

    <section v-for="day in days" :id="day.id" :key="day.id" class="mt-5">
        <h2 class="text-primary text-gradient text-center py-4">{{ day.date }}</h2>

        <div class="table-responsive">
            <table class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col" style="width: 22%;">Time</th>
                        <th scope="col">Activity</th>
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
