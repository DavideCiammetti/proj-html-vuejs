<script>
import MenuContainer from '../Section1/MainMenuItems/MenuContainer.vue';
import CentralContainer from './centralComponentsSec1/CentralContainer.vue';
import Grid from './Grid.vue';

export default{
    name: 'App',

    components:{
        MenuContainer,
        CentralContainer,
        Grid,
    }
}
</script>

<template>
     <section id="section-one">
        <MenuContainer></MenuContainer>
        <CentralContainer></CentralContainer>
        <Grid></Grid>
    </section>
</template>

<style scoped lang="scss">
    #section-one{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
