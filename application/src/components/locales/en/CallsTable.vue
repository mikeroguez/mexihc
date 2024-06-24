<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" class="uline">
                    Call for papers (CFP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> <del>June 14th</del> July 1st, 2024 (extendida) <strong>(Open)</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-call'})" class="uline">
                    Call for poster track (CPT)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> August 8th, 2024 <strong>(Open)</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-call'})" class="uline">
                    Call for workshops and tutorial (CWT)
                </RouterLink>
                </div>
                <strong class="text-primary text-gradient">Deadline for proposals:</strong> <del>May 17th</del> June 7th, 2024 (extended) <strong>(Open)</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-call'})" class="uline">
                    Student design competition (SDC)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> August 16th, 2024 <strong>(Open)</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-call'})" class="uline">
                    Graduate Colloquium (GC)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> August 8th, 2024 12:00 pm (noon) <strong>(Open)</strong><br>
        </div>
        </li>
    </ol>    
</template>