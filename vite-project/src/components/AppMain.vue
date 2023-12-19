<script>
import SectionOne from '../components/ElementiMain/Section1/SectionOne.vue';
import SectionTwo from './ElementiMain/section2/SectionTwo.vue';
   export default {
        name:'main',
          components:{
               SectionOne,
               SectionTwo,
          }
    }

</script>

<template>
    <main>
     <SectionOne></SectionOne>
     <SectionTwo></SectionTwo>
    </main>
</template>

<style scoped>
</style>
