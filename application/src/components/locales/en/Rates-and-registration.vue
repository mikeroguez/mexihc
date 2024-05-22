<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <h3 class="">To attend the entire conference</h3>

	<table class="table table-striped">
		<caption>Cost table for attending the entire conference</caption>
		<thead>
			<tr>
				<th scope="col">Description</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Professionals</td>
				<td><span class="fst-italic fw-light">Pending</span></td>
				<td><span class="fst-italic fw-light">Pending</span></td>
			</tr>
			<tr>
				<td>Student authors</td>
				<td><span class="fst-italic fw-light">Pending</span></td>
				<td><span class="fst-italic fw-light">Pending</span></td>
			</tr>
			<tr>
				<td>Non-author students</td>
				<td><span class="fst-italic fw-light">Pending</span></td>
				<td><span class="fst-italic fw-light">Pending</span></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Note:</strong> Gala dinner and meals are not included in the registration fee.</td>
			</tr>
		</tfoot>
	</table>

	<h3 class="">To attend Tutorials/Workshops (limited seats)</h3>

	<table class="table table-striped">
		<caption>Cost table for attending Tutorials/Workshops (limited seats)</caption>
		<thead>
			<tr>
				<th scope="col">Description</th>
				<th scope="col">MX</th>
				<th scope="col">USD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Professionals </td>
				<td><span class="fst-italic fw-light">Pending</span></td>
				<td><span class="fst-italic fw-light">Pending</span></td>
			</tr>
			<tr>
				<td>students</td>
				<td><span class="fst-italic fw-light">Pending</span></td>
				<td><span class="fst-italic fw-light">Pending</span></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td span="3"><strong>Note:</strong> Conference registration is a prerequisite for Tutorial and Workshop registration.</td>
			</tr>
		</tfoot>
	</table>

	<h3 class="">About author registration</h3>

	<ol>
		<li>
			For publications with at least one professional author
			<ol type="a">
				<li>Each paper to be presented must have at least one professional author registered.</li>
				<li>If multiple papers are associated with the same professional author, then for each additional publication, the registered author must pay (cancel) the publication fee, or alternatively, another professional author must register.</li>
			</ol>
		</li>
		<li>
			For publications where all authors are students
			<ol type="a">
				<li>Each paper to be presented must have at least one author registered.</li>
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
                        <a href="https://true-werewolf-eternal.ngrok-free.app/" class="btn btn-lg  bg-gradient-yellow  btn-round">
                          {{ $t("register.register_button") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
	-->
</template>