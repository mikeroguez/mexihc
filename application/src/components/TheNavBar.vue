<script>
	import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
	import Tr from '@/i18n/translation'
	import { RouterLink } from 'vue-router';

	export default {
		components: { LanguageSwitcher, RouterLink },
		data() {
			return {
				isScrolled: false,
				transitionPhase: '',
				transitionTimeout: null
			}
		},
		mounted() {
			this.onScroll()
			window.addEventListener('scroll', this.onScroll, { passive: true })
		},
		beforeUnmount() {
			window.removeEventListener('scroll', this.onScroll)
			if (this.transitionTimeout) {
				clearTimeout(this.transitionTimeout)
			}
		},
		methods: {
			isRouteIn(routeNames) {
				return routeNames.includes(this.$route.name)
			},
			isRoute(routeName) {
				return this.$route.name === routeName
			},
			isCallsSectionActive() {
				return this.isRouteIn([
					'call-for-participation',
					'call-for-papers',
					'call-for-posters',
					'call-for-workshops-and-tutorials',
					'student-design-competition',
					'graduate-colloquium',
					'calls-for-accepted-workshops',
					'accessibility-recommendations-for-authors',
				])
			},
			isAttendeesSectionActive() {
				return this.isRouteIn([
					'getting-started',
					'accepted-tutorials',
					'registration',
				])
			},
			isProgramSectionActive() {
				return this.isRouteIn([
					'keynote-speakers',
					'schedule',
					'accepted-papers',
				])
			},
			onScroll() {
				const y = window.scrollY || window.pageYOffset || 0
				const enterThreshold = 24
				const exitThreshold = 8
				const nextIsScrolled = this.isScrolled ? y > exitThreshold : y > enterThreshold
				if (nextIsScrolled !== this.isScrolled) {
					this.transitionPhase = nextIsScrolled ? 'detaching' : 'attaching'
					if (this.transitionTimeout) {
						clearTimeout(this.transitionTimeout)
					}
					this.transitionTimeout = setTimeout(() => {
						this.transitionPhase = ''
						this.transitionTimeout = null
					}, 320)
				}
				this.isScrolled = nextIsScrolled
			}
		},
		setup() {
			return { Tr }
		}
	}
</script>

<template>
	<!-- Navbar -->
	<div class="mexihc-navbar-shell">
		<nav
			class="navbar navbar-expand-lg blur z-index-fixed navbar-color-on-scroll justify-content-between mexihc-navbar"
			:class="{
				'is-scrolled': isScrolled,
				'is-detaching': transitionPhase === 'detaching',
				'is-attaching': transitionPhase === 'attaching',
				'bg-gradient-dark': isScrolled
			}"
		>
					<div class="container-fluid">
						<RouterLink :to="Tr.i18nRoute({ name: 'home'})" 
							class="navbar-brand font-weight-bolder ms-sm-3"
							rel="tooltip"
							title="XI Mexican Conference on Human-Computer Interaction" 
							data-placement="bottom"
							tabindex="0"
						>
							<img src="/assets/img/logos/mexihc2026.svg" height="25" alt="">
							MexIHC 2026			
						</RouterLink>

						<button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
							data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon mt-2">
								<span class="navbar-toggler-bar bar1"></span>
								<span class="navbar-toggler-bar bar2"></span>
								<span class="navbar-toggler-bar bar3"></span>
							</span>
						</button>
						<div class="collapse navbar-collapse pt-3 pb-2 py-lg-0" id="navigation">
							<ul class="navbar-nav navbar-nav-hover w-100">

								<li class="nav-item dropdown dropdown-hover mx-2">
									<RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })"
										class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										:class="{ 'active-section': isCallsSectionActive() }"
										id="navbarDropdown1" role="button" data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{{ $t("nav.for_authors") }}
										&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
									</RouterLink>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown1">
										
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'call-for-papers' })" 
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute('call-for-papers') }"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0 text-wrap">
															{{ $t("nav.cfp") }}
														</span>
														<span class="text-sm font-italic text-dark text-wrap">
															{{ $t("about.closed") }}
														</span>
													</div>
												</div>
											</RouterLink>											
										</li>
										<!--
										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'call-for-posters' })" 
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute('call-for-posters') }"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.cpt") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("about.closed") }}
														</span>
													</div>
												</div>
											</RouterLink>											
										</li>

										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'call-for-workshops-and-tutorials' })" 
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute('call-for-workshops-and-tutorials') }"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0 text-wrap">
															{{ $t("nav.cwt") }}
														</span>
														<span class="text-sm font-italic text-dark text-wrap">
															{{ $t("about.closed") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>

										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'student-design-competition' })" 
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute('student-design-competition') }"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															{{ $t("nav.sdc") }}
														</span>
														<span class="text-sm text-dark">
															{{ $t("about.closed") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>

										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'graduate-colloquium' })" 
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute('graduate-colloquium') }"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0 text-wrap">
															{{ $t("nav.cgc") }}
														</span>
														<span class="text-sm text-dark text-wrap">
															{{ $t("about.closed") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>

										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'calls-for-accepted-workshops' })" 
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute('calls-for-accepted-workshops') }"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0 text-wrap">
															{{ $t("nav.workshop_calls") }}
														</span>
														<span class="text-sm text-dark text-wrap">
															{{ $t("nav.workshop_calls_message") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>

										<li>
											<RouterLink :to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })" 
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute('accessibility-recommendations-for-authors') }"
											>
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0 text-wrap">
															{{ $t("nav.accessibility_for_autors") }}
														</span>
														<span class="text-sm text-dark text-wrap">
															{{ $t("nav.accessibility_for_autors_message") }}
														</span>
													</div>
												</div>
											</RouterLink>
										</li>
										-->
									</ul>
								</li>
							</ul>
							<LanguageSwitcher/>
						</div>
					</div>
		</nav>
	</div>
	<!-- End Navbar -->
