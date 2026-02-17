<script setup>
import TheHeader from '@/components/Header.vue';
import OrganizerItem from '@/components/OrganizerItem.vue';
import InPageNavigationPanel from '@/components/InPageNavigationPanel.vue';
import Tr from '@/i18n/translation';
import { useI18n } from 'vue-i18n';

const { t, te } = useI18n();
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
const fallbackPhoto = assetUrl('/assets/img/nophoto.png');

const photoByName = {
  'Jesús Favela': assetUrl('/assets/img/people/jesus_fa.jpg'),
  'Laura S. Gaytán-Lugo': assetUrl('/assets/img/people/sanely.jpg'),
  'Adriana L. Iñiguez-Carrillo': assetUrl('/assets/img/people/adriana.png'),
  'Mayra Donaji Barrera-Machuca': assetUrl('/assets/img/people/mayraBarrera.png'),
  'Pedro C. Santana-Mancilla': assetUrl('/assets/img/people/pedro.png'),
  'Victor García': assetUrl('/assets/img/people/victor.png'),
  'Jessica Beltrán': assetUrl('/assets/img/people/jessica.png'),
  'Victoria Meza-Kubo': assetUrl('/assets/img/people/vicky.png'),
  'Luis A. Castro': assetUrl('/assets/img/people/luis.png'),
  'Pablo Bautista': assetUrl('/assets/img/people/pablo.jpg'),
  'Miguel A. Rodríguez-Ortíz': assetUrl('/assets/img/people/mike.png'),
  'Cuauhtemoc Rivera-Loaiza': assetUrl('/assets/img/people/temo.png'),
  'Lizbeth Escobedo': assetUrl('/assets/img/people/liz.jpg')
};

const generalSections = [
  {
    id: 'general-chairs',
    title: 'General Chairs',
    titleKey: 'organizers.conference_chairs_title',
    descriptionKey: 'organizers.conference_chairs_description',
    members: [
      {
        name: 'Alberto L. Morán',
        affiliation: 'Universidad Autónoma de Baja California',
        short: 'UABC'
      },
      {
        name: 'Jesús Favela',
        affiliation: 'Centro de Investigación Científica y de Educación Superior de Ensenada',
        short: 'CICESE'
      },
      {
        name: 'Laura S. Gaytán-Lugo',
        affiliation: 'Universidad de Colima',
        short: 'UCOL'
      }
    ]
  },
  {
    id: 'program-chairs',
    title: 'Program Chairs',
    titleKey: 'organizers.program_chairs_title',
    descriptionKey: 'organizers.program_chairs_description',
    members: [
      {
        name: 'Adriana L. Iñiguez-Carrillo',
        affiliation: 'Universidad de Guadalajara',
        short: 'UdG'
      },
      {
        name: 'Mayra Donaji Barrera-Machuca',
        affiliation: 'University of Calgary',
        short: 'UCalgary'
      },
      {
        name: 'Marcela D. Rodríguez',
        affiliation: 'Universidad Autónoma de Baja California',
        short: 'UABC'
      }
    ]
  },
  {
    id: 'graduate-colloquium',
    title: 'Coloquio de Graduados',
    titleKey: 'organizers.graduate_colloquium_chairs_title',
    descriptionKey: 'organizers.graduate_colloquium_chairs_description',
    members: [
      {
        name: 'David Abdel Mejía',
        affiliation: 'Universidad Autónoma de Baja California',
        short: 'UABC'
      },
      {
        name: 'Ramón Palacio',
        affiliation: 'Instituto Tecnológico de Sonora',
        short: 'ITSON'
      }
    ]
  },
  {
    id: 'sdc',
    title: 'Student Design Competition / SDC Chairs',
    titleKey: 'organizers.student_design_competition_title',
    descriptionKey: 'organizers.student_design_competition_description',
    members: [
      {
        name: 'Lizbeth Escobedo',
        affiliation: 'Dalhousie University',
        short: ''
      },
      {
        name: 'Cuauhtemoc Rivera-Loaiza',
        affiliation: 'Universidad Michoacana de San Nicolás de Hidalgo',
        short: 'UMich'
      }
    ]
  },
  {
    id: 'poster-chairs',
    title: 'Poster Chairs',
    titleKey: 'organizers.posters_chairs_title',
    descriptionKey: 'organizers.posters_chairs_description',
    members: [
      {
        name: 'Cristina Ramírez',
        affiliation: 'Instituto Tecnológico de Ensenada',
        short: 'TecNM-ITE'
      },
      {
        name: 'Gilberto Borrego',
        affiliation: 'Instituto Tecnológico de Sonora',
        short: 'ITSON'
      }
    ]
  },
  {
    id: 'workshops',
    title: 'Talleres',
    descriptionKey: 'organizers.workshops_and_tutorials_chairs_description',
    members: [
      {
        name: 'Sandra Nava',
        affiliation: 'Universidad Autónoma de San Luis Potosí',
        short: 'UASLP'
      }
    ]
  },
  {
    id: 'tutoriales',
    title: 'Tutoriales',
    descriptionKey: 'organizers.workshops_and_tutorials_chairs_description',
    members: [
      {
        name: 'José Ángel González Fraga',
        affiliation: 'Universidad Autónoma de Baja California',
        short: 'UABC'
      },
      {
        name: 'Tony García Macías',
        affiliation: 'Centro de Investigación Científica y de Educación Superior de Ensenada',
        short: 'CICESE'
      }
    ]
  },
  {
    id: 'panel-chair',
    title: 'Panel Chair',
    description: 'Responsible for coordinating and moderating panel sessions.',
    members: [
      {
        name: 'Pedro C. Santana-Mancilla',
        affiliation: 'Universidad de Colima',
        short: 'UCOL'
      }
    ]
  },
  {
    id: 'industry-session',
    title: 'Sesión Industrial',
    titleKey: 'organizers.industry_session_chair_title',
    descriptionKey: 'organizers.industry_session_chair_description',
    members: [
      {
        name: 'Victor García',
        affiliation: 'BBVA',
        short: ''
      },
      {
        name: 'Jessica Beltrán',
        affiliation: 'Universidad Autónoma de Coahuila',
        short: 'U. A. Coahuila'
      },
      {
        name: 'Viridiana Silva',
        affiliation: 'Daikin Applied Americas',
        short: ''
      }
    ]
  },
  {
    id: 'local-chairs',
    title: 'Local Chairs',
    titleKey: 'organizers.local_chairs_title',
    descriptionKey: 'organizers.local_chairs_description',
    members: [
      {
        name: 'Karina Caro',
        affiliation: 'Universidad Autónoma de Baja California',
        short: 'UABC'
      },
      {
        name: 'Ana Martínez',
        affiliation: 'Centro de Investigación Científica y de Educación Superior de Ensenada',
        short: 'CICESE'
      },
      {
        name: 'Victoria Meza-Kubo',
        affiliation: 'Universidad Autónoma de Baja California',
        short: 'UABC'
      }
    ]
  },
  {
    id: 'registration-chair',
    title: 'Registration Chair',
    description:
      'Handles attendee registration logistics, inquiries, and registration process coordination.',
    members: [
      {
        name: 'Luis A. Castro',
        affiliation: 'Instituto Tecnológico de Sonora',
        short: 'ITSON'
      }
    ]
  },
  {
    id: 'publicity-chairs',
    title: 'Publicity Chairs',
    titleKey: 'organizers.publicity_chair_title',
    descriptionKey: 'organizers.publicity_chair_description',
    members: [
      {
        name: 'Pablo Bautista',
        affiliation: 'Universidad de Colima',
        short: 'UCOL'
      },
      {
        name: 'Pablo M. Schiaffino-Rivas',
        affiliation: 'Universidad de Colima',
        short: 'UCOL'
      }
    ]
  },
  {
    id: 'web-chair',
    title: 'Web Chair',
    titleKey: 'organizers.web_chairs_title',
    descriptionKey: 'organizers.web_chairs_description',
    members: [
      {
        name: 'Miguel A. Rodríguez-Ortíz',
        affiliation: 'Universidad de Colima',
        short: 'UCOL'
      }
    ]
  }
];

