const timeBlocks = ['09:00 - 13:00', '14:30 - 18:30', '19:00']

const enDays = [
    {
        id: 'tuesday',
        label: 'Day 1: Tuesday, Oct 27',
        shortLabel: 'Tuesday 27',
        venue: 'Venue: UABC',
        blocks: [
            { time: '09:00 - 13:00', items: [] },
            { time: '14:30 - 18:30', items: [
                { text: 'Tutorials', kind: 'author' },
                { text: 'Graduate Colloquium', kind: 'author' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '19:00', items: [] }
        ]
    },
    {
        id: 'wednesday',
        label: 'Day 2: Wednesday, Oct 28',
        shortLabel: 'Wednesday 28',
        venue: 'Venue: UABC / CICESE',
        blocks: [
            { time: '09:00 - 13:00', items: [
                { text: 'Industry Day', kind: 'attendee' },
                { text: 'Workshops', kind: 'author' },
                { text: 'Tutorials', kind: 'author' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '14:30 - 18:30', items: [
                { text: 'Congress Opening', featured: true, kind: 'attendee' },
                { text: 'Keynote: Gillian Hayes', featured: true, kind: 'attendee' },
                { text: 'Main Track presentations', kind: 'author' },
                { text: '[Auditorium - CICESE]', meta: true },
                { text: 'Poster session', kind: 'author' },
                { text: 'Welcome reception', kind: 'attendee' },
                { text: '[SUM - CICESE]', meta: true }
            ] },
            { time: '19:00', items: [] }
        ]
    },
    {
        id: 'thursday',
        label: 'Day 3: Thursday, Oct 29',
        shortLabel: 'Thursday 29',
        venue: 'Venue: UABC / CICESE',
        blocks: [
            { time: '09:00 - 13:00', items: [
                { text: 'Keynote: Roberto Martínez', featured: true, kind: 'attendee' },
                { text: 'Main Track presentations', kind: 'author' },
                { text: 'Student Competition', kind: 'author' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '14:30 - 18:30', items: [
                { text: 'Main Track presentations', kind: 'author' },
                { text: '[Auditorium - CICESE]', meta: true }
            ] },
            { time: '19:00', items: [
                { text: 'Congress Dinner', featured: true, kind: 'attendee' },
                { text: '[BISTRO]', meta: true }
            ] }
        ]
    },
    {
        id: 'friday',
        label: 'Day 4: Friday, Oct 30',
        shortLabel: 'Friday 30',
        venue: 'Venue: UABC',
        blocks: [
            { time: '09:00 - 13:00', items: [
                { text: 'Main Track presentations', kind: 'author' },
                { text: 'Awards', kind: 'attendee' },
                { text: 'Congress Closing', featured: true, kind: 'attendee' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '14:30 - 18:30', items: [] },
            { time: '19:00', items: [] }
        ]
    }
]

const esDays = [
    {
        id: 'tuesday',
        label: 'Día 1: Martes 27 Oct',
        shortLabel: 'Martes 27',
        venue: 'Sede: UABC',
        blocks: [
            { time: '09:00 - 13:00', items: [] },
            { time: '14:30 - 18:30', items: [
                { text: 'Tutoriales', kind: 'author' },
                { text: 'Coloquio de Posgrado', kind: 'author' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '19:00', items: [] }
        ]
    },
    {
        id: 'wednesday',
        label: 'Día 2: Miércoles 28 Oct',
        shortLabel: 'Miércoles 28',
        venue: 'Sede: UABC / CICESE',
        blocks: [
            { time: '09:00 - 13:00', items: [
                { text: 'Industry Day', kind: 'attendee' },
                { text: 'Workshops', kind: 'author' },
                { text: 'Tutoriales', kind: 'author' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '14:30 - 18:30', items: [
                { text: 'Inauguración del Congreso', featured: true, kind: 'attendee' },
                { text: 'Keynote: Gillian Hayes', featured: true, kind: 'attendee' },
                { text: 'Conferencias Main Track', kind: 'author' },
                { text: '[Auditorio - CICESE]', meta: true },
                { text: 'Sesión de Posters', kind: 'author' },
                { text: 'Ambigú de Bienvenida', kind: 'attendee' },
                { text: '[SUM - CICESE]', meta: true }
            ] },
            { time: '19:00', items: [] }
        ]
    },
    {
        id: 'thursday',
        label: 'Día 3: Jueves 29 Oct',
        shortLabel: 'Jueves 29',
        venue: 'Sede: UABC / CICESE',
        blocks: [
            { time: '09:00 - 13:00', items: [
                { text: 'Keynote: Roberto Martínez', featured: true, kind: 'attendee' },
                { text: 'Conferencias Main Track', kind: 'author' },
                { text: 'Concurso de Estudiantes', kind: 'author' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '14:30 - 18:30', items: [
                { text: 'Conferencias Main Track', kind: 'author' },
                { text: '[Auditorio - CICESE]', meta: true }
            ] },
            { time: '19:00', items: [
                { text: 'Cena de Congreso', featured: true, kind: 'attendee' },
                { text: '[BISTRO]', meta: true }
            ] }
        ]
    },
    {
        id: 'friday',
        label: 'Día 4: Viernes 30 Oct',
        shortLabel: 'Viernes 30',
        venue: 'Sede: UABC',
        blocks: [
            { time: '09:00 - 13:00', items: [
                { text: 'Conferencias Main Track', kind: 'author' },
                { text: 'Premiaciones', kind: 'attendee' },
                { text: 'Clausura del Congreso', featured: true, kind: 'attendee' },
                { text: '[UABC - Sauzal]', meta: true }
            ] },
            { time: '14:30 - 18:30', items: [] },
            { time: '19:00', items: [] }
        ]
    }
]

export const scheduleProgram = {
    en: {
        title: 'MexIHC 2026 - Preliminary Program',
        dateline: 'Ensenada, Baja California | October 27-30, 2026',
        status: 'Preliminary program subject to change.',
        summaryLabel: 'Schedule summary',
        summary: [
            { value: '4', label: 'program days' },
            { value: '2', label: 'main venues' },
            { value: '3', label: 'daily blocks' }
        ],
        audienceTitle: 'Quick paths',
        audienceCards: [
            {
                label: 'Publishing or presenting',
                description: 'Find workshops, tutorials, the Graduate Colloquium, Main Track presentations, posters and student activities.',
                tags: ['Tue PM', 'Wed', 'Thu', 'Fri AM']
            },
            {
                label: 'Attending the conference',
                description: 'Plan around keynotes, Industry Day, the welcome reception, dinner, awards and closing activities.',
                tags: ['Wed', 'Thu', 'Fri AM']
            }
        ],
        highlightsTitle: 'Highlights',
        highlights: ['Congress Opening', 'Keynote: Gillian Hayes', 'Keynote: Roberto Martínez', 'Congress Dinner', 'Congress Closing'],
        overviewTitle: 'Overview',
        mobileTitle: 'By day',
        timeHeader: 'Time',
        emptyLabel: 'To be confirmed',
        days: enDays,
        timeBlocks
    },
    es: {
        title: 'MexIHC 2026 - Programa Preliminar',
        dateline: 'Ensenada, Baja California | Del 27 al 30 de octubre de 2026',
        status: 'Programa preliminar sujeto a cambios.',
        summaryLabel: 'Resumen de la agenda',
        summary: [
            { value: '4', label: 'días de programa' },
            { value: '2', label: 'sedes principales' },
            { value: '3', label: 'bloques por día' }
        ],
        audienceTitle: 'Rutas rápidas',
        audienceCards: [
            {
                label: 'Publicar o presentar',
                description: 'Ubica talleres, tutoriales, Coloquio de Posgrado, conferencias Main Track, posters y actividades estudiantiles.',
                tags: ['Mar PM', 'Mié', 'Jue', 'Vie AM']
            },
            {
                label: 'Asistir a la conferencia',
                description: 'Planea alrededor de keynotes, Industry Day, ambigú de bienvenida, cena, premiaciones y clausura.',
                tags: ['Mié', 'Jue', 'Vie AM']
            }
        ],
        highlightsTitle: 'Momentos destacados',
        highlights: ['Inauguración del Congreso', 'Keynote: Gillian Hayes', 'Keynote: Roberto Martínez', 'Cena de Congreso', 'Clausura del Congreso'],
        overviewTitle: 'Vista general',
        mobileTitle: 'Por día',
        timeHeader: 'Horario',
        emptyLabel: 'Por confirmar',
        days: esDays,
        timeBlocks
    }
}
