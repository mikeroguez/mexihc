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
                                                <img src="/assets/img/people/jessica.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/jessica.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Jessica Beltrán
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Coahuila, MX
                                        </template>
                                        <template #email>
                                            chairs.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/dagoberto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/dagoberto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Dagoberto Cruz
                                        </template>
                                        <template #institution>
                                            University of California San Diego, USA
                                        </template>
                                        <template #email>
                                            chairs.2024@mexihc.org
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
                                                <img src="/assets/img/people/pedro.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/pedro.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Pedro C. Santana-Mancilla
                                        </template>
                                        <template #institution>
                                            Universidad de Colima, MX
                                        </template>
                                        <template #email>
                                            tpc.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/vicky.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/vicky.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Victoria Meza-Kubo
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Baja California, MX
                                        </template>
                                        <template #email>
                                            tpc.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/monica.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/monica.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Mónica Tentori
                                        </template>
                                        <template #institution>
                                            CICESE, México
                                        </template>
                                        <template #email>
                                            tpc.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-4 px-5 mt-6" id="registration-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.graduate_colloquium_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.graduate_colloquium_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/valeria.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/valeria.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Valeria Soto
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Coahuila, MX
                                        </template>
                                        <template #email>
                                            gc.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/raymundo.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/raymundo.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Raymundo Cornejo
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Chihuahua
                                        </template>
                                        <template #email>
                                            gc.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="sdc-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.student_design_competition_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.student_design_competition_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/carlos.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/carlos.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Carlos Toxtli
                                        </template>
                                        <template #institution>
                                            Clemson University, USA
                                        </template>
                                        <template #email>
                                            sdc.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/niels.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/niels.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Niels Martínez
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Coahuila, MX
                                        </template>
                                        <template #email>
                                            sdc.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="workshops_and_tutorials-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.workshops_and_tutorials_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/rene.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/rene.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            René Navarro
                                        </template>
                                        <template #institution>
                                            UNISON, MX
                                        </template>
                                        <template #email>
                                            ws.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>

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
                                            Adriana Iñiguez
                                        </template>
                                        <template #institution>
                                            Universidad de Guadalajara, MX
                                        </template>
                                        <template #email>
                                            ws.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="posters-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.posters_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.posters_chairs_description") }}
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/adolfo.jpg" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/adolfo.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Adolfo Mejía
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Coahuila
                                        </template>
                                        <template #email>
                                            posters.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/jose.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/jose.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            José Mercado Chan
                                        </template>
                                        <template #institution>
                                            CICESE-UT3, MX
                                        </template>
                                        <template #email>
                                            posters.2024@mexihc.org
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
                                            Sanely Gaytán
                                        </template>
                                        <template #institution>
                                            Universidad de Colima
                                        </template>
                                        <template #email>
                                            posters.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                                <img src="/assets/img/people/arturo.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/arturo.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Arturo Morales
                                        </template>
                                        <template #institution>
                                            CICESE, México
                                        </template>
                                        <template #email>
                                            publicity.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
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
                                        </template>
                                        <template #email>
                                            publicity.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/rosario.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/rosario.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Rosario Peralta
                                        </template>
                                        <template #institution>
                                            UNCA, MX
                                        </template>
                                        <template #email>
                                            publicity.2024@mexihc.org
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
                                            Universidad de Colima, MX
                                        </template>
                                        <template #email>
                                            web.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-4 px-5 mt-6" id="registration-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.registration_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.registration_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/luis.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/luis.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Luis Castro
                                        </template>
                                        <template #institution>
                                            ITSON, MX
                                        </template>
                                        <template #email>
                                            registration.2024@mexihc.org
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5" id="industry-day">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.industry_session_chair_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.industry_session_chair_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row p-0">

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/arian.jpg" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/arian.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Arian Martínez
                                        </template>
                                        <template #institution>
                                            Microsoft, USA
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 m-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/victor.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/victor.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Victor García
                                        </template>
                                        <template #institution>
                                            BBVA, MX
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mt-5">
                        <RouterLink :to="Tr.i18nRoute({ name: 'organizers', hash: '#top' })" class="uline">
                            {{ $t("nav.back_to_top") }}
                        </RouterLink>
                    </p>
                    <hr>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8">
                    <h2 id="program-committee" class="text-primary text-gradient text-center py-4 mt-5">
                        {{ $t("organizers.program_committee_title") }}
                    </h2>


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