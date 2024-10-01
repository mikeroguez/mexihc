<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		return { Tr }
	}
}
</script>

<template>
	<p>
		Welcome to MexIHC 2024, the Tenth Mexican International Conference on Human-Computer Interaction, organized by
		the
		<a class="uline" href="https://www.amexihc.org/">Mexican Association of Human-Computer Interaction
			(AMexIHC)</a>. On this "First Steps" page, you will find all
		the necessary information for your participation in the conference.
	</p>

	<ol class="list-group list-group-numbered">
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })"
						class="uline">
						Registration and Payment:
					</RouterLink>
				</div>
				Get information on how to register and pay, ensuring your attendance at MexIHC 2024.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#host-hotel' })" class="uline">
						Host Hotel: Quinta Dorada Hotel & Suites
					</RouterLink>
				</div>
				This quiet hotel is located in the northern part of the city, just a few kilometers from key attractions
				and Plan de Guadalupe International Airport. It offers modern rooms with free Wi-Fi, flat-screen TVs,
				and desks; some with balconies. Suites feature a sitting area, kitchenette, and minibar. Amenities
				include a buffet breakfast, free transport, and an outdoor pool. The hotel also has a French bistro,
				garden, and 24-hour business center.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#infoteca' })" class="uline">
						Conference Venue: Central Infoteca
					</RouterLink>
				</div>
				Find the exact location of the Infoteca on the Arteaga campus of the Universidad Autónoma de Coahuila
				(UAdeC), the venue for the MexIHC 2024 conference.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#transporte' })" class="uline">
						Transportation from Monterrey Airport
					</RouterLink>
				</div>
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#quehacer' })" class="uline">
						Things to Do in Saltillo
					</RouterLink>
				</div>
			</div>
		</li>
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Registration and Payment:</h2>
	<div>
		<p>To attend the conference, the first step is the payment and registration process. We recommend checking the
			information related to <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="uline">{{
						$t("nav.rates_and_registration") }}</RouterLink>,, where you will find details on different rates based
			on
			participation options, as well as workshop costs and author registration information.</p>

		<h3 class="h4">Payment Instructions:</h3>

		<p>To register to the event, please follow the next steps:</p>

		<ol>
			<li>Filling out the form with your information using the <a class="uline"
					href="https://conferencias.app/">registration system</a></li>
			<li>Make the payment (bank transfer preferably or deposit below) using the bank details provided and the
				Registration Code provided by the registration system.</li>
			<li>Send a copy of payment invoice to registration.2024@mexihc.org (especially deposits at the bank)</li>
			<li>Also, if you need a fiscal invoice (factura), you can request it through the system and it will be
				emailed to you.</li>
			<li>Payments made from outside Mexico can use PayPal to complete the registration. Instructions will appear
				in the confirmation page.</li>
		</ol>

		<p>From payments from Mexican bank accounts, please use <strong>(Deadline october 18th)</strong>:</p>

		<p class="text-bold">
			Nombre: ASOCIACION MEXICANA DE INTERACCION HUMANO COMPUTADORA AC <br>
			Banco: BANCO DEL BAJIO <br>
			Clabe interbancaria: 030767900000120128 <br>
			Cuenta: 88823590201 <br>
			Concepto: {Registration code}
		</p>
	</div>


	<h2 id="host-hotel" class="mt-5 h3">Hotel sede: Quinta Dorada Hotel & Suites</h2>
	<img src="/assets/img/quintaDorada.png" width="100%">
	<p>Book at <strong><a href="https://www.quintadorada.com.mx/">Quinta Dorada Hotels & Suites</a></strong> by
		mentioning the event <em>"MexIHC 2024: Tenth Mexican International
			Conference on Human-Computer Interaction"</em> and enjoy the following exclusive benefits:</p>
	<ul>
		<li><strong>Special rate</strong> from November 5th to 9th</li>
		<li>American-style buffet <strong>breakfast included</strong></li>
		<li>Excellent location, close to major shopping centers</li>
		<li>
			Special Rates:
			<ul>
				<li><strong>Room for 1 or 2 persons: $1,843.31 MXN</strong> per day (taxes included: 16% VAT and 3% ISH)
				</li>
				<li><strong>Room for 3 or 4 persons: $2,200.31 MXN</strong> per day (taxes included: 16% VAT and 3% ISH)
				</li>
			</ul>
		</li>
	</ul>
	<p><strong>To receive the special rate, mention the event when booking through the following channels:</strong></p>
	<ul>
		<li><strong>Email:</strong> gerenciareservaciones@quintadorada.com.mx</li>
		<li><strong>Phone:</strong> +52 (844) 450 50 50</li>
	</ul>

	<strong>Address:</strong>
	<p>
		Periférico Luis Echeverría #1416<br>
		Col. Guanajuato Oriente<br>
		Saltillo, Coahuila, Mexico<br>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.918905681929!2d-100.97917472384009!3d25.440974577554943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880d5015192a87%3A0x59511576653affdd!2sQuinta%20Dorada%20Hotel%20%26%20Suites!5e0!3m2!1ses!2smx!4v1725029865543!5m2!1ses!2smx"
			width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
			referrerpolicy="no-referrer-when-downgrade">
		</iframe>
	</p>

	<h2 id="infoteca" class="mt-5 h3">Conference Venue: Central Infoteca</h2>
	<p>
		The MexIHC 2024 conference will be held at the <strong>Infoteca of the Universidad Autónoma de Coahuila (UAdeC)</strong>, located
		on the Arteaga campus.
	</p>
	<p>
		<strong>Address:</strong>
		Boulevard Fundadores Km 13,<br>
		Ciudad Universitaria,<br>
		23354 Arteaga, Coahuila, Mexico.
	</p>
	<p>
		<strong>Location on campus:</strong>
		The Infoteca is located in the heart of the UAdeC's Ciudad Universitaria, easily accessible from the campus's
		main entrance. This strategic location provides convenient access to all the facilities needed for the
		conference.
	</p>
	<p>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14410.770497964844!2d-100.8711317!3d25.4485379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880e2435a2ff73%3A0xdf82eb57c2cecf26!2sInfoteca%20Central!5e0!3m2!1ses!2smx!4v1725029727854!5m2!1ses!2smx"
			width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
			referrerpolicy="no-referrer-when-downgrade">
		</iframe>
	</p>	

	<h2 id="transporte" class="mt-5 h3">Transportation from Monterrey Airport</h2>
	<p>If you arrive at thel <strong>Monterrey International Airport</strong>, there are several options to get to Saltillo:</p>

	<ul>
		<li>
			<strong>Direct buses to Saltillo:</strong>
			<p>Within the airport, you can take Grupo Senda buses that go directly to Saltillo. You can buy your tickets at <a href="https://ticket.gruposenda.com/es/" class="uline">Grupo Senda</a>.</p>
		</li>
		<li>
			<strong>Buses to Monterrey Central Bus Station:</strong>
			<p>There are also buses that take you to the Monterrey Central Bus Station, where you can take another bus to Saltillo.</p>
		</li>
		<li>
			<strong>Taxis with invoicing:</strong><br>
			<p>Some taxi services at the airport offer the option to provide a fiscal invoice. Be sure to ask if you need a receipt.</p>
			<img src="/assets/img/taxi.jpg" width="80%">
		</li>
	</ul>

	<h2 id="quehacer" class="mt-5 h3">Things to Do in Saltillo</h2>	
	<p>
		Saltillo is a city rich in history and culture. Make the most of your stay by exploring its many attractions. For more details on what to do in the city, visit the official tourism site of Coahuila: <a href="https://hazturismoencoahuila.mx/saltillo" class="uline">Things to Do in Saltillo</a>.
	</p>
</template>