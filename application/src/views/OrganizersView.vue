<script setup>
import TheHeader from "@/components/Header.vue";
import OrganizerItem from "@/components/OrganizerItem.vue";
import InPageNavigationPanel from "@/components/InPageNavigationPanel.vue";
import Tr from "@/i18n/translation";
import { useI18n } from "vue-i18n";

const { t, te } = useI18n();
const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const fallbackPhoto = assetUrl("/assets/img/nophoto.png");

const photoByName = {
  "Jesús Favela": assetUrl("/assets/img/people/jesus_fa.jpg"),
  "Laura S. Gaytán-Lugo": assetUrl("/assets/img/people/sanely.jpg"),
  "Adriana L. Iñiguez-Carrillo": assetUrl("/assets/img/people/adriana.png"),
  "Mayra Donaji Barrera-Machuca": assetUrl(
    "/assets/img/people/mayraBarrera.png",
  ),
  "Pedro C. Santana-Mancilla": assetUrl("/assets/img/people/pedro.png"),
  "Victor García": assetUrl("/assets/img/people/victor.png"),
  "Jessica Beltrán": assetUrl("/assets/img/people/jessica.png"),
  "Victoria Meza-Kubo": assetUrl("/assets/img/people/vicky.png"),
  "Luis A. Castro": assetUrl("/assets/img/people/luis.png"),
  "Pablo Bautista": assetUrl("/assets/img/people/pablo.jpg"),
  "Miguel A. Rodríguez-Ortíz": assetUrl("/assets/img/people/mike.png"),
  "Cuauhtemoc Rivera-Loaiza": assetUrl("/assets/img/people/temo.png"),
  "Lizbeth Escobedo": assetUrl("/assets/img/people/liz.jpg"),
  "Pablo M. Schiaffino-Rivas": assetUrl("/assets/img/people/pablo2.png"),
  "Alberto L. Morán": assetUrl("/assets/img/people/albertoMoran.png"),
  "Tony García Macías": assetUrl("/assets/img/people/tonyGarcia.png"),
  "Juan Pablo García Vázquez": assetUrl("/assets/img/people/pabloGarcia.jpg"),
  "Cristina Ramírez": assetUrl("/assets/img/people/cristina.png"),
  "Sandra Nava": assetUrl("/assets/img/people/sandra.png"),
  "David Abdel Mejía": assetUrl("/assets/img/people/abdel.png"),
  "Karina Caro": assetUrl("/assets/img/people/karina.png"),
  "Gilberto Borrego": assetUrl("/assets/img/people/gilberto.png"),
  "Marcela D. Rodríguez": assetUrl("/assets/img/people/marcela.png"),
  "José Ángel González Fraga": assetUrl("/assets/img/people/joseAngel.png"),
  "Ramón Palacio": assetUrl("/assets/img/people/ramonRene.png"),

};

