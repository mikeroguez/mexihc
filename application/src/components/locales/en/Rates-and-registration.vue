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
					<td>Workshop paper up to 6 pages, with journal publication</td>
					<td><span class="fst-italic fw-light">$1,600 MXN</span></td>
				</tr>
				<tr>
					<td>2-page workshop position paper, with website publication</td>
					<td><span class="fst-italic fw-light">$600 MXN</span></td>
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
			To register for the event, please follow these steps:
		</p>
		<ol>
			<li>
				Complete the registration form with your information using the
				<a class="uline" href="https://conferencias.app/" target="_blank" rel="noopener noreferrer"
					aria-label="Registration System (opens in a new tab)">Registration System</a>.
				The system will provide you with a <strong>Registration Code</strong>, which you will use to make your
				payment. Please keep this code.
			</li>
			<li>Make the payment using the bank information provided below and your Registration Code.</li>
			<li>
				For tax purposes, payments made from within Mexico must be made by electronic bank transfer or
				bank-counter deposit. For payments made from abroad, PayPal and credit card payment options are
				available.
			</li>
			<li>
				If you made your payment by bank-counter deposit, please send a copy of the payment receipt to
				<a class="uline" href="mailto:registration.2026@mexihc.org">registration.2026@mexihc.org</a>,
				along with your Registration Code.
			</li>
			<li>
				If you require a tax invoice, you can request one through the Registration System (upper-right corner).
				The invoice will be sent to you by email.
			</li>
		</ol>

		<p>
			<strong>Deadline for author registration payment:</strong> September 25, 2026.
			If you need more time, please contact us at
			<a class="uline" href="mailto:registration.2026@mexihc.org">registration.2026@mexihc.org</a>.
		</p>

		<h3 class="h5">Bank information for payments within Mexico</h3>
		<div class="table-responsive">
			<table class="table table-striped">
				<caption>Bank information for transfer or bank-counter deposit</caption>
				<tbody>
					<tr>
						<th scope="row">Account Holder</th>
						<td>Asociación Mexicana de Interacción Humano Computadora AC</td>
					</tr>
					<tr>
						<th scope="row">Bank</th>
						<td>Banco del Bajío</td>
					</tr>
					<tr>
						<th scope="row">CLABE</th>
						<td>030767900000120128</td>
					</tr>
					<tr>
						<th scope="row">Account Number</th>
						<td>88823590201</td>
					</tr>
					<tr>
						<th scope="row">Payment Reference</th>
						<td>&lt;Registration Code&gt;</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="d-flex flex-wrap gap-2">
			<a href="https://conferencias.app/" target="_blank" rel="noopener noreferrer"
				class="btn bg-gradient-primary btn-round" aria-label="Go to the Registration System (opens in a new tab)">
				Go to the Registration System
			</a>
			<RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="btn mexihc-action-link mexihc-action-link-muted btn-round">
				View first steps
			</RouterLink>
		</div>
	</section>
</template>
