<script>
import TheHeader from '@/components/Header.vue'
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue'
import Tr from '@/i18n/translation'

const tutorials = {
  es: [
    {
      id: 'workflows-investigacion-agentes-ia',
      title: 'Creando Workflows de Investigación con Agentes potenciados por la Inteligencia Artificial Generativa',
      summary: 'El taller presenta cómo diseñar y utilizar flujos de trabajo de investigación apoyados por agentes de Inteligencia Artificial Generativa, pasando del uso tradicional de chatbots a sistemas configurables y multiagente. Los participantes conocerán su arquitectura, explorarán patrones de workflow y casos de uso en investigación, y desarrollarán un agente especializado para una tarea concreta de su propio trabajo. También se abordarán aspectos de ética, autoría, evaluación, transparencia y reproducibilidad en el uso de estos sistemas.',
      presenters: [
        {
          name: 'Dra. Isabel López Hurtado',
          affiliation: 'CICESE, Ensenada, México',
          email: 'isabel.lopez@cicese.mx',
          bio: 'Isabel López es postdoctoral fellow en CICESE con doctorado en Psicología Educativa por la Universidad de Minnesota, con especialización en Métodos Cuantitativos en Educación. Su investigación se centra en la integración de LLMs y Sistemas de Tutoría Inteligente en la educación de computación y matemáticas.'
        },
        {
          name: 'M.Sc. Oleksiy Levchuk',
          affiliation: 'CICESE, Ensenada, México',
          email: 'levchuk@cicese.edu.mx',
          bio: 'Oleksiy Levchuk es estudiante de doctorado en Ciencias de la Computación en CICESE. Su trabajo aborda inteligencia artificial generativa, ingeniería de prompts, analíticas de aprendizaje, experimentos en ciencias de la computación y desarrollo de software full-stack.'
        }
      ]
    },
    {
      id: 'human-agent-ecosystems',
      title: 'Designing Human-Agent Ecosystems with Multi-Agent AI for Healthcare and Education',
      summary: 'This tutorial introduces the design of human-centered multi-agent AI ecosystems for healthcare and education. Participants will explore the foundations of agentic AI, learn how to design specialized agents with complementary roles and objectives, and understand how multiple LLM-based agents can coordinate through sequential, parallel, and human-in-the-loop workflows. The tutorial includes hands-on activities in which participants prototype a simple multi-agent ecosystem addressing healthcare or educational scenarios, such as personalized tutoring, learning analytics, patient support, and adaptive feedback.',
      presenters: [
        {
          name: 'Arturo Morales Téllez',
          affiliation: 'CICESE',
          bio: 'Arturo Morales Téllez is a researcher at CICESE whose work focuses on Human-Computer Interaction, Intelligent Tutoring Systems, Conversational Agents, Extended Reality, Physiological Computing, and Large Language Models.'
        },
        {
          name: 'Marco Antonio Pérez Doimeadios',
          affiliation: 'CICESE',
          bio: 'Marco Antonio Pérez Doimeadios is a graduate student in the Master’s Program in Advanced and Integrated Technologies at CICESE. His work focuses on the design and development of AI agents and multi-agent systems, LLM integration, workflow automation, and web technologies.'
        }
      ]
    },
    {
      id: 'psicometria-ihc',
      title: 'Midiendo lo invisible: Psicometría para la investigación en Interacción Humano-Computadora',
      summary: 'Este taller introduce los fundamentos de la psicometría y su aplicación en la investigación de Interacción Humano-Computadora (IHC), explorando cómo medir aspectos que no son directamente observables, como percepciones, actitudes y experiencias de los usuarios. Los participantes conocerán herramientas y estrategias para diseñar y evaluar instrumentos de medición aplicados a estudios con usuarios y tecnologías. Es un espacio dirigido a estudiantes, docentes e investigadores interesados en IHC, experiencia de usuario, diseño de interfaces y evaluación de sistemas tecnológicos.',
      presenters: [
        {
          name: 'Heber Abraham Zapata Robles',
          bio: 'Heber Abraham Zapata Robles es doctorante en Ciencias de la Computación en CICESE, maestro en Ingeniería en Computación por la UACH y psicólogo por la ELPAC-Universidad de Ciencias del Comportamiento. Su investigación integra psiquiatría computacional, interacción humano-computadora e informática médica.'
        }
      ]
    }
  ],
  en: [
    {
      id: 'workflows-investigacion-agentes-ia',
      title: 'Creating Research Workflows with Agents Powered by Generative Artificial Intelligence',
      summary: 'This tutorial presents how to design and use research workflows supported by Generative AI agents, moving from the traditional use of chatbots to configurable and multi-agent systems. Participants will learn about their architecture, explore workflow patterns and research use cases, and develop a specialized agent for a concrete task in their own work. The tutorial will also address ethics, authorship, evaluation, transparency, and reproducibility in the use of these systems.',
      presenters: [
        {
          name: 'Dr. Isabel López Hurtado',
          affiliation: 'CICESE, Ensenada, Mexico',
          email: 'isabel.lopez@cicese.mx',
          bio: 'Isabel López is a postdoctoral fellow at CICESE with a Ph.D. in Educational Psychology from the University of Minnesota, specializing in Quantitative Methods in Education. Her research focuses on integrating LLMs and Intelligent Tutoring Systems in computing and mathematics education.'
        },
        {
          name: 'M.Sc. Oleksiy Levchuk',
          affiliation: 'CICESE, Ensenada, Mexico',
          email: 'levchuk@cicese.edu.mx',
          bio: 'Oleksiy Levchuk is a Ph.D. student in Computer Science at CICESE. His work includes generative AI, prompt engineering, learning analytics, experimental design in computer science, and full-stack software development.'
        }
      ]
    },
    {
      id: 'human-agent-ecosystems',
      title: 'Designing Human-Agent Ecosystems with Multi-Agent AI for Healthcare and Education',
      summary: 'This tutorial introduces the design of human-centered multi-agent AI ecosystems for healthcare and education. Participants will explore the foundations of agentic AI, learn how to design specialized agents with complementary roles and objectives, and understand how multiple LLM-based agents can coordinate through sequential, parallel, and human-in-the-loop workflows. The tutorial includes hands-on activities in which participants prototype a simple multi-agent ecosystem addressing healthcare or educational scenarios, such as personalized tutoring, learning analytics, patient support, and adaptive feedback.',
      presenters: [
        {
          name: 'Arturo Morales Téllez',
          affiliation: 'CICESE',
          bio: 'Arturo Morales Téllez is a researcher at CICESE whose work focuses on Human-Computer Interaction, Intelligent Tutoring Systems, Conversational Agents, Extended Reality, Physiological Computing, and Large Language Models.'
        },
        {
          name: 'Marco Antonio Pérez Doimeadios',
          affiliation: 'CICESE',
          bio: 'Marco Antonio Pérez Doimeadios is a graduate student in the Master’s Program in Advanced and Integrated Technologies at CICESE. His work focuses on the design and development of AI agents and multi-agent systems, LLM integration, workflow automation, and web technologies.'
        }
      ]
    },
    {
      id: 'psicometria-ihc',
      title: 'Measuring the Invisible: Psychometrics for Human-Computer Interaction Research',
      summary: 'This tutorial introduces the foundations of psychometrics and its application in Human-Computer Interaction (HCI) research, exploring how to measure aspects that are not directly observable, such as users’ perceptions, attitudes, and experiences. Participants will learn tools and strategies to design and evaluate measurement instruments for studies with users and technologies. It is intended for students, instructors, and researchers interested in HCI, user experience, interface design, and the evaluation of technological systems.',
      presenters: [
        {
          name: 'Heber Abraham Zapata Robles',
          bio: 'Heber Abraham Zapata Robles is a Ph.D. student in Computer Science at CICESE, holds a master’s degree in Computer Engineering from UACH, and is a psychologist from ELPAC-Universidad de Ciencias del Comportamiento. His research integrates computational psychiatry, human-computer interaction, and medical informatics.'
        }
      ]
    }
  ]
}

