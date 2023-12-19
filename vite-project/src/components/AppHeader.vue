<script>
import LanguageChoice from './ElementiHeader/LanguageChoice.vue'
import Navbar from './ElementiHeader/Navbar.vue';

    export default {
        name:' Headers',

            components:{
                LanguageChoice,
                Navbar,
            }
    }

</script>

<template>
    <LanguageChoice></LanguageChoice>
    <Navbar></Navbar>
</template>
   
<style scoped>
</style>