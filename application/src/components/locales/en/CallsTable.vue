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
                <!--
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" class="uline">
                    Call for papers (CFP)
                </RouterLink>
                -->
                Call for papers (CFP)
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> to be announced...<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <!--
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-call'})" class="uline">
                    Call for poster track (CPT)
                </RouterLink>
                -->
                Call for poster track (CPT)
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> to be announced...<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials', hash: '#cwt-call'})" class="uline">
                    Call for workshops and tutorial (CWT)
                </RouterLink>
                </div>
                <strong class="text-primary text-gradient">Deadline for proposals:</strong> May 17th, 2024 <strong>(Open)</strong><br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <!--
                <RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition', hash: '#sdc-call'})" class="uline">
                    Student design competition (SDC)
                </RouterLink>
                -->
                Student design competition (SDC)
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> to be announced...<br>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <!--
                <RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium', hash: '#cgc-call'})" class="uline">
                    Graduate Colloquium (GC)
                </RouterLink>
                -->
                Graduate Consortium (GC)
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> to be announced...<br>
        </div>
        </li>
    </ol>    
</template>