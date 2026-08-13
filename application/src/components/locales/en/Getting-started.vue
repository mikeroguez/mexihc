<script>
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'

export default {
	components: {
		InPageNavigationPanel
	},
	setup() {
		return { Tr }
	}
}
</script>

<template>
	<InPageNavigationPanel
		:links="[
			{ label: 'Registration and payment', to: Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' }) },
			{ label: 'Pending information', to: Tr.i18nRoute({ name: 'getting-started', hash: '#pending-information' }) }
		]"
	/>

	<p>
		MexIHC 2026 will take place in Ensenada, Baja California, from October 27 to 30, 2026.
		This page gathers the first steps to prepare your participation; for now, the confirmed information focuses on
		registration rates and the steps that will open to complete payment.
	</p>

	<section id="rates-and-registration" class="mt-5">
		<h2 class="h3">Registration and Payment</h2>
		<p>
			Before starting your registration, review the
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="uline">
				{{ $t("nav.rates_and_registration") }}
			</RouterLink>
			page to identify the rate that applies to your participation as an author, attendee or tutorial participant.
		</p>

		<ol class="list-group list-group-numbered mb-4">
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<div class="ms-2 me-auto">
					<div class="fw-bold">Review the rates</div>
					Check costs, included benefits and important notes before preparing your payment.
				</div>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<div class="ms-2 me-auto">
					<div class="fw-bold">Wait for the form to open</div>
					The official registration form and final payment instructions will be published soon.
				</div>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<div class="ms-2 me-auto">
					<div class="fw-bold">Complete registration when available</div>
					Once the form opens, you will be able to enter your details, choose the corresponding registration type
					and follow the payment instructions provided.
				</div>
			</li>
		</ol>

		<div class="d-flex flex-wrap gap-2">
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="btn bg-gradient-primary btn-round">
				View rates
			</RouterLink>
			<button class="btn btn-secondary disabled btn-round" type="button" disabled aria-disabled="true">
				Form pending
			</button>
		</div>
	</section>

	<section id="pending-information" class="mt-5">
		<h2 class="h4">Pending Information</h2>
		<p>
			Logistics information will be added here once confirmed. To avoid confusion, information from previous editions
			will not be shown.
		</p>
		<ul>
			<li>Venue and room distribution in Ensenada.</li>
			<li>Recommended accommodation and preferential rates, if available.</li>
			<li>Local transportation and arrival recommendations.</li>
			<li>Visitor recommendations for the conference dates.</li>
		</ul>
	</section>
</template>
