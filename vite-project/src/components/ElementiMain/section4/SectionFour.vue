<script>
import TitleSectionFour from './TitleSectionFour.vue';
import Statistics from './Statistics.vue';
import SubscribeComponent from './SubscribeComponent.vue'

export default{
    name: 'SectionFour',
        components:{
            TitleSectionFour,
            Statistics,
            SubscribeComponent,
        }
}
</script>

<template>
    <section id="section-four">
        <!-- titolo e paragrafo -->
        <TitleSectionFour></TitleSectionFour>
       <div class="info-container">
        <!-- statistiche sopra la foto  -->
            <Statistics></Statistics>
       </div>
       <!-- riga verde per l'iscrizione -->
       <SubscribeComponent></SubscribeComponent>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.info-container{
    background: url('./../../../../../src/assets/img/img-section-4/we_proud.png');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    background-color: $col-bg-sec;
    height: 22vw;
}
</style>