const generalSections = [
  {
    id: "general-chairs",
    title: "General Chairs",
    titleKey: "organizers.conference_chairs_title",
    descriptionKey: "organizers.conference_chairs_description",
    members: [
      {
        name: "Alberto L. Morán",
        affiliation: "Universidad Autónoma de Baja California",
        short: "UABC",
      },
      {
        name: "Jesús Favela",
        affiliation:
          "Centro de Investigación Científica y de Educación Superior de Ensenada",
        short: "CICESE",
      },
      {
        name: "Laura S. Gaytán-Lugo",
        affiliation: "Universidad de Colima",
        short: "UCOL",
      },
    ],
  },
  {
    id: "program-chairs",
    title: "Program Chairs",
    titleKey: "organizers.program_chairs_title",
    descriptionKey: "organizers.program_chairs_description",
    members: [
      {
        name: "Adriana L. Iñiguez-Carrillo",
        affiliation: "Universidad de Guadalajara",
        short: "UdG",
      },
      {
        name: "Mayra Donaji Barrera-Machuca",
        affiliation: "University of Calgary",
        short: "UCalgary",
      },
      {
        name: "Marcela D. Rodríguez",
        affiliation: "Universidad Autónoma de Baja California",
        short: "UABC",
      },
    ],
  },
  {
    id: "graduate-colloquium",
    title: "Coloquio de Graduados",
    titleKey: "organizers.graduate_colloquium_chairs_title",
    descriptionKey: "organizers.graduate_colloquium_chairs_description",
    members: [
      {
        name: "David Abdel Mejía",
        affiliation: "Universidad Autónoma de Baja California",
        short: "UABC",
      },
      {
        name: "Ramón Palacio",
        affiliation: "Instituto Tecnológico de Sonora",
        short: "ITSON",
      },
    ],
  },
  {
    id: "sdc",
    title: "Student Design Competition / SDC Chairs",
    titleKey: "organizers.student_design_competition_title",
    descriptionKey: "organizers.student_design_competition_description",
    members: [
      {
        name: "Lizbeth Escobedo",
        affiliation: "Dalhousie University",
        short: "",
      },
      {
        name: "Cuauhtemoc Rivera-Loaiza",
        affiliation: "Universidad Michoacana de San Nicolás de Hidalgo",
        short: "UMich",
      },
    ],
  },
  {
    id: "poster-chairs",
    title: "Poster Chairs",
    titleKey: "organizers.posters_chairs_title",
    descriptionKey: "organizers.posters_chairs_description",
    members: [
      {
        name: "Cristina Ramírez",
        affiliation: "Instituto Tecnológico de Ensenada",
        short: "TecNM-ITE",
      },
      {
        name: "Gilberto Borrego",
        affiliation: "Instituto Tecnológico de Sonora",
        short: "ITSON",
      },
    ],
  },
  {
    id: "workshops",
    title: "Talleres",
    descriptionKey: "organizers.workshops_and_tutorials_chairs_description",
    members: [
      {
        name: "Sandra Nava",
        affiliation: "Universidad Autónoma de San Luis Potosí",
        short: "UASLP",
      },
      {
        name: "Juan Pablo García Vázquez",
        affiliation: "Universidad Autónoma de Baja California",
        short: "UABC",
      },
    ],
  },
  {
    id: "tutoriales",
    title: "Tutoriales",
    descriptionKey: "organizers.workshops_and_tutorials_chairs_description",
    members: [
      {
        name: "José Ángel González Fraga",
        affiliation: "Universidad Autónoma de Baja California",
        short: "UABC",
      },
      {
        name: "Tony García Macías",
        affiliation:
          "Centro de Investigación Científica y de Educación Superior de Ensenada",
        short: "CICESE",
      },
    ],
  },
  {
    id: "panel-chair",
    title: "Panel Chair",
    description: "Responsible for coordinating and moderating panel sessions.",
    members: [
      {
        name: "Pedro C. Santana-Mancilla",
        affiliation: "Universidad de Colima",
        short: "UCOL",
      },
    ],
  },
  {
    id: "industry-session",
    title: "Sesión Industrial",
    titleKey: "organizers.industry_session_chair_title",
    descriptionKey: "organizers.industry_session_chair_description",
    members: [
      {
        name: "Victor García",
        affiliation: "BBVA",
        short: "",
      },
      {
        name: "Jessica Beltrán",
        affiliation: "Universidad Autónoma de Coahuila",
        short: "U. A. Coahuila",
      },
      {
        name: "Viridiana Silva",
        affiliation: "Daikin Applied Americas",
        short: "",
      },
    ],
  },
  {
    id: "local-chairs",
    title: "Local Chairs",
    titleKey: "organizers.local_chairs_title",
    descriptionKey: "organizers.local_chairs_description",
    members: [
      {
        name: "Karina Caro",
        affiliation: "Universidad Autónoma de Baja California",
        short: "UABC",
      },
      {
        name: "Ana Martínez",
        affiliation:
          "Centro de Investigación Científica y de Educación Superior de Ensenada",
        short: "CICESE",
      },
      {
        name: "Victoria Meza-Kubo",
        affiliation: "Universidad Autónoma de Baja California",
        short: "UABC",
      },
    ],
  },
  {
    id: "registration-chair",
    title: "Registration Chair",
    description:
      "Handles attendee registration logistics, inquiries, and registration process coordination.",
    members: [
      {
        name: "Luis A. Castro",
        affiliation: "Instituto Tecnológico de Sonora",
        short: "ITSON",
      },
    ],
  },
  {
    id: "publicity-chairs",
    title: "Publicity Chairs",
    titleKey: "organizers.publicity_chair_title",
    descriptionKey: "organizers.publicity_chair_description",
    members: [
      {
        name: "Pablo Bautista",
        affiliation: "Universidad de Colima",
        short: "UCOL",
      },
      {
        name: "Pablo M. Schiaffino-Rivas",
        affiliation: "Universidad de Colima",
        short: "UCOL",
      },
    ],
  },
  {
    id: "web-chair",
    title: "Web Chair",
    titleKey: "organizers.web_chairs_title",
    descriptionKey: "organizers.web_chairs_description",
    members: [
      {
        name: "Miguel A. Rodríguez-Ortíz",
        affiliation: "Universidad de Colima",
        short: "UCOL",
      },
    ],
  },
];

