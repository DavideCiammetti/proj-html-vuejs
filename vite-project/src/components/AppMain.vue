<script>
import SectionOne from '../components/ElementiMain/Section1/SectionOne.vue';
import SectionTwo from './ElementiMain/section2/SectionTwo.vue';
import SectionThree from './ElementiMain/section3/SectionThree.vue';
import SectionFour from './ElementiMain/section4/SectionFour.vue';

   export default {
        name:'main',
          components:{
               SectionOne,
               SectionTwo,
               SectionThree,
               SectionFour,
          }
    }

</script>

<template>
    <main>
     <SectionOne></SectionOne>
     <SectionTwo></SectionTwo>
     <SectionThree></SectionThree>
     <SectionFour></SectionFour>
    </main>
</template>

<style scoped>
</style>
