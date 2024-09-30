<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <h2 class="">Autores</h2>

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
				<td><span class="fst-italic fw-light">$2,000 MXN</span></td>
			</tr>
			<tr>
				<td>Póster</td>
				<td><span class="fst-italic fw-light">$1,600 MXN</span></td>
			</tr>
			<tr>
				<td>Competencia de diseño estudiantil</td>
				<td>
					<span class="fst-italic fw-light">Profesor: $800 MXN</span><br>
					<span class="fst-italic fw-light">Estudiantes: $500 MXN</span>
				</td>
			</tr>
		</tbody>
	</table>

	<h3 class="h5">La tarifa incluye:</h3>
	<ul>
		<li>Publicación en la revista de AMexIHC.</li>
		<li>Acceso a conferencias magistrales, conferencias, SDC y pósters.</li>
		<li>Membresía de AMexIHC.</li>
	</ul>
	
	<hr>
	
	<h2 class="">Asistentes</h2>

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
				<td>Profesor/Estudiante/General</td>
				<td><span class="fst-italic fw-light">$0 MXN</span></td>
			</tr>
			<tr>
				<td>Con kit y certificado</td>
				<td><span class="fst-italic fw-light">$500 MXN</span></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> Asientos limitados</td>
			</tr>
		</tfoot>		
	</table>

	<h3 class="h4">La tarifa incluye:</h3>
	<ul>
		<li>Acceso a conferencias magistrales, conferencias, SDC y pósters.</li>
	</ul>

	<h2 class="">Tutoriales</h2>

	<table class="table table-striped">
		<caption>Tabla de costos a tutoriales</caption>
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
				<td>Solo tutorial</td>
				<td><span class="fst-italic fw-light">$800 MXN</span></td>
			</tr>
			<tr>
				<td>Estudiantes de licenciatura</td>
				<td><span class="fst-italic">$150 MXN</span></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> Asientos limitados</td>
			</tr>
		</tfoot>		
	</table>
	
	<hr>
	
	<h2 class="">Información bancaria</h2>
	<p>Para registrarse en el evento, por favor siga los siguientes pasos:</p>

	<ol>
		<li>Complete el formulario con su información utilizando el <a class="uline" href="https://conferencias.app/">sistema de registro</a>.</li>
		<li>Realice el pago (preferentemente transferencia bancaria o depósito) utilizando los datos bancarios proporcionados y el Código de Registro proporcionado por el sistema de registro.</li>
		<li>Envíe una copia de la factura de pago a registration.2024@mexihc.org (especialmente para depósitos en el banco).</li>
		<li>Además, si necesita una factura fiscal, puede solicitarla a través del sistema y se le enviará por correo electrónico.</li>
		<li>Los pagos realizados desde fuera de México pueden usar PayPal para completar el registro. Las instrucciones aparecerán en la página de confirmación.</li>
	</ol>

	<p>Para pagos desde cuentas bancarias mexicanas, utilice:</p>

	<p class="text-bold">
		Nombre: ASOCIACION MEXICANA DE INTERACCION HUMANO COMPUTADORA AC <br>
		Banco: BANCO DEL BAJIO <br>
		Clabe interbancaria: 030767900000120128 <br>
		Cuenta: 88823590201 <br>
		Concepto: {Registration code}
	</p>

    <section class="py-5 container" id="download-soft-ui">
        <div class="bg-gradient-dark position-relative border-radius-xl overflow-hidden">
            <img src="/assets/img/shapes/cactus.svg" alt="" class="position-absolute start-0 top-md-0 w-100 opacity-6">
            <div class="container py-7 postion-relative z-index-2 position-relative">
                <div class="row">
                    <div class="col-md-7 mx-auto text-center">                        
                        <a href="https://conferencias.app/" class="btn btn-lg  bg-gradient-yellow  btn-round">
                          {{ $t("register.register_button") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>