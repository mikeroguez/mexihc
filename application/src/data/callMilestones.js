// When a deadline moves, add the new date and push the old one onto
// `previousDates` — don't add a separate "Actualización: se extendió..."
// paragraph in a Call-for-*.vue page. That prose goes stale the moment
// the *next* milestone passes (see the papers/colloquium pages before
// this fix), while the dated "Fechas importantes" list and the status
// badge above it (driven by InPageNavigationPanel's own `:milestones`
// prop on each page) stay accurate on their own.
export const callMilestones = [
  {
    key: 'cfp',
    titleKey: 'nav.cfp',
    routeName: 'call-for-papers',
    milestones: [
      {
        date: '2026-06-21',
        previousDates: ['2026-06-01', '2026-06-15'],
        labels: { es: 'Fecha límite para envíos', en: 'Submission deadline' },
      },
      {
        date: '2026-08-22',
        labels: { es: 'Notificación de aceptación', en: 'Acceptance notification' },
      },
      {
        date: '2026-09-16',
        labels: { es: 'Versión final', en: 'Camera-ready submission' },
      },
    ],
  },
  {
    key: 'cpt',
    titleKey: 'nav.cpt',
    routeName: 'call-for-posters',
    milestones: [
      {
        date: '2026-09-06',
        previousDates: ['2026-08-30'],
        labels: { es: 'Fecha límite para envíos', en: 'Submission deadline' },
      },
      {
        date: '2026-09-14',
        labels: { es: 'Notificación de aceptación', en: 'Acceptance notification' },
      },
      {
        date: '2026-09-20',
        labels: { es: 'Versión final', en: 'Camera-ready submission' },
      },
    ],
  },
  {
    key: 'cws',
    titleKey: 'nav.cws',
    routeName: 'call-for-workshops',
    milestones: [
      {
        date: '2026-06-08',
        previousDates: ['2026-05-25'],
        labels: { es: 'Fecha límite para propuestas', en: 'Proposal deadline' },
      },
      {
        date: '2026-06-12',
        previousDates: ['2026-05-29'],
        labels: { es: 'Notificación de talleres', en: 'Workshop notification' },
      },
      {
        date: '2026-09-05',
        previousDates: ['2026-08-20', '2026-08-29'],
        labels: { es: 'Fecha límite para envío de artículos en Talleres', en: 'Workshop paper submission deadline' },
      },
      {
        date: '2026-09-09',
        previousDates: ['2026-09-02'],
        labels: { es: 'Notificación de aceptación', en: 'Acceptance notification' },
      },
      {
        date: '2026-09-14',
        labels: { es: 'Camera Ready', en: 'Camera-ready submission' },
      },
    ],
  },
  {
    key: 'cwt',
    titleKey: 'nav.cwt',
    routeName: 'call-for-workshops-and-tutorials',
    milestones: [
      {
        date: '2026-06-01',
        labels: { es: 'Fecha límite para propuestas', en: 'Proposal deadline' },
      },
      {
        date: '2026-08-07',
        labels: { es: 'Notificación de aceptación', en: 'Acceptance notification' },
      },
    ],
  },
  {
    key: 'sdc',
    titleKey: 'nav.sdc',
    routeName: 'student-design-competition',
    milestones: [
      {
        date: '2026-09-06',
        previousDates: ['2026-08-16', '2026-08-30'],
        labels: { es: 'Fecha límite para envíos', en: 'Submission deadline' },
      },
      {
        date: '2026-09-13',
        labels: { es: 'Versión final', en: 'Camera-ready submission' },
      },
    ],
  },
  {
    key: 'cgc',
    titleKey: 'nav.cgc',
    routeName: 'graduate-colloquium',
    milestones: [
      {
        date: '2026-08-16',
        previousDates: ['2026-08-09'],
        labels: { es: 'Fecha límite para envíos', en: 'Submission deadline' },
      },
      {
        date: '2026-09-04',
        labels: { es: 'Notificación de aceptación', en: 'Acceptance notification' },
      },
      {
        date: '2026-09-13',
        labels: { es: 'Versión final', en: 'Camera-ready submission' },
      },
    ],
  },
]
