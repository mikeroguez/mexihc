<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <h3 class="">Para asistir a toda la conferencia</h3>

	<table class="table table-striped">
		<caption>Tabla de costos para asistir a toda la conferencia</caption>
		<thead>
			<tr>
				<th scope="col">Descripción</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Profesionales</td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
			</tr>
			<tr>
				<td>Estudiantes autores</td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
			</tr>
			<tr>
				<td>Estudiantes no autores</td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> Cena de Gala y comidas no están incluidas en el registro</td>
			</tr>
		</tfoot>
	</table>

	<h3 class="">Para asistir a Tutoriales/Talleres (límite de cupos)</h3>

	<table class="table table-striped">
		<caption>Tabla de costos para asistir a Tutoriales/Talleres (límite de cupos)</caption>
		<thead>
			<tr>
				<th scope="col">Descripción</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Profesionales</td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
			</tr>
			<tr>
				<td>Estudiantes</td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
				<td><span class="fst-italic fw-light">Pendiente</span></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Nota:</strong> El registro a la conferencia es pre-requisito para el registro a Tutoriales y Talleres</td>
			</tr>
		</tfoot>
	</table>

	<h3 class="">Sobre registro de autores</h3>

	<ol>
		<li>
			Para publicaciones con al menos un autor profesional
			<ol type="a">
				<li>Cada artículo a presentar debe tener al menos un autor profesional registrado</li>
				<li>Si varios artículos están asociados con el mismo autor profesional, entonces por cada publicación adicional, el autor registrado debe pagar (cancelar) el valor de la publicación o, en su defecto, otro autor profesional debe registrarse</li>
			</ol>
		</li>
		<li>
			Para publicaciones donde todos los autores son estudiantes
			<ol type="a">
				<li>Cada artículo a presentar debe tener al menos un autor registrado</li>
			</ol>
		</li>
	</ol>
	<!--
    <section class="py-5 container" id="download-soft-ui">
        <div class="bg-gradient-dark position-relative border-radius-xl overflow-hidden">
            <img src="/assets/img/shapes/waves-white.svg" alt="" class="position-absolute start-0 top-md-0 w-100 opacity-6">
            <div class="container py-7 postion-relative z-index-2 position-relative">
                <div class="row">
                    <div class="col-md-7 mx-auto text-center">                        
                        <a href="#" class="btn btn-lg  bg-gradient-yellow  btn-round">
							{{ $t("register.register_button") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
	-->
</template>