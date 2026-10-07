const timeBlocks = [
    '08:30 - 09:00', '09:00 - 10:00', '09:00 - 13:00', '09:15 - 10:35', '10:00 - 10:30',
    '10:30 - 12:10', '10:30 - 13:00', '10:35 - 11:05', '11:00 - 11:30',
    '11:05 - 12:25', '12:45 - 13:00', '13:00 - 14:30', '14:00 - 14:30',
    '14:30 - 15:00', '14:30 - 18:30', '15:00 - 16:00', '15:30 - 15:50',
    '15:50 - 16:50', '16:10 - 17:30', '16:15 - 16:45', '17:00 - 18:30',
    '17:45 - 19:00', '19:00 - 00:00'
]

const enDays = [
    {
        id: 'tuesday', label: 'Day 1: Tuesday, Oct 27', shortLabel: 'Tuesday 27', venue: 'UABC',
        blocks: [
            { time: '14:00 - 14:30', items: [{ text: 'Registration - UABC, DIB Lobby', kind: 'attendee' }] },
            { time: '14:30 - 18:30', items: [{ text: '4 parallel tutorials - UABC, DIB Rooms A, B, D and E', kind: 'author', detailsLabel: 'View tutorials', details: [
                'T1 - Designing Human-Agent Ecosystems with Multi-Agent AI for Healthcare and Education - Room A - Arturo Morales and Marco Antonio Pérez',
                'T2 - Measuring the Invisible: Psychometrics for HCI Research - Room B - Heber Zapata',
                'T3 - Creating Research Workflows with Agents Powered by Generative AI - Room E - Isabel López Hurtado and Oleksiy Levchuk',
                'T5 - A Small Step for Unity - Room D - Kenia Ramírez Acosta'
            ] }] },
            { time: '16:15 - 16:45', items: [{ text: 'Coffee break - UABC, DIB Lobby', meta: true }] }
        ]
    },
    {
        id: 'wednesday', label: 'Day 2: Wednesday, Oct 28', shortLabel: 'Wednesday 28', venue: 'UABC / CICESE',
        blocks: [
            { time: '08:30 - 09:00', items: [{ text: 'Registration - UABC, DIB Lobby', kind: 'attendee' }] },
            { time: '09:00 - 13:00', items: [
                { text: '7 parallel activities at UABC and CICESE', kind: 'author', detailsLabel: 'View activities', details: [
                    'W1 - IMSaBI workshop - CICESE, DCC Computer Lab - Jessica Beltrán',
                    'W3 - Aging at Home workshop - CICESE, Room 101 - Luis Zamudio',
                    'W2 - HCAI workshop - UABC, DIB Audiovisual Room - Pedro Santana',
                    'T4 - A Participatory Design Studio for More-than-Human AI in Education - UABC, DIB Room B - Roberto Martínez-Maldonado',
                    'T6 - Introduction to Blender - UABC, DIB Room D - Irene Guadalupe González Martín',
                    'Graduate Colloquium - UABC, DIB Room E - David Abdel and Ramón Palacio',
                    'Industry Day - UABC, DIB 4th floor - Viridiana Silva'
                ] },
                { text: 'Coffee break, 11:00 - 11:30 - UABC, DIB Lobby and CICESE (venue to be confirmed)', meta: true }
            ] },
            { time: '13:00 - 14:30', items: [{ text: 'Lunch break (includes transportation to CICESE)', meta: true }] },
            { time: '14:30 - 15:00', items: [{ text: 'Congress Opening - CICESE Auditorium', featured: true, kind: 'attendee' }] },
            { time: '15:00 - 16:00', items: [{ id: 'keynote-gillian', text: 'Keynote 1 - Gillian Hayes - CICESE Auditorium - introduced by Mónica Tentori', featured: true, kind: 'attendee' }] },
            { time: '16:10 - 17:30', items: [{ text: 'S1 - Neuroergonomics and activity recognition - CICESE Auditorium (proposed) - 4 papers', kind: 'author', detailsLabel: 'View the 4 papers', details: [
                '16:10 - #9 - Neuroergonomic validation for BCI systems and stress quantification in industry (NOM-035) - Pineda, Hernández-Capuchín, Ramírez-Fernández',
                '16:30 - #12 - Evaluation of ChatGPT User Experience Through EEG Signals: A Systematic Review - Hernández Domínguez, Mezura-Godoy, Benítez-Guerrero',
                '16:50 - #18 - ActivGuide: Toward Interactive Guidance for HAR Data Collection - Beltrán Mercado, Gámez-Elizalde, Beltrán Márquez, Castro',
                '17:10 - #21 - Privacy-Aware HAR in Office Environments Using Federated Learning - Miranda Rucabado, Avalos Rosales, Martínez García Moreno, Navarro Hernández, Beltrán Márquez'
            ] }] },
            { time: '17:45 - 19:00', items: [{ text: 'Poster session (20) and welcome reception - CICESE, SUM', kind: 'attendee' }] }
        ]
    },
    {
        id: 'thursday', label: 'Day 3: Thursday, Oct 29', shortLabel: 'Thursday 29', venue: 'UABC / CICESE',
        blocks: [
            { time: '09:00 - 10:00', items: [{ id: 'keynote-roberto', text: 'Keynote 2 - Roberto Martínez-Maldonado - UABC, DIB 4th floor - introduced by Laura S. Gaytán', featured: true, kind: 'attendee' }] },
            { time: '10:00 - 10:30', items: [{ text: 'Coffee break - UABC, DIB 4th floor', meta: true }] },
            { time: '10:30 - 12:10', items: [{ text: 'S2 - Technology and AI in education - UABC, DIB 4th floor - 5 papers', kind: 'author', detailsLabel: 'View the 5 papers', details: [
                '10:30 - #6 - Designing for the Prediction-Action Gap in Learning Analytics - Rodríguez-Ortiz, Anido Rifón, Santana Mancilla',
                '10:50 - #14 - Design and Evaluation of an LLM-enhanced ITS within Teacher-in-the-Loop - Levchuk, López, Favela',
                '11:10 - #7 - From Concept to Classroom: HCI-Driven Framework for Digital Internationalization at Home - Ruiz-Rodríguez, Aispuro Félix, Reyes Hernández, Suárez Villavicencio, Aguilar Parra',
                '11:30 - #41 - Evaluating Teamwork in HCI Projects in Higher Education - Gaytán Lugo, Martínez-Venegas, Alcaraz-Valencia, Santana Mancilla',
                '11:50 - #24 - Diagnóstico de brechas comunicacionales en posgrado mediante métodos mixtos - Sánchez Silva'
            ] }] },
            { time: '10:30 - 13:00', items: [{ text: 'Student Design Competition - UABC, DIB Audiovisual Room - Lizbeth Escobedo and Cuauhtémoc Rivera-Loaiza - runs in parallel with S2', kind: 'author' }] },
            { time: '13:00 - 14:30', items: [{ text: 'Lunch break (includes transportation to CICESE)', meta: true }] },
            { time: '14:30 - 15:30', items: [{ text: 'S3 - Accessibility and inclusion - CICESE Auditorium - 3 papers', kind: 'author', detailsLabel: 'View the 3 papers', details: [
                '14:30 - #8 - Cognitive Smart Assistive Device for the Personal Hygiene of Children with ASD - Quevedo-Lozano, Hernández-Capuchín, Ramírez-Fernández',
                '14:50 - #37 - Sign-based Search in Sign Language Dictionaries: A Systematic Literature Review - Bautista Flores, Fajardo Flores, Gaytán Lugo, Santana Mancilla',
                '15:10 - #42 - Exergames for Adults with Mobility Limitations: A Narrative Review - Schiaffino-Rivas, Santana-Mancilla, Alcaraz-Valencia, Gaytán-Lugo'
            ] }] },
            { time: '15:30 - 15:50', items: [{ text: 'Coffee break at CICESE', meta: true }] },
            { time: '15:50 - 16:50', items: [{ text: 'S4 - Digital health and well-being - CICESE Auditorium - 3 papers', kind: 'author', detailsLabel: 'View the 3 papers', details: [
                '15:50 - #15 - Cultural Sensitivity and Conversational Usability in an LLM-based JITAI for Alcohol Harm Reduction - Gutiérrez, Parra, Castro, Banos',
                '16:10 - #39 - Understanding How to Design an Unobtrusive HCI Tracking for Early Cognitive Decline - Cornejo, Zapata, Ramírez-Alonso, Manzo Martínez, Gaxiola',
                '16:30 - #19 - Usability Testing of a Mobile App for Monitoring and Predicting Emotional Dysregulation - Alvarado-Contreras, Soto-Mendoza, Pérez-Pedraza, Ruiz-y-Ruiz, Caro'
            ] }] },
            { time: '17:00 - 18:30', items: [{ id: 'panel-20-years', text: 'Panel - 20 Years of MexIHC - CICESE Auditorium', featured: true, kind: 'attendee' }] },
            { time: '19:00 - 00:00', items: [{ id: 'gala-dinner', text: 'Gala dinner - Bistro Lo Natural', featured: true, kind: 'attendee' }] }
        ]
    },
    {
        id: 'friday', label: 'Day 4: Friday, Oct 30', shortLabel: 'Friday 30', venue: 'UABC',
        blocks: [
            { time: '09:15 - 10:35', items: [{ text: 'S5 - AI for clinical practice and care - UABC, DIB 4th floor - 4 papers', kind: 'author', detailsLabel: 'View the 4 papers', details: [
                '#16 - Toward Human-Centered AI for Cardiovascular Care - Mercado Partida, Castro, Pérez Castro, Villavicencio-Navarro',
                '#23 - Participatory Tuning of Synthetic Subjects: Towards a Realistic AI-based Dementia Patient - Jiménez López, Menchaca-Méndez, Juárez Gambino, Castro, Favela',
                '#44 - Hospital Staff Perceptions of Navigation Errors by a Mobile Delivery Robot - Garcia Goo, Schadenberg, Evers',
                '#17 - Beyond the Black Box: How Blockchain-Based Provenance Supports XAI Transparency - Lizárraga Reyes, Favela Vara'
            ] }] },
            { time: '10:35 - 11:05', items: [{ text: 'Coffee break - UABC, DIB 4th floor', meta: true }] },
            { time: '11:05 - 12:25', items: [{ text: 'S6 - Mobile apps for well-being and learning - UABC, DIB 4th floor - 4 papers', kind: 'author', detailsLabel: 'View the 4 papers', details: [
                '#32 - Meritum: A Mobile App for Mitigating the Effects of Imposter Syndrome - Aguilar Solís, Navarro, Caro',
                '#20 - Stilo: An Interactive Fashion Recommendation System to Support Cognitive Load - Sandez, Haro, Zatarain-Aceves, Caro',
                '#33 - Huellitas Care: Preventive Care and Veterinary Emergencies for Pet Owners - Balderrama Campos, Carpio de la Cruz, Navarro, Caro',
                '#3 - Usability and Cognitive Ergonomics in Mobile Radiology Learning Tools - Moreno-Lara, Silva-Trujillo'
            ] }] },
            { time: '12:45 - 13:00', items: [{ text: 'Closing ceremony - UABC, DIB 4th floor', featured: true, kind: 'attendee' }] }
        ]
    }
]

