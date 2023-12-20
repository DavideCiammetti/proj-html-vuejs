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
        <TitleSectionFour></TitleSectionFour>
       <div class="info-container">
            <Statistics></Statistics>
       </div>
       <SubscribeComponent></SubscribeComponent>
    </section>
</template>

<style scoped lang="scss">
.info-container{
    background: url('./../../../../../src/assets/img/img-section-4/we_proud.png');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    background-color: #f0f4fa;
    height: 22vw;
}
</style>