const programCommittee = [
  ["Abraham Flores Vergara", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Adriana Lorena Iñiguez Carrillo", "Universidad de Guadalajara, México"], ["Ana Isabel Martínez García", "CICESE, México"], ["Ángel G. Andrade", "UABC, México"], ["Arely Murillo Silva", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Arturo Morales Tellez", "CICESE Unidad Tepic (UAT), México"], ["Asif Uz Zaman Asif", "Colorado State University, USA"], ["Aunnoy K Mutasim", "University of Calgary, Canadá"], ["Aurora Ruiz-Rodríguez", "University of Twente, Países Bajos"], ["Brendan Kelley", "Colorado State University, USA"], ["Camilo Caraveo Mena", "UABC, México"], ["Carlos Alberto Aguilar Avelar", "UABC, México"], ["Carlos Roberto Jaimez González", "UAM, México"], ["Carlos Toxtli", "Clemson University, USA"], ["Carmen Lucía Gómez Sánchez", "Universidad de Guadalajara, México"], ["César Guerra-García", "Autonomous University of San Luis Potosi, México"], ["Cristina Ramírez Fernández", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Dagoberto Cruz Sandoval", "NovaUniversitas, México"], ["Daniel Fajardo-Delgado", "Tecnológico Nacional de México / Campus Cd. Guzmán, México"], ["Darlene González Miy", "Universidad Autónoma de Baja California, México"], ["Elizabeth Sucupira", "unifor, Brasil"], ["Érica Cecilia Ruiz Ibarra", "ITSON, México"], ["Fernando Martínez Reyes", "Universidad Autónoma de Chihuahua, México"], ["Flor Belén Montañez Castillo", "Universidad Autónoma de Baja California, México"], ["Francisco Iván Lepe Salazar", "Ludolab, Japón"], ["Francisco López-Orozco", "Universidad Autónoma de Ciudad Juárez (UACJ), México"], ["Francisco Ortega", "Colorado State University, USA"], ["Gabriela Villalobos-Zúñiga", "University of Lausanne, Suiza"], ["Gilberto Borrego Soto", "ITSON, México"], ["Gladys Carlota Figueroa Valdez", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Hideki García Goo", "University of Twente, Países Bajos"], ["Ismael Edrein Espinosa Curiel", "CICESE, México"], ["Ismael Hernández Capuchin", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Iyubanit Rodríguez", "Universidad de Costa Rica, Costa Rica"], ["Jaime Munoz Arteaga", "Universidad Autónoma de Aguascalientes, México"], ["Jessica Beltrán Márquez", "Universidad Autónoma de Coahuila / Centro de Investigación en Matemáticas Aplicadas, México"], ["Jesús Albany Armenta García", "Universidad Autónoma de Baja California, México"], ["Jesús Favela Vara", "CICESE, México"], ["Jialin Zhang", "University of Calgary, Canadá"], ["José Antonio García Macias", "CICESE, México"], ["José Carlos Mercado Chan", "CICESE, México"], ["Juan Martínez-Miranda", "Centro de Investigación Científica y de Educación Superior de Ensenada, México"], ["Juan Pablo García Vázquez", "Universidad Autónoma de Baja California, México"], ["Julia Elvia Chávez Remigio", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Karina Caro Corrales", "Universidad Autónoma de Baja California, México"], ["Karla Badillo-Urquiola", "University of Notre Dame, USA"], ["Katiuska Fernández Morales", "Independiente"], ["Kissinger Sunday", "Dalhousie University, Canadá"], ["Laura Cabrera-Quirós", "Delft University of Technology, Países Bajos"], ["Leonardo Javier Gutiérrez Miranda", "Sonora Institute of Technology, México"], ["Leonel Vinicio Morales Díaz", "Universidad Francisco Marroquín, Guatemala"], ["Leticia Cervántes Huerta", "UABC, México"], ["Lizbeth Escobedo Bravo", "Dalhousie University, Canadá"], ["Luis Adrián Castro Quiroa", "ITSON, México"], ["Luis Miguel Zamudio Fuentes", "Instituto Politécnico Nacional-CITEDI, México"], ["Luis-Felipe Rodríguez", "Instituto Tecnológico de Sonora, México"], ["Manuel Alejandro Quintana García", "ITSON, México"], ["María Berenice Fong Mata", "UABC, México"], ["María del Rosario Peralta Calvo", "Universidad de la Cañada, México"], ["María Guadalupe Sánchez Cervantes", "TecNM/Instituto Tecnológico de Cd. Guzmán, México"], ["María Inés Laitano", "Université Paris 8, Francia"], ["María Victoria Meza Kubo", "Universidad Autónoma de Baja California, México"], ["Mario Alberto Moreno Rocha", "UTM, México"], ["Mario Enrique Osuna Cuen", "Instituto Tecnológico de Sonora, México"], ["Mario Parra", "CICESE, México"], ["Marisol Murillo Solís", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Martín Gildardo Salido Ortega", "ITSON, México"], ["Miguel A. Rodríguez-Ortiz", "Universidad de Colima, México"], ["Miguel Ángel Sidón Ayala", "Tecnológico Nacional de México/I. T. Ensenada, México"], ["Mónica Tentori Espinosa", "CICESE, México"], ["Norma Candolfi Arballo", "UABC, México"], ["Oleksiy Levchuk", "CICESE, México"], ["Oscar Mario Rodríguez Elias", "Tecnológico Nacional de México/I. T. Hermosillo, México"], ["Pablo A. Alcaraz-Valencia", "Universidad de Colima, México"], ["Paulina Becerril Palma", "University of Bergen, Noruega"], ["Pedro César Santana Mancilla", "Universidad de Colima, México"], ["Prashant Rawat", "Dalhousie University, Canadá"], ["Ramón René Palacio Cinco", "ITSON, México"], ["Raúl Casillas Figueroa", "Universidad Autónoma de Baja California, México"], ["Raymundo Cornejo García", "Universidad Autónoma de Chihuahua, México"], ["Ricardo Acosta Díaz", "Universidad de Colima, México"], ["Roberto Martinez-Maldonado", "Monash University, Australia"], ["Saiph Savage", "Universidad Nacional Autónoma de México (UNAM), México"], ["Samantha Paulina Jiménez Calleros", "UABC, México"], ["Samuel González López", "Tecnológico Nacional de México/I. T. Nogales, México"], ["Sandra Nava Muñoz", "Universidad Autónoma de San Luis Potosí, México"], ["Sergio F. Ochoa", "University of Chile, Chile"], ["Sergio Zepeda", "Universidad Autónoma Metropolitana, México"], ["Silvia Karina Reyes Lio", "Tecnológico Nacional de México/I. T. Nogales, México"], ["Valeria Soto-Mendoza", "Centro de Investigación en Matemáticas Aplicadas, México"], ["Víctor Daniel Aréchiga Cabrera", "Universidad de Guadalajara, México"], ["Zahra Borhani", "Colorado State University, USA"]
].map(([name, affiliation]) => ({ name, affiliation }));

const committeeLinks = [
  {
    label: t("organizers.general_committee_link"),
    to: Tr.i18nRoute({ name: "organizers", hash: "#general-committee" }),
  },
  {
    label: t("organizers.program_committee_link"),
    to: Tr.i18nRoute({ name: "organizers", hash: "#program-committee" }),
  },
];

const memberPhoto = (name) => photoByName[name] || fallbackPhoto;

const affiliationText = (affiliation, short) => {
  if (!short) {
    return affiliation;
  }
  return `${affiliation} (${short})`;
};

const getLocalizedText = (key, fallback = "") => {
  if (!key) {
    return fallback;
  }
  return te(key) ? t(key) : fallback;
};
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("organizers.title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-lg-8">
          <InPageNavigationPanel :links="committeeLinks" />
          <p>{{ $t("organizers.intro") }}</p>
          <h2
            id="general-committee"
            class="text-primary text-gradient text-center py-4"
          >
            {{ $t("organizers.general_committee_title") }}
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
                  {{
                    getLocalizedText(
                      section.descriptionKey,
                      section.description || "",
                    )
                  }}
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
                        />
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
        <hr />
      </div>
    </div>
  </section>

  <section class="container">
    <div class="row justify-content-center my-3">
      <div class="col-lg-8">
        <h2
          id="program-committee"
          class="text-center py-4 mt-5"
          style="color: #011638"
        >
          {{ $t("organizers.program_committee_title") }}
        </h2>
        <p class="text-center text-secondary">{{ programCommittee.length }} {{ $t("organizers.program_committee_members") }}</p>
        <div class="program-committee-list">
          <article v-for="member in programCommittee" :key="member.name" class="program-committee-member">
            <strong>{{ member.name }}</strong>
            <span>{{ member.affiliation }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.program-committee-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; margin-top: 1.5rem; text-align: left; }
.program-committee-member { border: 1px solid var(--bs-gray-300); border-radius: 0.5rem; padding: 0.8rem 1rem; background: #fff; }
.program-committee-member strong, .program-committee-member span { display: block; }
.program-committee-member strong { color: #011638; }
.program-committee-member span { margin-top: 0.25rem; color: #6c757d; font-size: 0.9rem; line-height: 1.3; }
@media (max-width: 767.98px) { .program-committee-list { grid-template-columns: 1fr; } }
</style>