const committeeLinks = [
  {
    label: t('organizers.general_committee_link'),
    to: Tr.i18nRoute({ name: 'organizers', hash: '#general-committee' })
  },
  {
    label: t('organizers.program_committee_link'),
    to: Tr.i18nRoute({ name: 'organizers', hash: '#program-committee' })
  }
];

const memberPhoto = (name) => photoByName[name] || fallbackPhoto;

const affiliationText = (affiliation, short) => {
  if (!short) {
    return affiliation;
  }
  return `${affiliation} (${short})`;
};

const getLocalizedText = (key, fallback = '') => {
  if (!key) {
    return fallback;
  }
  return te(key) ? t(key) : fallback;
};
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t('organizers.title') }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-lg-8">
          <InPageNavigationPanel :links="committeeLinks" />
          <p>{{ $t('organizers.intro') }}</p>
          <h2 id="general-committee" class="text-primary text-gradient text-center py-4">
            {{ $t('organizers.general_committee_title') }}
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section class="container">
    <div class="row">
      <div class="col-lg-12 mx-auto">
        <div
          v-for="section in generalSections"
          :id="section.id"
          :key="section.id"
          class="container mt-4 px-5 mt-6"
        >
          <div class="row">
            <div class="col-xl-3">
              <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                <h3>{{ getLocalizedText(section.titleKey, section.title) }}</h3>
                <p class="text-secondary font-weight-normal pe-3">
                  {{ getLocalizedText(section.descriptionKey, section.description || '') }}
                </p>
              </div>
            </div>

            <div class="col-xl-9">
              <div class="row">
                <div
                  v-for="member in section.members"
                  :key="`${section.id}-${member.name}`"
                  class="col-md-4 m-auto mt-md-0 mt-4"
                >
                  <OrganizerItem>
                    <template #image>
                      <div class="d-block blur-shadow-image">
                        <img
                          :src="memberPhoto(member.name)"
                          :alt="member.name"
                          class="img-fluid shadow rounded-3"
                        >
                      </div>
                      <div
                        class="colored-shadow"
                        :style="`background-image: url('${memberPhoto(member.name)}');`"
                      />
                    </template>
                    <template #name>
                      {{ member.name }}
                    </template>
                    <template #institution>
                      {{ affiliationText(member.affiliation, member.short) }}
                    </template>
                    <template #email>
                      {{ getLocalizedText(section.titleKey, section.title) }}
                    </template>
                  </OrganizerItem>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </section>

  <section class="container">
    <div class="row justify-content-center my-3">
      <div class="col-lg-8">
        <h2 id="program-committee" class="text-center py-4 mt-5" style="color: #011638">
          {{ $t('organizers.program_committee_title') }}
        </h2>
        <p class="text-center">
          <em>{{ $t('nav.coming_soon') }}</em>
        </p>
      </div>
    </div>
  </section>
</template>
