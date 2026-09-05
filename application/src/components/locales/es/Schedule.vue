<script setup>
import ScheduleProgram from '@/components/schedule/ScheduleProgram.vue'
import { scheduleProgram } from '@/data/scheduleProgram'
</script>

<template>
    <ScheduleProgram :content="scheduleProgram.es" />
</template>
