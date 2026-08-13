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
			{ label: 'Registro y pago', to: Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' }) },
			{ label: 'Información pendiente', to: Tr.i18nRoute({ name: 'getting-started', hash: '#pending-information' }) }
		]"
	/>

	<p>
		MexIHC 2026 se llevará a cabo en Ensenada, Baja California, del 27 al 30 de octubre de 2026.
		Esta página reúne los primeros pasos para preparar tu participación; por ahora, la información confirmada se
		centra en las tarifas de registro y los pasos que se abrirán para completar el pago.
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
					<div class="fw-bold">Completa el registro cuando esté disponible</div>
					Una vez abierto el formulario, podrás capturar tus datos, elegir la modalidad correspondiente y seguir
					las instrucciones de pago indicadas.
				</div>
			</li>
		</ol>

		<div class="d-flex flex-wrap gap-2">
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="btn bg-gradient-primary btn-round">
				Ver tarifas
			</RouterLink>
			<button class="btn btn-secondary disabled btn-round" type="button" disabled aria-disabled="true">
				Formulario pendiente
			</button>
		</div>
	</section>

	<section id="pending-information" class="mt-5">
		<h2 class="h4">Información pendiente</h2>
		<p>
			La información logística se agregará aquí cuando esté confirmada. Para evitar confusión, no se mostrará
			información de ediciones anteriores.
		</p>
		<ul>
			<li>Sede y distribución de espacios en Ensenada.</li>
			<li>Hospedaje recomendado y tarifas preferenciales, si aplican.</li>
			<li>Transporte local y recomendaciones de llegada.</li>
			<li>Recomendaciones para visitantes durante los días de la conferencia.</li>
		</ul>
	</section>
</template>