</template>

<style>
.mexihc-navbar-shell {
	position: sticky;
	top: 0;
	z-index: 1030;
	height: 0;
}

.mexihc-navbar {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	margin: 0 auto;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	border-radius: 0;
	border: 1px solid rgba(1, 22, 56, 0.08);
	box-shadow: none !important;
	background: rgba(240, 239, 236, 0.98) !important;
	transform: translateY(0);
	transition: background-color 220ms ease, border-color 220ms ease;
}

.mexihc-navbar .container-fluid {
	width: 100%;
	max-width: 1240px;
	margin-left: auto;
	margin-right: auto;
}

.mexihc-navbar.is-scrolled {
	top: 0;
	width: min(1280px, calc(100% - 2rem));
	margin: 0 auto;
	border: 0;
	border-radius: 999px;
	box-shadow: 0 10px 26px rgba(1, 22, 56, 0.28) !important;
	background-color: #011638 !important;
	transform: translateY(16px);
}

.mexihc-navbar.is-scrolled.bg-gradient-dark {
	background-image:
		url('/assets/img/shapes/waves-white.svg'),
		linear-gradient(90deg, #011638 0%, #194a8a 100%) !important;
	background-repeat: repeat, no-repeat;
	background-position: center, center;
	background-size: 520px auto, cover;
}

.navbar .nav-link.active-section {
	border-bottom-color: #870058 !important;
}

.navbar .dropdown-item.active-submenu,
.navbar .dropdown-item.router-link-active,
.navbar .dropdown-item.router-link-exact-active {
	background: rgba(135, 0, 88, 0.1) !important;
}

.navbar .dropdown-item.active-submenu .dropdown-header,
.navbar .dropdown-item.router-link-active .dropdown-header,
.navbar .dropdown-item.router-link-exact-active .dropdown-header {
	color: #870058 !important;
}

.navbar .locale-link.active,
.navbar .locale-link.router-link-active,
.navbar .locale-link.router-link-exact-active {
	font-weight: 700 !important;
	border-bottom: 2px solid #870058 !important;
}

.mexihc-navbar.is-detaching {
	animation: mexihc-nav-detach 280ms ease both;
}

.mexihc-navbar.is-attaching {
	animation: mexihc-nav-attach 280ms ease both;
}

.mexihc-navbar.is-scrolled .navbar-brand,
.mexihc-navbar.is-scrolled.navbar .navbar-brand,
.mexihc-navbar.is-scrolled .nav-link,
.mexihc-navbar.is-scrolled.navbar .nav-link,
.mexihc-navbar.is-scrolled .nav-link svg,
.mexihc-navbar.is-scrolled .navbar-toggler,
.mexihc-navbar.is-scrolled .navbar-toggler .navbar-toggler-bar {
	color: #F0EFEC !important;
	fill: #F0EFEC !important;
}

.mexihc-navbar.is-scrolled .nav-link .arrow {
	filter: brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(173%) hue-rotate(357deg) brightness(99%) contrast(89%);
}

.mexihc-navbar.is-scrolled .nav-link.router-link-active,
.mexihc-navbar.is-scrolled .nav-link.router-link-exact-active,
.mexihc-navbar.is-scrolled .nav-link:hover {
	color: #F0EFEC !important;
	border-bottom-color: #870058 !important;
}

@keyframes mexihc-nav-detach {
	from {
		width: 100%;
		top: 0;
		transform: translateY(0);
		border-radius: 0;
		box-shadow: none;
	}
	to {
		width: min(1280px, calc(100% - 2rem));
		top: 0;
		transform: translateY(16px);
		border-radius: 999px;
		box-shadow: 0 10px 26px rgba(1, 22, 56, 0.28);
	}
}

@keyframes mexihc-nav-attach {
	from {
		width: min(1280px, calc(100% - 2rem));
		top: 0;
		transform: translateY(16px);
		border-radius: 999px;
		box-shadow: 0 10px 26px rgba(1, 22, 56, 0.28);
	}
	to {
		width: 100%;
		top: 0;
		transform: translateY(0);
		border-radius: 0;
		box-shadow: none;
	}
}

@media (max-width: 991.98px) {
	.mexihc-navbar {
		width: 100%;
		margin: 0 auto;
		border-radius: 0;
		box-shadow: none !important;
	}

	.mexihc-navbar.is-scrolled {
		width: calc(100% - 1rem);
		top: 0;
		transform: translateY(16px);
		border-radius: 999px;
		box-shadow: 0 8px 18px rgba(1, 22, 56, 0.16) !important;
	}
}
</style>