const esDays = [
    {
        id: 'tuesday', label: 'Día 1: Martes 27 oct', shortLabel: 'Martes 27', venue: 'UABC',
        blocks: [
            { time: '14:00 - 14:30', items: [{ text: 'Registro - UABC, Lobby DIB', kind: 'attendee' }] },
            { time: '14:30 - 18:30', items: [{ text: '4 tutoriales simultáneos - UABC, DIB Salas A, B, D y E', kind: 'author', detailsLabel: 'Ver tutoriales', details: [
                'T1 - Designing Human-Agent Ecosystems with Multi-Agent AI for Healthcare and Education - Sala A - Arturo Morales y Marco Antonio Pérez',
                'T2 - Measuring the Invisible: Psychometrics for HCI Research - Sala B - Heber Zapata',
                'T3 - Creating Research Workflows with Agents Powered by Generative AI - Sala E - Isabel López Hurtado y Oleksiy Levchuk',
                'T5 - Un pequeño paso para Unity - Sala D - Kenia Ramírez Acosta'
            ] }] },
            { time: '16:15 - 16:45', items: [{ text: 'Café - UABC, Lobby DIB', meta: true }] }
        ]
    },
    {
        id: 'wednesday', label: 'Día 2: Miércoles 28 oct', shortLabel: 'Miércoles 28', venue: 'UABC / CICESE',
        blocks: [
            { time: '08:30 - 09:00', items: [{ text: 'Registro - UABC, Lobby DIB', kind: 'attendee' }] },
            { time: '09:00 - 13:00', items: [
                { text: '7 actividades simultáneas en UABC y CICESE', kind: 'author', detailsLabel: 'Ver actividades', details: [
                    'Taller W1 - IMSaBI - CICESE, Laboratorio de Cómputo DCC - Jessica Beltrán',
                    'Taller W3 - Envejecimiento en casa - CICESE, Sala 101 - Luis Zamudio',
                    'Taller W2 - HCAI - UABC, DIB Audiovisual - Pedro Santana',
                    'Tutorial T4 - A Participatory Design Studio for More-than-Human AI in Education - UABC, DIB Sala B - Roberto Martínez-Maldonado',
                    'Tutorial T6 - Introducción a Blender - UABC, DIB Sala D - Irene Guadalupe González Martín',
                    'Coloquio de graduados - UABC, DIB Sala E - David Abdel y Ramón Palacio',
                    'Industry Day - UABC, DIB 4to piso - Viridiana Silva'
                ] },
                { text: 'Café, 11:00 - 11:30 - UABC, Lobby DIB y CICESE (lugar por confirmar)', meta: true }
            ] },
            { time: '13:00 - 14:30', items: [{ text: 'Comida libre (incluye traslado a CICESE)', meta: true }] },
            { time: '14:30 - 15:00', items: [{ text: 'Inauguración - Auditorio CICESE', featured: true, kind: 'attendee' }] },
            { time: '15:00 - 16:00', items: [{ id: 'keynote-gillian', text: 'Keynote 1 - Gillian Hayes - Auditorio CICESE - presenta: Mónica Tentori', featured: true, kind: 'attendee' }] },
            { time: '16:10 - 17:30', items: [{ text: 'S1 - Neuroergonomía y reconocimiento de actividad - Auditorio CICESE (propuesto) - 4 artículos', kind: 'author', detailsLabel: 'Ver los 4 artículos', details: [
                '16:10 - #9 - Validación neuroergonómica para sistemas BCI y la cuantificación del estrés en la industria (NOM-035) - Pineda, Hernández-Capuchín, Ramírez-Fernández',
                '16:30 - #12 - Evaluation of ChatGPT User Experience Through EEG Signals: A Systematic Review - Hernández Domínguez, Mezura-Godoy, Benítez-Guerrero',
                '16:50 - #18 - ActivGuide: Toward Interactive Guidance for HAR Data Collection - Beltrán Mercado, Gámez-Elizalde, Beltrán Márquez, Castro',
                '17:10 - #21 - Privacy-Aware HAR in Office Environments Using Federated Learning - Miranda Rucabado, Avalos Rosales, Martínez García Moreno, Navarro Hernández, Beltrán Márquez'
            ] }] },
            { time: '17:45 - 19:00', items: [{ text: 'Sesión de pósteres (20) y ambigú de bienvenida - CICESE, SUM', kind: 'attendee' }] }
        ]
    },
    {
        id: 'thursday', label: 'Día 3: Jueves 29 oct', shortLabel: 'Jueves 29', venue: 'UABC / CICESE',
        blocks: [
            { time: '09:00 - 10:00', items: [{ id: 'keynote-roberto', text: 'Keynote 2 - Roberto Martínez-Maldonado - UABC, DIB 4to piso - presenta: Laura S. Gaytán', featured: true, kind: 'attendee' }] },
            { time: '10:00 - 10:30', items: [{ text: 'Café - UABC, DIB 4to piso', meta: true }] },
            { time: '10:30 - 12:10', items: [{ text: 'S2 - Tecnología e IA en educación - UABC, DIB 4to piso - 5 artículos', kind: 'author', detailsLabel: 'Ver los 5 artículos', details: [
                '10:30 - #6 - Designing for the Prediction-Action Gap in Learning Analytics - Rodríguez-Ortiz, Anido Rifón, Santana Mancilla',
                '10:50 - #14 - Design and Evaluation of an LLM-enhanced ITS within Teacher-in-the-Loop - Levchuk, López, Favela',
                '11:10 - #7 - From Concept to Classroom: HCI-Driven Framework for Digital Internationalization at Home - Ruiz-Rodríguez, Aispuro Félix, Reyes Hernández, Suárez Villavicencio, Aguilar Parra',
                '11:30 - #41 - Evaluating Teamwork in HCI Projects in Higher Education - Gaytán Lugo, Martínez-Venegas, Alcaraz-Valencia, Santana Mancilla',
                '11:50 - #24 - Diagnóstico de brechas comunicacionales en posgrado mediante métodos mixtos - Sánchez Silva'
            ] }] },
            { time: '10:30 - 13:00', items: [{ text: 'Concurso de Diseño Estudiantil - UABC, DIB Audiovisual - Lizbeth Escobedo y Cuauhtémoc Rivera-Loaiza - en paralelo con S2', kind: 'author' }] },
            { time: '13:00 - 14:30', items: [{ text: 'Comida libre (incluye traslado a CICESE)', meta: true }] },
            { time: '14:30 - 15:30', items: [{ text: 'S3 - Accesibilidad e inclusión - Auditorio CICESE - 3 artículos', kind: 'author', detailsLabel: 'Ver los 3 artículos', details: [
                '14:30 - #8 - Cognitive Smart Assistive Device for the Personal Hygiene of Children with ASD - Quevedo-Lozano, Hernández-Capuchín, Ramírez-Fernández',
                '14:50 - #37 - Sign-based Search in Sign Language Dictionaries: A Systematic Literature Review - Bautista Flores, Fajardo Flores, Gaytán Lugo, Santana Mancilla',
                '15:10 - #42 - Exergames for Adults with Mobility Limitations: A Narrative Review - Schiaffino-Rivas, Santana-Mancilla, Alcaraz-Valencia, Gaytán-Lugo'
            ] }] },
            { time: '15:30 - 15:50', items: [{ text: 'Café en CICESE', meta: true }] },
            { time: '15:50 - 16:50', items: [{ text: 'S4 - Salud digital y bienestar - Auditorio CICESE - 3 artículos', kind: 'author', detailsLabel: 'Ver los 3 artículos', details: [
                '15:50 - #15 - Cultural Sensitivity and Conversational Usability in an LLM-based JITAI for Alcohol Harm Reduction - Gutiérrez, Parra, Castro, Banos',
                '16:10 - #39 - Understanding How to Design an Unobtrusive HCI Tracking for Early Cognitive Decline - Cornejo, Zapata, Ramírez-Alonso, Manzo Martínez, Gaxiola',
                '16:30 - #19 - Usability Testing of a Mobile App for Monitoring and Predicting Emotional Dysregulation - Alvarado-Contreras, Soto-Mendoza, Pérez-Pedraza, Ruiz-y-Ruiz, Caro'
            ] }] },
            { time: '17:00 - 18:30', items: [{ id: 'panel-20-years', text: 'Panel - 20 años de MexIHC - Auditorio CICESE', featured: true, kind: 'attendee' }] },
            { time: '19:00 - 00:00', items: [{ id: 'gala-dinner', text: 'Cena de gala - Bistro Lo Natural', featured: true, kind: 'attendee' }] }
        ]
    },
    {
        id: 'friday', label: 'Día 4: Viernes 30 oct', shortLabel: 'Viernes 30', venue: 'UABC',
        blocks: [
            { time: '09:15 - 10:35', items: [{ text: 'S5 - IA para la práctica clínica y el cuidado - UABC, DIB 4to piso - 4 artículos', kind: 'author', detailsLabel: 'Ver los 4 artículos', details: [
                '#16 - Toward Human-Centered AI for Cardiovascular Care - Mercado Partida, Castro, Pérez Castro, Villavicencio-Navarro',
                '#23 - Participatory Tuning of Synthetic Subjects: Towards a Realistic AI-based Dementia Patient - Jiménez López, Menchaca-Méndez, Juárez Gambino, Castro, Favela',
                '#44 - Hospital Staff Perceptions of Navigation Errors by a Mobile Delivery Robot - Garcia Goo, Schadenberg, Evers',
                '#17 - Beyond the Black Box: How Blockchain-Based Provenance Supports XAI Transparency - Lizárraga Reyes, Favela Vara'
            ] }] },
            { time: '10:35 - 11:05', items: [{ text: 'Café - UABC, DIB 4to piso', meta: true }] },
            { time: '11:05 - 12:25', items: [{ text: 'S6 - Apps móviles para bienestar y aprendizaje - UABC, DIB 4to piso - 4 artículos', kind: 'author', detailsLabel: 'Ver los 4 artículos', details: [
                '#32 - Meritum: A Mobile App for Mitigating the Effects of Imposter Syndrome - Aguilar Solís, Navarro, Caro',
                '#20 - Stilo: An Interactive Fashion Recommendation System to Support Cognitive Load - Sandez, Haro, Zatarain-Aceves, Caro',
                '#33 - Huellitas Care: Preventive Care and Veterinary Emergencies for Pet Owners - Balderrama Campos, Carpio de la Cruz, Navarro, Caro',
                '#3 - Usability and Cognitive Ergonomics in Mobile Radiology Learning Tools - Moreno-Lara, Silva-Trujillo'
            ] }] },
            { time: '12:45 - 13:00', items: [{ text: 'Clausura - UABC, DIB 4to piso', featured: true, kind: 'attendee' }] }
        ]
    }
]