export default {
  components: {
    TheHeader,
    InPageNavigationPanel
  },
  computed: {
    localeTutorials() {
      return tutorials[this.$i18n.locale] || tutorials.en
    }
  },
  setup() {
    return { Tr }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t('nav.tutorial_title') }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">
            <p class="tutorial-intro lead">
              {{ $i18n.locale === 'es'
                ? 'Estos son los tutoriales aceptados para MexIHC 2026. Próximamente se agregarán horarios, sedes y detalles de registro conforme queden confirmados.'
                : 'These are the accepted tutorials for MexIHC 2026. Schedules, venues, and registration details will be added as they are confirmed.' }}
            </p>

            <InPageNavigationPanel
              :links="localeTutorials.map((tutorial) => ({
                label: tutorial.title,
                to: Tr.i18nRoute({ name: 'accepted-tutorials', hash: '#' + tutorial.id })
              }))"
            />

            <article
              v-for="tutorial in localeTutorials"
              :id="tutorial.id"
              :key="tutorial.id + '-detail'"
              class="tutorial-detail mexihc-section-gap"
            >
              <h2 class="tutorial-title text-primary text-gradient">{{ tutorial.title }}</h2>
              <p class="tutorial-summary">{{ tutorial.summary }}</p>

              <h3 class="tutorial-presenters-heading">
                {{ $i18n.locale === 'es' ? 'Imparte' : 'Presented by' }}
              </h3>
              <div class="tutorial-presenters">
                <section
                  v-for="presenter in tutorial.presenters"
                  :key="presenter.name"
                  class="tutorial-presenter"
                >
                  <h4 class="tutorial-presenter-name">{{ presenter.name }}</h4>
                  <p v-if="presenter.affiliation" class="tutorial-presenter-affiliation">{{ presenter.affiliation }}</p>
                  <p v-if="presenter.email" class="tutorial-presenter-email">
                    <a :href="'mailto:' + presenter.email">{{ presenter.email }}</a>
                  </p>
                  <p class="tutorial-presenter-bio">{{ presenter.bio }}</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tutorial-intro {
  margin-bottom: 1.75rem;
  color: var(--mexihc-midnight);
  line-height: 1.7;
}

