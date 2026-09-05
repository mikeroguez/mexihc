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
				label: 'Hotel sede',
				image: 'assets/img/hotels/hotel-cortez.png',
				rates: 'Sencilla $1,582 MXN; doble $1,695 MXN por noche, impuestos incluidos',
				code: 'MEXIHC 2026',
				contact: '646 178 23 07 - reservaciones@bajainn.com - www.bajainn.com',
				notes: 'Ubicación céntrica, restaurante, bar y servicios para una estancia cómoda durante la conferencia.'
			},
			{
				name: 'Hotel Bahía',
				label: 'Hotel con tarifa preferencial',
				image: 'assets/img/hotels/hotel-bahia.png',
				rates: 'Sencilla $1,300 MXN; doble $1,800 MXN; junior suite $2,100 MXN; suite $3,000 MXN por noche',
				code: 'MEXIHC 2026',
				contact: '646 178 2101 - www.hotelbahia.com.mx',
				notes: 'La tarifa aplica también para días previos y posteriores al evento.'
			},
			{
				name: 'Misión Santa Isabel',
				label: 'Hotel con tarifa preferencial',
				image: 'assets/img/hotels/mision-santa-isabel.png',
				rates: 'Sencilla $1,600 MXN; doble $1,800 MXN; triple $3,000 MXN por noche',
				code: 'MEXIHC 2026',
				contact: 'WhatsApp 646 288 8926 - teléfono 646 178 3345',
				notes: 'Ubicación céntrica, estilo colonial, alberca y áreas de descanso.'
			},
			{
				name: 'Hotel Posada El Rey Sol',
				label: 'Opción cercana',
				rates: '$1,995 MXN por noche',
				code: 'Tarifa única',
				contact: '646 277 7731',
				notes: 'Incluye desayuno americano para una o dos personas e internet dedicado por habitación.'
			},
			{
				name: 'Hotel Casa del Sol',
				label: 'Opción cercana',
				rates: 'Sencilla $1,375 MXN; doble $1,700 MXN; junior suite $1,850 MXN por noche',
				code: 'Convenio UABC',
				contact: '646 178 1570',
				notes: 'Tarifas reportadas por el hotel en la lista de hospedaje.'
			},
			{
				name: 'San Nicolas Hotel',
				label: 'Opción cercana',
				rates: 'Sencilla o doble $1,400 MXN de domingo a jueves; persona extra $270 MXN',
				code: 'Convenio UABC',
				contact: '646 166 4401',
				notes: 'Tarifa disponible para consulta directa con el hotel.'
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
			{ label: 'Registro y pago', to: Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' }) },
			{ label: 'Hospedaje', to: Tr.i18nRoute({ name: 'getting-started', hash: '#hotels' }) },
			{ label: 'Sede', to: Tr.i18nRoute({ name: 'getting-started', hash: '#venue' }) },
			{ label: 'Llegada y transporte', to: Tr.i18nRoute({ name: 'getting-started', hash: '#arrival' }) }
		]"
	/>

	<p>
		MexIHC 2026 se llevará a cabo en Ensenada, Baja California, del 27 al 30 de octubre de 2026.
		Esta guía reúne los primeros pasos para preparar tu participación: registro, hospedaje, sede y
		recomendaciones de llegada.
	</p>

	<section id="rates-and-registration" class="mt-5">
		<h2 class="h3">Registro y pago</h2>
		<p>
			Antes de iniciar tu registro, revisa la página de
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="uline">
				{{ $t("nav.rates_and_registration") }}
			</RouterLink>
			para identificar la tarifa que corresponde a tu participación como autor, asistente o participante de tutorial.
		</p>

		<ol class="list-group list-group-numbered mb-4">
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<div class="ms-2 me-auto">
					<div class="fw-bold">Consulta las tarifas</div>
					Revisa costos, beneficios incluidos y notas importantes antes de preparar tu pago.
				</div>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<div class="ms-2 me-auto">
					<div class="fw-bold">Espera la apertura del formulario</div>
					El formulario oficial de registro y las instrucciones finales de pago se publicarán próximamente.
				</div>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<div class="ms-2 me-auto">
					<div class="fw-bold">Reserva hospedaje con anticipación</div>
					Las tarifas preferenciales están sujetas a disponibilidad y requieren indicar el código de la conferencia.
				</div>
			</li>
		</ol>

		<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="btn bg-gradient-primary btn-round">
			Ver tarifas
		</RouterLink>
	</section>

	<section id="hotels" class="mt-5">
		<h2 class="h3">Hospedaje</h2>
		<p>
			El hotel sede es Hotel Cortez Baja Inn. Además, se cuenta con opciones cercanas con tarifas preferenciales o
			convenios disponibles para consulta directa. Para solicitar una tarifa, menciona el código indicado al hacer
			tu reservación.
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
						<p class="mb-1"><strong>Tarifa:</strong> {{ hotel.rates }}</p>
						<p class="mb-1"><strong>Código:</strong> {{ hotel.code }}</p>
						<p class="mb-0"><strong>Contacto:</strong> {{ hotel.contact }}</p>
					</div>
				</article>
			</div>
		</div>

		<h3 class="h4 mt-5">Otras opciones de hospedaje</h3>
		<div class="table-responsive">
			<table class="table table-striped align-middle">
				<thead>
					<tr>
						<th scope="col">Hotel</th>
						<th scope="col">Tarifa</th>
						<th scope="col">Código</th>
						<th scope="col">Contacto</th>
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
			Las tarifas pueden cambiar según disponibilidad, fechas de estancia, ocupación y condiciones de cada hotel.
			Reserva con anticipación para asegurar la tarifa preferencial.
		</p>
	</section>

	<section id="venue" class="mt-5">
		<h2 class="h3">Sede</h2>
		<p>
			La conferencia se realizará en Ensenada, Baja California. La información final de salas, accesos y distribución
			de espacios se publicará conforme avance la organización del programa.
		</p>
	</section>

	<section id="arrival" class="mt-5">
		<h2 class="h3">Llegada y transporte</h2>
		<ul>
			<li>Planea tu llegada considerando los traslados hacia Ensenada y el horario de inicio de actividades.</li>
			<li>Confirma con tu hotel las políticas de check-in, anticipo y cancelación.</li>
			<li>Consulta la agenda preliminar para identificar los días en los que participarás en talleres, tutoriales, sesiones o actividades sociales.</li>
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