export const scheduleProgram = {
    en: {
        title: 'MexIHC 2026 - Program',
        dateline: '11th MexIHC · 20th anniversary · Ensenada, Baja California · October 27-30 · Baja California time (UTC-7)',
        status: 'Program information available as of October 7, 2026.',
        summaryLabel: 'Program summary', summary: [{ value: '4', label: 'program days' }, { value: '2', label: 'main venues' }, { value: '6', label: 'tutorials' }],
        audienceTitle: 'At a glance',
        audienceCards: [
            { label: 'Tuesday and Wednesday morning', description: 'Tutorials, workshops, the Graduate Colloquium and Industry Day take place in parallel.', tags: ['UABC', 'CICESE'] },
            { label: 'Wednesday afternoon to Friday', description: 'Keynotes, paper sessions, posters, the Student Design Competition, panel and social events.', tags: ['UABC', 'CICESE'] }
        ],
        highlightsTitle: 'Highlights', highlights: [
            { label: 'Keynote: Gillian Hayes', target: 'keynote-gillian' }, { label: 'Keynote: Roberto Martínez-Maldonado', target: 'keynote-roberto' },
            { label: '20 Years of MexIHC panel', target: 'panel-20-years' }, { label: 'Gala dinner', target: 'gala-dinner' }
        ],
        overviewTitle: 'Full schedule', mobileTitle: 'Full program by day', timeHeader: 'Time', emptyLabel: '', days: enDays, timeBlocks
    },
    es: {
        title: 'MexIHC 2026 - Programa',
        dateline: '11.º MexIHC · 20.º aniversario · Ensenada, Baja California · 27-30 de octubre · Hora de Baja California (UTC-7)',
        status: 'Información del programa disponible al 7 de octubre de 2026.',
        summaryLabel: 'Resumen del programa', summary: [{ value: '4', label: 'días de programa' }, { value: '2', label: 'sedes principales' }, { value: '6', label: 'tutoriales' }],
        audienceTitle: 'De un vistazo',
        audienceCards: [
            { label: 'Martes y miércoles por la mañana', description: 'Tutoriales, talleres, Coloquio de Graduados e Industry Day se realizan en paralelo.', tags: ['UABC', 'CICESE'] },
            { label: 'Miércoles por la tarde a viernes', description: 'Keynotes, sesiones de artículos, pósteres, Concurso de Diseño Estudiantil, panel y actividades sociales.', tags: ['UABC', 'CICESE'] }
        ],
        highlightsTitle: 'Momentos destacados', highlights: [
            { label: 'Keynote: Gillian Hayes', target: 'keynote-gillian' }, { label: 'Keynote: Roberto Martínez-Maldonado', target: 'keynote-roberto' },
            { label: 'Panel 20 años de MexIHC', target: 'panel-20-years' }, { label: 'Cena de gala', target: 'gala-dinner' }
        ],
        overviewTitle: 'Programa completo', mobileTitle: 'Programa completo por día', timeHeader: 'Horario', emptyLabel: '', days: esDays, timeBlocks
    }
}
