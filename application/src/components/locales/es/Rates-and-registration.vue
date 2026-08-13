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
					<td>Artículo de taller</td>
					<td><span class="fst-italic fw-light">$3,000 MXN</span></td>
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
			El formulario oficial de registro y las instrucciones finales de pago serán publicados próximamente.
			No se muestran datos bancarios hasta que estén confirmados para MexIHC 2026.
		</p>
		<div class="d-flex flex-wrap gap-2">
			<RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="btn bg-gradient-primary btn-round">
				Ver primeros pasos
			</RouterLink>
			<button class="btn btn-secondary disabled btn-round" type="button" disabled aria-disabled="true">
				Formulario pendiente
			</button>
		</div>
	</section>
</template>
