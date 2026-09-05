<script setup>
import ScheduleActivityList from './ScheduleActivityList.vue'

const props = defineProps({
    days: {
        type: Array,
        required: true,
    },
    timeBlocks: {
        type: Array,
        required: true,
    },
    timeHeader: {
        type: String,
        required: true,
    },
    emptyLabel: {
        type: String,
        required: true,
    },
    isDesktop: {
        type: Boolean,
        default: true,
    },
})

const getBlock = (day, time) => {
    return day.blocks.find((block) => block.time === time) || { time, items: [] }
}
</script>

<template>
    <div class="table-responsive schedule-table-wrap">
        <table class="table schedule-table align-middle">
            <thead>
                <tr>
                    <th scope="col">{{ props.timeHeader }}</th>
                    <th v-for="day in props.days" :id="isDesktop ? day.id : null" :key="day.id" scope="col">
                        {{ day.label }}
                        <span>{{ day.venue }}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="time in props.timeBlocks" :key="time">
                    <th scope="row">{{ time }}</th>
                    <td v-for="day in props.days" :key="`${day.id}-${time}`">
                        <ScheduleActivityList :items="getBlock(day, time).items" :empty-label="props.emptyLabel" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
