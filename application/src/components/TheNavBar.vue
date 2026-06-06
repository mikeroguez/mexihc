<script>
	import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
	import Tr from '@/i18n/translation'
	import { callMilestones } from '@/data/callMilestones'
	import { RouterLink } from 'vue-router';

	const getLocalDateKey = () => {
		const now = new Date()
		const year = now.getFullYear()
		const month = String(now.getMonth() + 1).padStart(2, '0')
		const day = String(now.getDate()).padStart(2, '0')
		return `${year}-${month}-${day}`
	}

	export default {
		components: { LanguageSwitcher, RouterLink },
		data() {
			return {
				isScrolled: false,
				isMenuOpen: false,
				transitionPhase: '',
				transitionTimeout: null,
				navigationCollapseEl: null,
				dateRefreshTimer: null,
				todayKey: getLocalDateKey()
			}
		},
		mounted() {
			this.onScroll()
			this.dateRefreshTimer = window.setInterval(() => {
				this.todayKey = this.getLocalDateKey()
			}, 60 * 1000)
			window.addEventListener('scroll', this.onScroll, { passive: true })
			this.navigationCollapseEl = document.getElementById('navigation')
			if (this.navigationCollapseEl) {
				this.navigationCollapseEl.addEventListener('show.bs.collapse', this.onMenuShow)
				this.navigationCollapseEl.addEventListener('hidden.bs.collapse', this.onMenuHide)
			}
		},
		beforeUnmount() {
			window.removeEventListener('scroll', this.onScroll)
			if (this.transitionTimeout) {
				clearTimeout(this.transitionTimeout)
			}
			if (this.dateRefreshTimer) {
				clearInterval(this.dateRefreshTimer)
			}
			if (this.navigationCollapseEl) {
				this.navigationCollapseEl.removeEventListener('show.bs.collapse', this.onMenuShow)
				this.navigationCollapseEl.removeEventListener('hidden.bs.collapse', this.onMenuHide)
			}
		},
		methods: {
			getLocalDateKey() {
				return getLocalDateKey()
			},
			getNextMilestone(call) {
				return call.milestones.find((milestone) => milestone.date >= this.todayKey) || null
			},
			getMilestoneLabel(milestone) {
				const locale = this.$i18n.locale === 'es' ? 'es' : 'en'
				return milestone.labels[locale]
			},
			formatMilestoneDate(dateKey) {
				const locale = this.$i18n.locale === 'es' ? 'es-MX' : 'en-US'
				return new Intl.DateTimeFormat(locale, {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				}).format(new Date(`${dateKey}T12:00:00`))
			},
			onMenuShow() {
				this.isMenuOpen = true
			},
			onMenuHide() {
				this.isMenuOpen = false
			},
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
					'call-for-workshops',
					'call-for-workshops-and-tutorials',
					'student-design-competition',
					'graduate-colloquium',
					'accessibility-recommendations-for-authors',
					'calls-for-accepted-workshops',
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
				if (this.isMenuOpen) {
					if (this.transitionTimeout) {
						clearTimeout(this.transitionTimeout)
						this.transitionTimeout = null
					}
					this.transitionPhase = ''
					this.isScrolled = nextIsScrolled
					return
				}
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
			},
		},
		setup() {
			const baseUrl = import.meta.env.BASE_URL
			return { Tr, baseUrl, callMilestones }
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
				'is-menu-open': isMenuOpen,
				'is-detaching': transitionPhase === 'detaching' && !isMenuOpen,
				'is-attaching': transitionPhase === 'attaching' && !isMenuOpen,
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
							<img :src="isScrolled ? `${baseUrl}assets/img/logos/logo-medium-white.svg` : `${baseUrl}assets/img/logos/logo-medium.svg`" height="25" alt="MexIHC 2026">
						</RouterLink>

						<button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
							data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
							:aria-label="$t('nav.toggle_navigation')">
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
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mexihc-calls-menu mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown1">
										
										<li v-for="call in callMilestones" :key="call.key">
											<RouterLink
												:to="Tr.i18nRoute({ name: call.routeName })"
												class="dropdown-item border-radius-md"
												:class="{ 'active-submenu': isRoute(call.routeName) }"
											>
												<div class="d-flex">
													<div>
														<span class="fs-6 dropdown-header text-dark font-weight-bolder d-flex align-items-center p-0 text-wrap">
															{{ $t(call.titleKey) }}
														</span>
														<template v-if="getNextMilestone(call)">
															<span class="mexihc-milestone-label text-sm text-dark text-wrap">
																{{ getMilestoneLabel(getNextMilestone(call)) }}:
															</span>
															<span class="text-sm text-dark text-wrap mexihc-deadline-change">
																<template v-if="getNextMilestone(call).previousDates?.length">
																	<span class="mexihc-deadline-badge">
																		{{ $i18n.locale === 'es' ? 'Extendida' : 'Extended' }}
																	</span>
																	<span
																v-for="oldDate in getNextMilestone(call).previousDates"
																:key="oldDate"
																class="mexihc-deadline-old"
																>
																	{{ formatMilestoneDate(oldDate) }}
																</span>
															</template>
																<span class="mexihc-deadline-new">
																	{{ formatMilestoneDate(getNextMilestone(call).date) }}
																</span>
															</span>
														</template>
														<span v-else class="text-sm text-dark text-wrap">
															{{ $i18n.locale === 'es' ? 'Etapas finalizadas' : 'All stages completed' }}
														</span>
													</div>
												</div>
										</RouterLink>
									</li>
									<li class="mexihc-accessibility-menu-item">
										<RouterLink
											:to="Tr.i18nRoute({ name: 'accessibility-recommendations-for-authors' })"
											class="dropdown-item border-radius-md"
											:class="{ 'active-submenu': isRoute('accessibility-recommendations-for-authors') }"
										>
											<span class="fs-6 dropdown-header text-dark font-weight-bolder p-0 text-wrap">
												{{ $t('nav.accessibility_for_autors') }}
											</span>
											<span class="text-sm text-dark text-wrap">
												{{ $t('nav.accessibility_for_autors_message') }}
											</span>
										</RouterLink>
									</li>

									</ul>
								</li>
							<li class="nav-item mx-2">
								<RouterLink
									:to="Tr.i18nRoute({ name: 'keynote-speakers' })"
									class="nav-link ps-2 d-flex cursor-pointer align-items-center"
									:class="{ 'active-section': isRoute('keynote-speakers') }"
								>
									{{ $t("nav.keynotes") }}
								</RouterLink>
							</li>
							<li class="nav-item mx-2">
								<RouterLink
										:to="Tr.i18nRoute({ name: 'organizers' })"
										class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										:class="{ 'active-section': isRoute('organizers') }"
									>
										{{ $t("nav.organizers") }}
									</RouterLink>
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
	transition: background-color 220ms ease, border-color 220ms ease, border-radius 220ms ease;
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
		url('/assets/img/shapes/waves-white.svg'),
		linear-gradient(90deg, #870058 0%, #A3326A 100%) !important;
	background-repeat: repeat, repeat, no-repeat;
	background-position: center, 180px center, center;
	background-size: 300px auto, 300px auto, cover;
	background-blend-mode: screen, screen, normal;
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
	opacity: 1 !important;
	border-bottom: 2px solid #870058 !important;
	padding-bottom: 0.15rem;
}

.navbar .locale-link {
	font-weight: 300 !important;
	opacity: 0.8;
}

.navbar .icon-language.nav-link {
	cursor: default;
	pointer-events: none;
	border-bottom: 2px solid transparent !important;
}

.navbar .icon-language.nav-link:hover,
.navbar .icon-language.nav-link:focus {
	color: inherit !important;
	border-bottom-color: transparent !important;
}

.navbar .mexihc-navbar-utility {
	display: flex;
	align-items: center;
	gap: 0.7rem;
}

.navbar .mexihc-navbar-utility-item {
	display: flex;
	align-items: center;
}

.navbar .mexihc-navbar-language-cluster {
	gap: 0.1rem;
}

.navbar .mexihc-navbar-utility-link {
	padding-left: 0.38rem !important;
	padding-right: 0.38rem !important;
	padding-top: 0.2rem !important;
	padding-bottom: 0.15rem !important;
	line-height: 1.1;
}

.navbar .mexihc-navbar-utility-link i,
.navbar .mexihc-navbar-utility-icon svg {
	font-size: 0.78rem;
}

.navbar .mexihc-navbar-utility-link i {
	margin-right: 0.22rem;
}

.navbar .mexihc-navbar-utility-icon {
	padding-left: 0.05rem !important;
	padding-right: 0.12rem !important;
	padding-top: 0.2rem !important;
	padding-bottom: 0.15rem !important;
	opacity: 0.72;
}

.navbar .mexihc-navbar-locale-link {
	min-width: auto;
	text-align: left;
	letter-spacing: 0.01em;
	padding-left: 0.12rem !important;
	padding-right: 0.12rem !important;
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
.mexihc-navbar.is-scrolled .navbar-toggler {
	color: #F0EFEC !important;
	fill: #F0EFEC !important;
}

.mexihc-navbar.is-scrolled .navbar-toggler .navbar-toggler-bar {
	background: #F0EFEC !important;
}

.mexihc-navbar.is-scrolled .nav-link .arrow {
	filter: brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(173%) hue-rotate(357deg) brightness(99%) contrast(89%);
}

.mexihc-navbar.is-scrolled .nav-link.router-link-active,
.mexihc-navbar.is-scrolled .nav-link.router-link-exact-active,
.mexihc-navbar.is-scrolled .nav-link:hover {
	color: #F0EFEC !important;
	border-bottom-color: #F0EFEC !important;
}

.mexihc-navbar.is-scrolled .nav-link.active-section {
	border-bottom-color: #F0EFEC !important;
}

.mexihc-navbar.is-scrolled .locale-link.active,
.mexihc-navbar.is-scrolled .locale-link.router-link-active,
.mexihc-navbar.is-scrolled .locale-link.router-link-exact-active {
	border-bottom-color: #F0EFEC !important;
}

.mexihc-navbar.is-scrolled .dropdown-menu {
	background-color: #223048 !important;
	border-color: rgba(240, 239, 236, 0.18) !important;
}

.mexihc-navbar.is-scrolled .dropdown-item,
.mexihc-navbar.is-scrolled .dropdown-item .dropdown-header,
.mexihc-navbar.is-scrolled .dropdown-item .text-dark,
.mexihc-navbar.is-scrolled .dropdown-item .text-sm,
.mexihc-navbar.is-scrolled .dropdown-item .font-italic {
	color: #F0EFEC !important;
}

.mexihc-navbar.is-scrolled .dropdown-item.active-submenu,
.mexihc-navbar.is-scrolled .dropdown-item.router-link-active,
.mexihc-navbar.is-scrolled .dropdown-item.router-link-exact-active {
	background: rgba(240, 239, 236, 0.18) !important;
}

.mexihc-navbar.is-scrolled .dropdown-item:hover,
.mexihc-navbar.is-scrolled .dropdown-item:focus-visible {
	background: rgba(240, 239, 236, 0.92) !important;
	color: #223048 !important;
}

.mexihc-navbar.is-scrolled .dropdown-item:hover .dropdown-header,
.mexihc-navbar.is-scrolled .dropdown-item:hover .text-dark,
.mexihc-navbar.is-scrolled .dropdown-item:hover .text-sm,
.mexihc-navbar.is-scrolled .dropdown-item:hover .font-italic,
.mexihc-navbar.is-scrolled .dropdown-item:focus-visible .dropdown-header,
.mexihc-navbar.is-scrolled .dropdown-item:focus-visible .text-dark,
.mexihc-navbar.is-scrolled .dropdown-item:focus-visible .text-sm,
.mexihc-navbar.is-scrolled .dropdown-item:focus-visible .font-italic {
	color: #223048 !important;
}

.mexihc-navbar.is-scrolled .dropdown-item.active-submenu .dropdown-header,
.mexihc-navbar.is-scrolled .dropdown-item.router-link-active .dropdown-header,
.mexihc-navbar.is-scrolled .dropdown-item.router-link-exact-active .dropdown-header {
	color: #F0EFEC !important;
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

.mexihc-deadline-change {
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.35rem;
}

.mexihc-milestone-label {
	display: inline;
	margin-top: 0.1rem;
	margin-right: 0.25rem;
}

.mexihc-deadline-badge {
	display: inline-flex;
	align-items: center;
	padding: 0.08rem 0.45rem;
	border-radius: 999px;
	border: 1px solid rgba(135, 0, 88, 0.26);
	font-size: 0.67rem;
	font-style: normal;
	font-weight: 800;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #6f0049;
	background: #f7d7ea;
	box-shadow: 0 1px 2px rgba(1, 22, 56, 0.08);
}

.mexihc-deadline-old {
	text-decoration: line-through;
	opacity: 0.7;
}

.mexihc-deadline-new {
	font-style: inherit;
	font-weight: 400;
}

.mexihc-navbar.is-scrolled .mexihc-deadline-badge {
	border-color: rgba(240, 239, 236, 0.32);
	color: #223048;
	background: #f0efec;
	box-shadow: none;
}

.mexihc-accessibility-menu-item {
	margin-top: 0.35rem;
	padding-top: 0.45rem;
	border-top: 1px solid rgba(1, 22, 56, 0.12);
}

.mexihc-navbar.is-scrolled .mexihc-accessibility-menu-item {
	border-top-color: rgba(240, 239, 236, 0.2);
}

@media (min-width: 992px) {
	.mexihc-calls-menu {
		width: min(36rem, calc(100vw - 2rem));
		max-height: calc(100dvh - 7rem);
		overflow-y: auto;
		overscroll-behavior: contain;
		scrollbar-gutter: stable;
	}

	.mexihc-calls-menu .dropdown-item {
		padding-top: 0.38rem;
		padding-bottom: 0.38rem;
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

	.mexihc-navbar.is-scrolled.is-menu-open {
		border-radius: 1rem;
	}
}
</style>
