<script>
import MatrialsList from './MatrialsList.vue';
import MaterialsGrid from './MaterialsGrid.vue';
import DropRightMenu from './DropRightMenu.vue';

   export default {
        name:'SectioThree',
            components:{
                MatrialsList,
                MaterialsGrid,
                DropRightMenu,
            }
    }

</script>

<template>
    <section id="section-three">
        <div>
            <h3>Recent courses</h3>
        </div>
        <!-- lista delle materie  -->
        <MatrialsList></MatrialsList>
         <!-- griglia delle materie  -->
        <MaterialsGrid></MaterialsGrid>
        <!-- drop-right menu -->
        <DropRightMenu></DropRightMenu>
        <div class="but-container">
            <input type="button" class="butt" value="SHOW ALL">
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    #section-three{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
            h3{
                font-size: 2.8125rem;
                font-weight: 100;
            }
            .but-container{
                margin: 5rem 0 6.8125rem 0;
                .butt{
                    padding: .875rem 1.4375rem;
                    border: none;
                    outline: none;
                    background-color: $blue-600-search;
                    border-radius: 2.1875rem;
                    color: $white;
                }
            }
    }
</style>
