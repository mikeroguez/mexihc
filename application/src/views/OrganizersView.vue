<script setup>
import TheHeader from '@/components/Header.vue';
import OrganizerItem from '@/components/OrganizerItem.vue';
import Tr from '@/i18n/translation'
</script>

<script>
export default {
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("organizers.title") }}
        </template>
    </TheHeader>

    <section>
        <div class="container">
            <div class="row">
                <div class="row justify-content-center my-3">
                    <div class="col-lg-8">
                        <ol class="list-group list-group-numbered mb-4">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink
                                            :to="Tr.i18nRoute({ name: 'organizers', hash: '#general-committee' })"
                                            class="uline">
                                            {{ $t("organizers.general_committee_link") }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink
                                            :to="Tr.i18nRoute({ name: 'organizers', hash: '#program-committee' })"
                                            class="uline">
                                            {{ $t("organizers.program_committee_link") }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </li>
                        </ol>

                        <p>
                            {{ $t("organizers.intro") }}
                        </p>
                        <h2 id="general-committee" class="text-primary text-gradient text-center py-4">{{
                            $t("organizers.general_committee_title") }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container">
        <div class="row">
            <div class="col-lg-12 mx-auto">

                <div class="container mt-4 px-5 mt-6" id="program-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.conference_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.conference_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Alberto L. Morán
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Baja California (UABC)
                                        </template>
                                        <template #email>
                                            General Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/jesus_fa.jpg" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/jesus_fa.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Jesús Favela
                                        </template>
                                        <template #institution>
                                            Centro de Investigación Científica y de Educación Superior de Ensenada (CICESE)
                                        </template>
                                        <template #email>
                                            General Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/sanely.jpg" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/sanely.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Laura S. Gaytán-Lugo
                                        </template>
                                        <template #institution>
                                            Universidad de Colima (UCOL)
                                        </template>
                                        <template #email>
                                            General Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="program-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.program_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.program_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/adriana.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Adriana L. Iñiguez-Carrillo
                                        </template>
                                        <template #institution>
                                            Universidad de Guadalajara (UdG)
                                        </template>
                                        <template #email>
                                            Program Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Mayra Donaji Barrera-Machuca
                                        </template>
                                        <template #institution>
                                            University of Calgary (UCalgary)
                                        </template>
                                        <template #email>
                                            Program Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Marcela D. Rodríguez
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Baja California (UABC)
                                        </template>
                                        <template #email>
                                            Program Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Hidden committee blocks per update request -->

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.publicity_chair_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.publicity_chair_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/pablo.jpg" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/pablo.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Pablo Bautista
                                        </template>
                                        <template #institution>
                                            Universidad de Colima (UCOL)
                                        </template>
                                        <template #email>
                                            Publicity Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Pablo M. Schiaffino-Rivas
                                        </template>
                                        <template #institution>
                                            Universidad de Colima (UCOL)
                                        </template>
                                        <template #email>
                                            Publicity Chairs
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="web-chair">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.web_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.web_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/mike.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/mike.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Miguel A. Rodríguez-Ortiz
                                        </template>
                                        <template #institution>
                                            Universidad de Colima (UCOL)
                                        </template>
                                        <template #email>
                                            Web Chair
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Hidden committee blocks per update request -->
                <p class="mt-5">
                    <RouterLink :to="Tr.i18nRoute({ name: 'organizers', hash: '#top' })" class="uline">
                        {{ $t("nav.back_to_top") }}
                    </RouterLink>
                </p>
                <hr>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8">
                    <h2 id="program-committee" class="text-center py-4 mt-5" style="color: #011638;">
                        {{ $t("organizers.program_committee_title") }}
                    </h2>


                    <!--
                    <table class="table table-striped text-center align-middle w-100" style="table-layout: fixed;">
                        <thead>
                            <tr>
                                <th scope="col">{{ $t("organizers.name") }}</th>
                                <th scope="col">{{ $t("organizers.institution") }}</th>
                                <th scope="col">{{ $t("organizers.country") }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adriana Lorena Iñiguez Carrillo</td>
                                <td>Universidad de Guadalajara</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Ana Isabel Martínez García</td>
                                <td>CICESE</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Arturo Morales-Tellez</td>
                                <td>CICESE</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Aurora Ruiz-Rodríguez</td>
                                <td>University of Twente</td>
                                <td>The Netherlands</td>
                            </tr>
                            <tr>
                                <td>Carlos Toxtli</td>
                                <td>Clemson University</td>
                                <td>USA</td>
                            </tr>
                            <tr>
                                <td>Cristina Ramírez Fernández</td>
                                <td>Tecnológico Nacional de México</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Franceli L. Cibrian</td>
                                <td>Chapman University</td>
                                <td>USA</td>
                            </tr>
                            <tr>
                                <td>Gilberto Borrego Soto</td>
                                <td>ITSON</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Gloria Ivonne Monarca Pintle</td>
                                <td>Sperentia</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>J. Antonio Garcia-Macias</td>
                                <td>CICESE</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Jesús Adolfo Mejía de Dios</td>
                                <td>Universidad Autónoma de Coahuila</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Jesus Favela</td>
                                <td>CICESE</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>José Mercado Chan</td>
                                <td>CICESE</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Juan Pablo García Vázquez</td>
                                <td>UABC</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Karina Caro</td>
                                <td>UABC</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Laura Sanely Gaytán Lugo</td>
                                <td>Universidad de Colima</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Lizbeth Escobedo</td>
                                <td>Dalhousie University</td>
                                <td>Canada</td>
                            </tr>
                            <tr>
                                <td>Luis A. Castro</td>
                                <td>ITSON</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Marcela D. Rodríguez</td>
                                <td>UABC</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>María Del Rosario Peralta Calvo</td>
                                <td>Universidad de la Cañada</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Mario Moreno</td>
                                <td>Universidad de la Mixteca</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Pablo Armando Alcaraz Valencia</td>
                                <td>Universidad de Colima</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Ramón René Palacio Cinco</td>
                                <td>ITSON</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Raymundo Cornejo</td>
                                <td>UACH</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Saiph Savage</td>
                                <td>Northeastern University</td>
                                <td>USA</td>
                            </tr>
                            <tr>
                                <td>Sandra Nava-Muñoz</td>
                                <td>UASLP</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Silvia Berenice Fajardo Flores</td>
                                <td>Universidad de Colima</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Soraia Silva Prietch</td>
                                <td>Universidade Federal de Mato Grosso</td>
                                <td>Brazil</td>
                            </tr>
                            <tr>
                                <td>Valeria Soto-Mendoza</td>
                                <td>UAdeC</td>
                                <td>Mexico</td>
                            </tr>
                        </tbody>
                    </table>
                    -->
                    <p class="text-center">
                        <em>{{ $t("nav.coming_soon") }}</em>
                    </p>

                    <p>
                        <RouterLink :to="Tr.i18nRoute({ name: 'organizers', hash: '#top' })" class="uline">
                            {{ $t("nav.back_to_top") }}
                        </RouterLink>
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>
