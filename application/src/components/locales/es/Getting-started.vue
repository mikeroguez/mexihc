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
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#infoteca' })"
						class="uline">
						Sede de la conferencia: Infoteca Central
					</RouterLink>
				</div>
				Consulta la ubicación exacta de la Infoteca en el campus Arteaga de la Universidad Autónoma de Coahuila (UAdeC), sede de la conferencia MexIHC 2024.
			</div>
		</li>
		<!--
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
	<img src="/assets/img/quintaDorada.png" width="100%">
	<p>
		Reserva en <strong><a href="https://www.quintadorada.com.mx/">Quinta Dorada Hotels & Suites</a></strong>
		mencionando el evento <em>"MexIHC 2024: Décima
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

	<p><strong>Para hacer válida la tarifa especial, menciona el evento al reservar a través de los siguientes
			canales:</strong></p>
	<ul>
		<li><strong>Teléfono:</strong> +52 (844) 450 50 50</li>
		<li><strong>Correo electrónico:</strong> gerenciareservaciones@quintadorada.com.mx</li>
	</ul>

	<strong>Dirección</strong>
	<p>
		Periférico Luis Echeverría #1416<br>
		Col. Guanajuato Oriente<br>
		Saltillo, Coahuila<br>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.918905681929!2d-100.97917472384009!3d25.440974577554943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880d5015192a87%3A0x59511576653affdd!2sQuinta%20Dorada%20Hotel%20%26%20Suites!5e0!3m2!1ses!2smx!4v1725029865543!5m2!1ses!2smx"
			width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
			referrerpolicy="no-referrer-when-downgrade">
		</iframe>
	</p>

	<h2 id="infoteca" class="mt-5 h3">Sede de la conferencia: Infoteca Central</h2>
	<p>La conferencia MexIHC 2024 se llevará a cabo en la <strong>Infoteca de la Universidad Autónoma de Coahuila (UAdeC)</strong>, ubicada en el campus Arteaga.</p>
	<p>
		<strong>Dirección:</strong> Boulevard Fundadores Km 13,<br>
		Ciudad Universitaria,<br>
		23354 Arteaga, Coahuila, México.
	</p>
	<p>
		<strong>Ubicación dentro del campus:</strong> La Infoteca se encuentra en el corazón de la Ciudad Universitaria de la UAdeC, fácilmente accesible desde la entrada principal del campus. Esta ubicación estratégica permite un acceso cómodo a todas las instalaciones necesarias para el desarrollo de la conferencia.	
	</p>
	<p>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14410.770497964844!2d-100.8711317!3d25.4485379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880e2435a2ff73%3A0xdf82eb57c2cecf26!2sInfoteca%20Central!5e0!3m2!1ses!2smx!4v1725029727854!5m2!1ses!2smx"
			width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
			referrerpolicy="no-referrer-when-downgrade">
		</iframe>
	</p>

	<h2 id="frequently-asked-questions" class="mt-5 h3">Transporte desde el Aeropuerto de Monterrey</h2>
	<p>Si llegas al <strong>Aeropuerto Internacional de Monterrey</strong>, tienes varias opciones para llegar a Saltillo:</p>

	<ul>
		<li>
			<strong>Autobuses directos a Saltillo:</strong>
			<p>Dentro del aeropuerto, puedes tomar autobuses de Grupo Senda con corridas directas a Saltillo. Compra tus boletos en <a href="https://ticket.gruposenda.com/es/" class="uline">Grupo Senda</a>.</p>
		</li>
		<li>
			<strong>Autobuses a la Central de Monterrey:</strong>
			<p>También hay autobuses que te llevarán a la Central de Autobuses de Monterrey, desde donde puedes tomar un autobús hacia Saltillo.</p>
		</li>
		<li>
			<strong>Taxis con facturación:</strong><br>
			<p>Algunos servicios de taxi en el aeropuerto ofrecen la posibilidad de facturación. Asegúrate de preguntar si necesitas un recibo fiscal.</p>
			<img src="/assets/img/taxi.jpg" width="80%">
		</li>
	</ul>

	<h2 id="frequently-asked-questions" class="mt-5 h3">Qué hacer en Saltillo</h2>	
	<p>
		Saltillo es una ciudad llena de historia y cultura. Aprovecha tu estancia para explorar sus diversas atracciones. Para más detalles sobre qué hacer en la ciudad, visita el sitio oficial de turismo de Coahuila: <a href="https://hazturismoencoahuila.mx/saltillo" class="uline">Qué hacer en Saltillo</a>.
	</p>
</template>