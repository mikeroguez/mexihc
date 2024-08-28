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
		Bienvenidos a MexIHC 2024, la Décima Conferencia Internacional Mexicana sobre Interacción Humano-Computadora,
		organizada por la <a class="uline" href="https://www.amexihc.org/">Asociación Mexicana de Interacción
			Humano-Computadora (AMexIHC)</a>. En esta página "Primeros
		pasos", encontrarás toda la información necesaria para tu participación en la conferencia.
	</p>

	<ol class="list-group list-group-numbered">
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })"
						class="uline">
						Registro y Pago:
					</RouterLink>
				</div>
				Obtenga información para inscribirse y pagar, asegurando su asistencia a MexIHC 2024.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#host-hotel' })" class="uline">
						Hotel sede: Quinta Dorada Hotel & Suites
					</RouterLink>
				</div>
				Este hotel tranquilo está ubicado en el norte de la ciudad, a pocos kilómetros de los principales puntos
				de interés y del Aeropuerto Internacional Plan de Guadalupe. Ofrece modernas habitaciones con Wi-Fi
				gratuito, TV de pantalla plana y escritorio; algunas con balcón. Las suites cuentan con área de estar,
				cocina y minibar. Los servicios incluyen desayuno buffet, transporte gratuito y piscina al aire libre.
				También dispone de un bistró francés, jardín y centro de negocios 24 horas.
			</div>
		</li>
		<!--
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#how-to-get-there' })"
						class="uline">
						Cómo Llegar:
					</RouterLink>
				</div>
				Obtenga indicaciones claras y detalles sobre cómo llegar a los sitios de la conferencia, tanto en la BUAP
				(Benemérita Universidad Autónoma de Puebla) como en el Tec de Monterrey, Campus Puebla.
			</div>
		</li>
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#frequently-asked-questions' })"
						class="uline">
						Preguntas Frecuentes:
					</RouterLink>
				</div>
				Encuentre respuestas a las preguntas más comunes que pueda tener sobre su participación en la conferencia.
			</div>
		</li>
		-->
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Registro y Pago</h2>
	<div>
		<p>Para asistir a la conferencia, el primer paso es el proceso de pago y registro. Te recomendamos consultar la
			información relacionada con <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="uline">{{
						$t("nav.rates_and_registration") }}</RouterLink>, donde encontrarás detalles sobre las diferentes
			tarifas según
			las opciones de participación, así como el costo de los talleres e información para el registro de autores.
		</p>

		<h3 class="h4">Instrucciones de Pago:</h3>

		<p>Para registrarse en el evento, por favor siga los siguientes pasos:</p>

		<ol>
			<li>Complete el formulario con su información utilizando el <a class="uline"
					href="https://conferencias.app/">sistema de registro</a>.</li>
			<li>Realice el pago (preferentemente transferencia bancaria o depósito) utilizando los datos bancarios
				proporcionados y el Código de Registro proporcionado por el sistema de registro.</li>
			<li>Envíe una copia de la factura de pago a registration.2024@mexihc.org (especialmente para depósitos en el
				banco).</li>
			<li>Además, si necesita una factura fiscal, puede solicitarla a través del sistema y se le enviará por
				correo electrónico.</li>
			<li>Los pagos realizados desde fuera de México pueden usar PayPal para completar el registro. Las
				instrucciones aparecerán en la página de confirmación.</li>
		</ol>

		<p>Para pagos desde cuentas bancarias mexicanas, utilice:</p>

		<p class="text-bold">
			Nombre: ASOCIACION MEXICANA DE INTERACCION HUMANO COMPUTADORA AC <br>
			Banco: BANCO DEL BAJIO <br>
			Clabe interbancaria: 030767900000120128 <br>
			Cuenta: 88823590201 <br>
			Concepto: {Registration code}
		</p>

	</div>


	<h2 id="host-hotel" class="mt-5 h3">Hotel sede: Quinta Dorada Hotel & Suites</h2>
	<p>
		Reserva en <strong><a href="https://www.quintadorada.com.mx/">Quinta Dorada Hotels & Suites</a></strong> mencionando el evento <em>"MexIHC 2024: Décima
			Conferencia Internacional
			Mexicana sobre Interacción Humano-Computadora"</em> y disfruta de los siguientes beneficios exclusivos:
	</p>
	<ul>
		<li><strong>Tarifa especial</strong> del 5 al 9 de noviembre</li>
		<li><strong>Desayuno</strong> buffet estilo americano <strong>incluido</strong></li>
		<li>Excelente ubicación, cerca de las principales plazas comerciales</li>
		<li>
			Tarifas especiales:
			<ul>
				<li><strong>Habitación para 1 o 2 personas: $1,843.31 MXN por día</strong> (impuestos incluidos: 16% IVA
					y 3% ISH)</li>
				<li><strong>Habitación para 3 o 4 personas: $2,200.31 MXN por día</strong> (impuestos incluidos: 16% IVA
					y 3% ISH)</li>
			</ul>

		</li>
	</ul>

	<p><strong>Para hacer válida la tarifa especial, menciona el evento al reservar a través de los siguientes canales:</strong></p>
	<ul>
		<li><strong>Teléfono:</strong> +52 (844) 450 50 50</li>
		<li><strong>Correo electrónico:</strong> gerenciareservaciones@quintadorada.com.mx</li>
	</ul>

	<strong>Dirección</strong>
	<p>
		Periférico Luis Echeverría #1416<br>
		Col. Guanajuato Oriente<br>
		Saltillo, Coahuila
	</p>
	<!--
<h2 id="how-to-get-there" class="mt-5 h3">Cómo Llegar</h2>
<p>
	Pendiente
</p>

<h2 id="frequently-asked-questions" class="mt-5 h3">Preguntas Frecuentes</h2>
<p>
	Pendiente
</p>
-->
</template>