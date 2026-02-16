# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2026.1.3] - 2026-02-16

### Changed

- Mobile navbar behavior refined for scrolled state: when the collapse menu is open it now keeps a rounded-rectangle shape instead of becoming circular.
- Mobile navbar close animation timing adjusted to prevent radius flicker during collapse.
- Navbar toggler icon color (hamburger and close state) in guinda/scrolled mode updated to `#F0EFEC` for better contrast.
- In guinda/scrolled mode, submenu text and active submenu state were updated to use light colors and a translucent light highlight.

## [2026.1.2] - 2026-02-16

### Added

- Official MexIHC logo asset pack added (multiple SVG variants) and new decorative line shape asset.
- New organizer image assets added, including Mayra Barrera and an updated `nophoto` placeholder.
- New `.env.github` environment file for GitHub Pages base-path configuration.

### Changed

- Jumbotron, navbar, and footer now use the official MexIHC logo assets.
- Build/deploy configuration now uses dynamic base path by environment (`github` / `production`) through Vite.
- Social metadata and RSS feed content/images were refreshed in `index.html` and RSS XML files.
- Organizers and localized Call for Papers pages (`es`, `en`, `pt`) were updated with current photo references.

### Removed

- Legacy logo asset `application/public/assets/img/logos/mexihc2024.svg` was removed.

## [2026.1.1] - 2026-02-16

### Changed

- Home milestone cards now disable navigation for items marked as `Coming soon` (registration is no longer clickable).
- Jumbotron post-it RSS link now uses the Font Awesome RSS icon in all locales (`es`, `en`, `pt`) for visual consistency with navbar icons.
- Call for Papers EasyChair submission URL (`https://easychair.org/conferences/?conf=mexihc2026`) now uses the shared underline/hover link style (`uline`) in Spanish and English pages.
- Call for Papers AMexIHC journal publication URL (`https://revistaaihc.mx/`) now uses the shared underline/hover link style (`uline`) in Spanish and English pages.

## [2026.1.0] - 2026-02-15

### Added

- RSS feeds integration for site content discovery.
- In-page navigation panel for calls and organizers, including a dynamic next-deadline widget.
- Accessible floating back-to-anchors control for long pages.

### Changed

- Full UI refresh across pages, including localized content updates.
- Home page status table replaced with milestone cards, with i18n integration and reference captures.
- Calls list and home milestone widget styles unified for visual and UX consistency.
- Footer layout and presentation refined.
- Breadcrumbs visual treatment and structure improved.
- 2026 branding and social metadata aligned across header, navbar, footer, and share links.
- Removed redundant organizers back-to-top links after introducing shared floating navigation.

### Fixed

- Navbar detached gradient texture visibility improved without changing the base color palette.

## [2026.0.0.2] - 2026-02-14

### Added

- AMexIHC icon in footer (`application/public/assets/img/logos/amexihc.svg`) and footer update to display it.

## [2026.0.0.1] - 2026-02-14

### Added

- MexIHC 2026 visual refresh across home and shared UI (hero, header, backgrounds, navbar behavior and footer links).
- Organizers navigation entry in header and footer.
- Updated assets for 2026 branding (banner, logos and venue/media resources).

### Changed

- CFP call-to-action in jumbotron now points to `Call for Papers`.
- Home status table updated:
  - `Call for participation` -> `Open`
  - `Registration call` -> `Coming soon` (no link)
- Calls table now shows only `Call for Papers` as published; other calls are hidden.
- CFP content updated for 2026:
  - New key dates (submission, notification, camera-ready, conference dates)
  - EasyChair submission URL updated to `https://easychair.org/conferences/?conf=mexihc2026`
  - Program Chairs aligned with Organizers (Adriana L. Iñiguez-Carrillo, Mayra Donaji Barrera-Machuca, Marcela D. Rodríguez).
- Organizers page (General Committee section) reduced to the published 2026 committee members and labels.
- Navigation CFP badge/message updated with the current deadline.

### Fixed

- `text-primary text-gradient` readability by restoring visible text color where gradient styles were making text appear transparent.
- Language switcher emphasis in navbar:
  - selected language shown bold
  - non-selected language shown light
  - language icon no longer has hover interaction.

## [2024.0.0.1] - 2024-04-19

### Added

- Landing page content
- Call for participation page
- Call for workshops and tutorials page
- Organizers page

## [2024.0.0.2] - 2024-04-23

### Added

- Call for papers page

### Changed

- Routing on sever for multilingual system

## [2024.0.0.3] - 2024-04-29

### Added

- Call for Graduate Colloquium
- Cookies consent

### Changed

- Improvements on routing, media-files, responsive design and styling

## [2024.0.0.4] - 2024-04-29

### Changed

- Improvements on styling for consent cookies and responsive design on navigation

## [2024.0.0.5] - 2024-05-17

### Added

- Call for papers page

## [2024.0.0.6] - 2024-05-2

### Added

- Call for SDC
- Rates & registration
- Getting started

## [2024.0.0.7] - 2024-05-27

### Changed

- Workshop & Tutorials deadline change

## [2024.0.0.8] - 2024-05-28

### Changed

- Texture change waves to cactus

## [2024.0.0.9] - 2024-06-06

### Changed

- Fix paga titles
- Change aihc journal link
- Change SDC template link

## [2024.0.0.10] - 2024-07-02

### Changed

- Rates and Registration update
- CFP Closed
- Table caption CSS updated

## [2024.0.0.11] - 2024-07-03

### Added

- Call to action and links to registration form
- Adds Payment information on Getting Started section

### Changed

- CFP & CFWT closed on Navigation

## [2024.0.0.12] - 2024-07-03

### Changed

- Typo in about section
- Change in the registration email

## [2024.0.0.13] - 2024-08-07

### Changed

- CFP & CGQ extension on deadline

## [2024.0.0.14] - 2024-08-19

### Changed

- SDC extension on deadline

## [2024.0.0.15] - 2024-08-19

### Changed

- Update text on Call for Colloquium page

## [2024.0.0.16] - 2024-08-22

### Changed

- Update text Accepted Tutorials

## [2024.0.0.17] - 2024-09-30

### Added

- Sponsorship section
- Hotel information
- Locations Maps

### Changed

- Close calls
- Quit link to registration form

## [2024.0.0.18] - 2024-10-1

### Changed

- Activate link to registration form

## [2024.0.0.19] - 2024-10-1

### Changed

- Change main CTA to "Getting started to attend!"

## [2024.0.0.20] - 2024-10-1

### Added

- Registration deadline.

## [2024.0.0.21] - 2024-10-3

### Added

- Registration deadline message in jumbotron.

## [2024.0.0.22] - 2024-10-9

### Added

- Adds Program Committee
- Adds Schedule
- add some corrections

## [2024.0.0.23] - 2024-10-15

### Added

- Local chairs

### Changed

- Schedule, adds Industry Day

## [2024.0.0.24] - 2024-10-22

### Added

- Adds Industry Day Schedule

## [2024.0.0.25] - 2024-10-31

### Added

- Dr. Favela's keynote name
- Friday bus schedule change
- Adds Virtual Venues for Industry Day

## [2024.0.0.26] - 2024-10-31

### Changed

- Schedule, changes in the program, swap AI Companions in Ride-Hailing: Enhancing Sense of Safety with Voice Chatbots and Videos de TikTok en la Percepción del Consumidor acerca de la Calidad de Productos y Servicios
