<script>
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'

export default {
	components: {
		InPageNavigationPanel
	},
	setup() {
		const hotels = [
			{
				name: 'Hotel Cortez Baja Inn',
				label: 'Conference hotel',
				image: 'assets/img/hotels/hotel-cortez.png',
				rates: 'Single $1,582 MXN; double $1,695 MXN per night, taxes included',
				code: 'MEXIHC 2026',
				contact: '646 178 23 07 - reservaciones@bajainn.com - www.bajainn.com',
				notes: 'Central location, restaurant, bar and services for a comfortable conference stay.'
			},
			{
				name: 'Hotel Bahia',
				label: 'Preferred-rate hotel',
				image: 'assets/img/hotels/hotel-bahia.png',
				rates: 'Single $1,300 MXN; double $1,800 MXN; junior suite $2,100 MXN; suite $3,000 MXN per night',
				code: 'MEXIHC 2026',
				contact: '646 178 2101 - www.hotelbahia.com.mx',
				notes: 'The rate also applies to days before and after the event.'
			},
			{
				name: 'Mision Santa Isabel',
				label: 'Preferred-rate hotel',
				image: 'assets/img/hotels/mision-santa-isabel.png',
				rates: 'Single $1,600 MXN; double $1,800 MXN; triple $3,000 MXN per night',
				code: 'MEXIHC 2026',
				contact: 'WhatsApp 646 288 8926 - phone 646 178 3345',
				notes: 'Central location, colonial style, pool and rest areas.'
			},
			{
				name: 'Hotel Posada El Rey Sol',
				label: 'Nearby option',
				rates: '$1,995 MXN per night',
				code: 'Single rate',
				contact: '646 277 7731',
				notes: 'Includes American breakfast for one or two guests and dedicated internet per room.'
			},
			{
				name: 'Hotel Casa del Sol',
				label: 'Nearby option',
				rates: 'Single $1,375 MXN; double $1,700 MXN; junior suite $1,850 MXN per night',
				code: 'UABC agreement',
				contact: '646 178 1570',
				notes: 'Rates reported by the hotel in the accommodation list.'
			},
			{
				name: 'San Nicolas Hotel',
				label: 'Nearby option',
				rates: 'Single or double $1,400 MXN Sunday to Thursday; extra person $270 MXN',
				code: 'UABC agreement',
				contact: '646 166 4401',
				notes: 'Rate available by direct inquiry with the hotel.'
			}
		]
		const featuredHotels = hotels.filter((hotel) => hotel.image)
		const additionalHotels = hotels.filter((hotel) => !hotel.image)
		const baseUrl = import.meta.env.BASE_URL

		return { Tr, featuredHotels, additionalHotels, baseUrl }
	}
}
</script>

<template>
	<InPageNavigationPanel
		:links="[
			{ label: 'Registration and payment', to: Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' }) },
			{ label: 'Accommodation', to: Tr.i18nRoute({ name: 'getting-started', hash: '#hotels' }) },
			{ label: 'Venue', to: Tr.i18nRoute({ name: 'getting-started', hash: '#venue' }) },
			{ label: 'Arrival and transportation', to: Tr.i18nRoute({ name: 'getting-started', hash: '#arrival' }) }
		]"
	/>

	<p>
		MexIHC 2026 will take place in Ensenada, Baja California, from October 27 to 30, 2026.
		This guide gathers the first steps to prepare your participation: registration, accommodation, venue and
		arrival recommendations.
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
					<div class="fw-bold">Book accommodation early</div>
					Preferred rates are subject to availability and require mentioning the conference code.
				</div>
			</li>
		</ol>

		<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="btn bg-gradient-primary btn-round">
			View rates
		</RouterLink>
	</section>

	<section id="hotels" class="mt-5">
		<h2 class="h3">Accommodation</h2>
		<p>
			The conference hotel is Hotel Cortez Baja Inn. There are also nearby options with preferred rates or
			agreements available by direct inquiry. To request a rate, mention the listed code when booking.
		</p>

		<div class="row g-4">
			<div v-for="hotel in featuredHotels" :key="hotel.name" class="col-md-6 col-xl-4">
				<article class="card h-100 shadow-sm">
					<img
						:src="`${baseUrl}${hotel.image}`"
						class="card-img-top hotel-flyer"
						alt=""
					>
					<div class="card-body">
						<p class="text-primary fw-bold mb-1">{{ hotel.label }}</p>
						<h3 class="h5">{{ hotel.name }}</h3>
						<p class="mb-2">{{ hotel.notes }}</p>
						<p class="mb-1"><strong>Rate:</strong> {{ hotel.rates }}</p>
						<p class="mb-1"><strong>Code:</strong> {{ hotel.code }}</p>
						<p class="mb-0"><strong>Contact:</strong> {{ hotel.contact }}</p>
					</div>
				</article>
			</div>
		</div>

		<h3 class="h4 mt-5">Other accommodation options</h3>
		<div class="table-responsive">
			<table class="table table-striped align-middle">
				<thead>
					<tr>
						<th scope="col">Hotel</th>
						<th scope="col">Rate</th>
						<th scope="col">Code</th>
						<th scope="col">Contact</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="hotel in additionalHotels" :key="hotel.name">
						<th scope="row">
							{{ hotel.name }}
							<span class="d-block text-primary">{{ hotel.label }}</span>
							<span class="d-block fw-normal">{{ hotel.notes }}</span>
						</th>
						<td>{{ hotel.rates }}</td>
						<td>{{ hotel.code }}</td>
						<td>{{ hotel.contact }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<p class="small">
			Rates may change depending on availability, stay dates, occupancy and each hotel's conditions. Book early to
			secure the preferred rate.
		</p>
	</section>

	<section id="venue" class="mt-5">
		<h2 class="h3">Venue</h2>
		<p>
			The conference will be held in Ensenada, Baja California. Final room, access and space distribution details
			will be published as the program organization advances.
		</p>
	</section>

	<section id="arrival" class="mt-5">
		<h2 class="h3">Arrival and Transportation</h2>
		<ul>
			<li>Plan your arrival with transfer times to Ensenada and the start time of conference activities in mind.</li>
			<li>Confirm check-in, deposit and cancellation policies directly with your hotel.</li>
			<li>Review the preliminary schedule to identify the days when you will attend workshops, tutorials, sessions or social activities.</li>
		</ul>
	</section>
</template>

<style scoped>
.hotel-flyer {
	aspect-ratio: 2 / 3;
	background-color: #f8f9fa;
	object-fit: contain;
}
</style>
