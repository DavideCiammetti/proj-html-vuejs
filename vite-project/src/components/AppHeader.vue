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
    <header id="header">
        <LanguageChoice></LanguageChoice>
        <Navbar></Navbar>
    </header>
</template>
   
<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

    #header{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #e2e2e2;
        padding: 15px;
    }
</style>