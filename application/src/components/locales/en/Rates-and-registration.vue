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
			{ label: 'Authors', to: Tr.i18nRoute({ name: 'registration', hash: '#authors' }) },
			{ label: 'Attendees', to: Tr.i18nRoute({ name: 'registration', hash: '#attendees' }) },
			{ label: 'Tutorials', to: Tr.i18nRoute({ name: 'registration', hash: '#tutorials' }) },
			{ label: 'Registration and payment', to: Tr.i18nRoute({ name: 'registration', hash: '#payment' }) }
		]"
	/>

	<p>
		These are the confirmed rates for MexIHC 2026. Review the category that matches your participation before
		starting registration.
	</p>
	<p><strong>Note:</strong> The gala dinner is not included in these rates.</p>

	<section id="authors" class="mt-5">
		<h2>Authors</h2>

		<table class="table table-striped">
			<caption>Cost table for authors</caption>
			<thead>
				<tr>
					<th scope="col">Description</th>
					<th scope="col">Cost</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Full paper or short paper</td>
					<td><span class="fst-italic fw-light">$4,000 MXN</span></td>
				</tr>
				<tr>
					<td>Additional paper (same presenter)</td>
					<td><span class="fst-italic fw-light">$1,500 MXN</span></td>
				</tr>
				<tr>
					<td>Workshop paper</td>
					<td><span class="fst-italic fw-light">$3,000 MXN</span></td>
				</tr>
				<tr>
					<td>Postgraduate consortium</td>
					<td><span class="fst-italic fw-light">$1,000 MXN</span></td>
				</tr>
				<tr>
					<td>Poster</td>
					<td><span class="fst-italic fw-light">$1,600 MXN</span></td>
				</tr>
				<tr>
					<td>Student Design Competition</td>
					<td>
						<span class="fst-italic fw-light">Professor: $800 MXN</span><br>
						<span class="fst-italic fw-light">Individual student: $500 MXN</span><br>
						<span class="fst-italic fw-light">Team rate (2+ students): $1,000 MXN per team</span>
					</td>
				</tr>
			</tbody>
		</table>

		<h3 class="h5">Author registration includes:</h3>
		<ul>
			<li>Access to keynotes, conference sessions, SDC, posters and welcome reception.</li>
			<li>AMexIHC membership.</li>
		</ul>
	</section>

	<section id="attendees" class="mt-5">
		<h2>Attendees</h2>

		<table class="table table-striped">
			<caption>Cost table for attendees</caption>
			<thead>
				<tr>
					<th scope="col">Description</th>
					<th scope="col">Cost</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>General access (Professor / Student / General)</td>
					<td><span class="fst-italic fw-light">$0 MXN</span></td>
				</tr>
				<tr>
					<td>General access with kit and certificate</td>
					<td><span class="fst-italic fw-light">$500 MXN</span></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2"><strong>Note:</strong> Limited seats</td>
				</tr>
			</tfoot>
		</table>

		<h3 class="h5">Attendee registration includes:</h3>
		<ul>
			<li>Access to keynotes, conference sessions, SDC and posters.</li>
		</ul>
	</section>

	<section id="tutorials" class="mt-5">
		<h2>Tutorials</h2>

		<table class="table table-striped">
			<caption>Cost table for tutorials</caption>
			<thead>
				<tr>
					<th scope="col">Description</th>
					<th scope="col">Cost</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Registered authors</td>
					<td><span class="fst-italic fw-light">$450 MXN</span></td>
				</tr>
				<tr>
					<td>Postgraduate consortium participants</td>
					<td><span class="fst-italic fw-light">$0 MXN</span></td>
				</tr>
				<tr>
					<td>Students from host institutions</td>
					<td><span class="fst-italic fw-light">$100 MXN</span></td>
				</tr>
				<tr>
					<td>General students</td>
					<td><span class="fst-italic fw-light">$200 MXN</span></td>
				</tr>
				<tr>
					<td>Tutorial only</td>
					<td><span class="fst-italic fw-light">$800 MXN</span></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2"><strong>Note:</strong> Limited seats</td>
				</tr>
			</tfoot>
		</table>
	</section>

	<section id="payment" class="mt-5">
		<h2>Registration and Payment</h2>
		<p>
			The official registration form and final payment instructions will be published soon. Bank account details are
			not shown until they are confirmed for MexIHC 2026.
		</p>
		<div class="d-flex flex-wrap gap-2">
			<RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="btn bg-gradient-primary btn-round">
				View first steps
			</RouterLink>
			<button class="btn btn-secondary disabled btn-round" type="button" disabled aria-disabled="true">
				Form pending
			</button>
		</div>
	</section>
</template>
