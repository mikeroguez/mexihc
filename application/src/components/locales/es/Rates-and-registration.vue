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
			{ label: 'Autores', to: Tr.i18nRoute({ name: 'registration', hash: '#authors' }) },
			{ label: 'Asistentes', to: Tr.i18nRoute({ name: 'registration', hash: '#attendees' }) },
			{ label: 'Tutoriales', to: Tr.i18nRoute({ name: 'registration', hash: '#tutorials' }) },
			{ label: 'Registro y pago', to: Tr.i18nRoute({ name: 'registration', hash: '#payment' }) }
		]"
	/>

	<p>
		Estas son las tarifas confirmadas para MexIHC 2026. Revisa la categoría que corresponde a tu participación
		antes de iniciar el registro.
	</p>
	<p><strong>Nota:</strong> La cena de gala no está incluida en estas tarifas.</p>

	<section id="authors" class="mt-5">
		<h2>Autores</h2>

		<table class="table table-striped">
			<caption>Tabla de costos para autores</caption>
			<thead>
				<tr>
					<th scope="col">Descripción</th>
					<th scope="col">Costo</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Artículo completo o breve</td>
					<td><span class="fst-italic fw-light">$4,000 MXN</span></td>
				</tr>
				<tr>
					<td>Artículo adicional (mismo presentador)</td>
					<td><span class="fst-italic fw-light">$1,500 MXN</span></td>
				</tr>
				<tr>
					<td>Artículo de taller de hasta 6 páginas, con publicación en revista</td>
					<td><span class="fst-italic fw-light">$1,600 MXN</span></td>
				</tr>
				<tr>
					<td>Position paper de taller de 2 páginas, con publicación en sitio web</td>
					<td><span class="fst-italic fw-light">$600 MXN</span></td>
				</tr>
				<tr>
					<td>Consorcio de posgrado</td>
					<td><span class="fst-italic fw-light">$1,000 MXN</span></td>
				</tr>
				<tr>
					<td>Póster</td>
					<td><span class="fst-italic fw-light">$1,600 MXN</span></td>
				</tr>
				<tr>
					<td>Competencia de diseño estudiantil</td>
					<td>
						<span class="fst-italic fw-light">Profesor: $800 MXN</span><br>
						<span class="fst-italic fw-light">Estudiante individual: $500 MXN</span><br>
						<span class="fst-italic fw-light">Equipo de 2 o más estudiantes: $1,000 MXN por equipo</span>
					</td>
				</tr>
			</tbody>
		</table>

		<h3 class="h5">El registro de autor incluye:</h3>
		<ul>
			<li>Acceso a conferencias magistrales, sesiones de la conferencia, SDC, pósters y recepción de bienvenida.</li>
			<li>Membresía de AMexIHC.</li>
		</ul>
	</section>

	<section id="attendees" class="mt-5">
		<h2>Asistentes</h2>

		<table class="table table-striped">
			<caption>Tabla de costos para asistentes</caption>
			<thead>
				<tr>
					<th scope="col">Descripción</th>
					<th scope="col">Costo</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Acceso general (profesor/estudiante/general)</td>
					<td><span class="fst-italic fw-light">$0 MXN</span></td>
				</tr>
				<tr>
					<td>Acceso general con kit y certificado</td>
					<td><span class="fst-italic fw-light">$500 MXN</span></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2"><strong>Nota:</strong> Asientos limitados</td>
				</tr>
			</tfoot>
		</table>

		<h3 class="h5">El registro de asistente incluye:</h3>
		<ul>
			<li>Acceso a conferencias magistrales, sesiones de la conferencia, SDC y pósters.</li>
		</ul>
	</section>

	<section id="tutorials" class="mt-5">
		<h2>Tutoriales</h2>

		<table class="table table-striped">
			<caption>Tabla de costos para tutoriales</caption>
			<thead>
				<tr>
					<th scope="col">Descripción</th>
					<th scope="col">Costo</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Autores registrados</td>
					<td><span class="fst-italic fw-light">$450 MXN</span></td>
				</tr>
				<tr>
					<td>Participantes del consorcio de posgrado</td>
					<td><span class="fst-italic fw-light">$0 MXN</span></td>
				</tr>
				<tr>
					<td>Estudiantes de instituciones sede</td>
					<td><span class="fst-italic fw-light">$100 MXN</span></td>
				</tr>
				<tr>
					<td>Estudiantes en general</td>
					<td><span class="fst-italic fw-light">$200 MXN</span></td>
				</tr>
				<tr>
					<td>Solo tutorial</td>
					<td><span class="fst-italic fw-light">$800 MXN</span></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2"><strong>Nota:</strong> Asientos limitados</td>
				</tr>
			</tfoot>
		</table>
	</section>

	<section id="payment" class="mt-5">
		<h2>Registro y pago</h2>
		<p>
			Para registrarte en el evento, sigue estos pasos:
		</p>
		<ol>
			<li>
				Completa el formulario con tu información en el
				<a class="uline" href="https://conferencias.app/" target="_blank" rel="noopener noreferrer"
					aria-label="Sistema de Registro (abre en una nueva pestaña)">Sistema de Registro</a>.
				El sistema te dará un <strong>Código de Registro</strong> que se utilizará para realizar el pago. Consérvalo.
			</li>
			<li>Realiza el pago utilizando los datos bancarios (abajo) y el Código de Registro proporcionados.</li>
			<li>
				Por cuestiones fiscales, para pagos desde el territorio nacional (México), realiza el pago mediante
				transferencia electrónica o depósito en ventanilla bancaria. Para pagos desde el extranjero, están
				habilitadas las opciones de PayPal y tarjeta de crédito.
			</li>
			<li>
				Si realizaste tu pago mediante depósito en ventanilla bancaria, envía una copia del comprobante de pago a
				<a class="uline" href="mailto:registration.2026@mexihc.org">registration.2026@mexihc.org</a>,
				además de tu Código de Registro.
			</li>
			<li>
				Si necesitas una factura fiscal, puedes solicitarla a través del Sistema de Registro (arriba a la derecha)
				y se te enviará por correo electrónico.
			</li>
		</ol>

		<p>
			<strong>Fecha límite para pago de registro de autores:</strong> 25 de septiembre de 2026.
			Si requieres más tiempo, contáctanos a
			<a class="uline" href="mailto:registration.2026@mexihc.org">registration.2026@mexihc.org</a>.
		</p>

		<h3 class="h5">Datos bancarios para pagos desde México</h3>
		<div class="table-responsive">
			<table class="table table-striped">
				<caption>Datos bancarios para transferencia o depósito en ventanilla</caption>
				<tbody>
					<tr>
						<th scope="row">Nombre</th>
						<td>Asociación Mexicana de Interacción Humano Computadora AC</td>
					</tr>
					<tr>
						<th scope="row">Banco</th>
						<td>Banco del Bajío</td>
					</tr>
					<tr>
						<th scope="row">CLABE</th>
						<td>030767900000120128</td>
					</tr>
					<tr>
						<th scope="row">Cuenta</th>
						<td>88823590201</td>
					</tr>
					<tr>
						<th scope="row">Concepto</th>
						<td>&lt;Código de Registro&gt;</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="d-flex flex-wrap gap-2">
			<a href="https://conferencias.app/" target="_blank" rel="noopener noreferrer"
				class="btn bg-gradient-primary btn-round" aria-label="Ir al Sistema de Registro (abre en una nueva pestaña)">
				Ir al Sistema de Registro
			</a>
			<RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="btn mexihc-action-link mexihc-action-link-muted btn-round">
				Ver primeros pasos
			</RouterLink>
		</div>
	</section>
</template>