.tutorial-detail {
  scroll-margin-top: 6.5rem;
}

.tutorial-title {
  margin-bottom: 1rem;
  font-size: clamp(1.55rem, 3vw, 2rem);
  line-height: 1.35;
}

.tutorial-summary {
  margin-bottom: 1.6rem;
  color: var(--mexihc-night);
  font-size: 1.02rem;
  line-height: 1.75;
}

.tutorial-presenters-heading {
  margin-bottom: 0.7rem;
  color: var(--mexihc-night);
  font-size: 1.12rem;
}

.tutorial-presenters {
  border-top: 1px solid var(--mexihc-border-strong);
}

.tutorial-presenter {
  padding: 1.15rem 0 1.2rem 1.2rem;
  border-bottom: 1px solid var(--mexihc-border);
  border-left: 3px solid var(--mexihc-rose);
}

.tutorial-presenter-name {
  margin: 0 0 0.3rem;
  color: var(--mexihc-night);
  font-family: 'Inter', sans-serif !important;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.4;
}

.tutorial-presenter-affiliation,
.tutorial-presenter-email {
  margin: 0 0 0.3rem;
  color: var(--mexihc-slate);
  font-size: 0.94rem;
}

.tutorial-presenter-bio {
  margin: 0.7rem 0 0;
  color: var(--mexihc-midnight);
  line-height: 1.7;
}

@media (max-width: 575.98px) {
  .tutorial-title {
    font-size: 1.42rem;
  }

  .tutorial-presenter {
    padding-left: 0.9rem;
  }
}
</style>
