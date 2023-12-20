<script>
import MatrialsList from './MatrialsList.vue';
import MaterialsGrid from './MaterialsGrid.vue';

   export default {
        name:'SectioThree',
            components:{
                MatrialsList,
                MaterialsGrid,
            }
    }

</script>

<template>
    <section id="section-three">
        <div>
            <h3>Recent courses</h3>
        </div>
        <MatrialsList></MatrialsList>
        <MaterialsGrid></MaterialsGrid>
    </section>
</template>

<style scoped lang="scss">
    #section-three{
        display: flex;
        flex-direction: column;
        align-items: center;
            h3{
                font-size: 2.8125rem;
                font-weight: 100;
            }
    }
</style>
