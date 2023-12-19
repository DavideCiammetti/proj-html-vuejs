<script>
import MenuContainer from './MenuContainer.vue';
export default{
    name: 'App',

    components:{
        MenuContainer,
    }
}
</script>

<template>
     <section id="section-one">
        <MenuContainer></MenuContainer>
    </section>
</template>

<style scoped lang="scss">
    #section-one{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
