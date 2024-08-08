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
		Welcome to MexIHC 2024, the Tenth Mexican International Conference on Human-Computer Interaction, organized by the 
		<a class="uline" href="https://www.amexihc.org/">Mexican Association of Human-Computer Interaction (AMexIHC)</a>. On this "First Steps" page, you will find all
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
		<!--
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#accommodation' })"
						class="uline">
						Accommodation:
					</RouterLink>
				</div>
				Discover lodging options in Puebla, Mexico, to make your stay at the conference comfortable and enjoyable.
				We will provide information on nearby hotels and recommendations.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#how-to-get-there' })"
						class="uline">
						How to Get There:
					</RouterLink>
				</div>
				Get clear directions and details on how to reach the conference venues, both at BUAP (Benemérita Universidad
				Autónoma de Puebla) and Tec de Monterrey, Campus Puebla.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#frequently-asked-questions' })"
						class="uline">
						Frequently Asked Questions:
					</RouterLink>
				</div>
				Find answers to the most common questions you may have about your participation in the conference.
			</div>
		</li>
		-->
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
			<li>Filling out the form with your information using the <a class="uline" href="https://conferencias.app/">registration system</a></li>
			<li>Make the payment (bank transfer preferably or deposit below) using the bank details provided and the Registration Code provided by the registration system.</li>
			<li>Send a copy of payment invoice to registration.2024@mexihc.org (especially deposits at the bank)</li>
			<li>Also, if you need a fiscal invoice (factura), you can request it through the system and it will be emailed to you.</li>
			<li>Payments made from outside Mexico can use PayPal to complete the registration. Instructions will appear in the confirmation page.</li>
		</ol>

		<p>From payments from Mexican bank accounts, please use:</p>

		<p class="text-bold">
			Nombre: ASOCIACION MEXICANA DE INTERACCION HUMANO COMPUTADORA AC <br>
			Banco: BANCO DEL BAJIO <br>
			Clabe interbancaria: 030767900000120128 <br>
			Cuenta: 88823590201 <br>
			Concepto: {Registration code}
		</p>
	</div>

	<!--
<h2 id="accommodation" class="mt-5 h3">Accommodation:</h2>
<p>
	Pending
</p>

<h2 id="how-to-get-there" class="mt-5 h3">How to Get There:</h2>
<p>
	Pending
</p>

<h2 id="frequently-asked-questions" class="mt-5 h3">Frequently Asked Questions:</h2>
<p>
	Pending
</p>
-->
</template>