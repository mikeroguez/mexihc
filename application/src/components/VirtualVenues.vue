<script>
import Tr from '@/i18n/translation'
import SponsorItem from '@/components/SponsorItem.vue'

export default {
    components: {
        SponsorItem
    },    
    setup() {
        return { Tr }
    }
}
</script>
<template>
    <section>
        <div class="container mt-5" id="specialThanks">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>{{ $t("home.virtual_venues") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("home.virtual_venues_message") }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row">                      

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/usjo.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/usjo.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                Universidad de la Sierra Juárez
                            </template>
                        </SponsorItem> 

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/uaslp.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/uaslp.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                Facultad de Ingeniería, Universidad Autónoma de San Luis Potosí
                            </template>
                        </SponsorItem>                    

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>