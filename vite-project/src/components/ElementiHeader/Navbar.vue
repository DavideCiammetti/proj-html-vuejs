<script>
import SocialListNav from './SocialListNav.vue';
import ButtonNav from './ButtonNav.vue';
import { store } from '../../store';

    export default {
        name:'navbar',
            components:{
                SocialListNav,
                ButtonNav,
            },

            data(){
                return{
                    store,
                }
            }
    }

</script>

<template>
    <div class="nav-container">
       <nav class="navbar">
            <ul>
                <!-- prendo doppio button dal componente ButtonNav.vue -->
                <ButtonNav class="over-zoom"></ButtonNav>
                <ButtonNav class="over-add"></ButtonNav>
                <!-- ciclo for per prendere gli elementi del menu -->
                <li v-for="items in this.store.headerDataConfig.itemsMenu" class="menu-list" ><a href="#">{{ items }}</a></li>
            </ul>
       </nav>
       <!-- icone social -->
       <SocialListNav></SocialListNav>
    </div>
</template>
   
<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;
    .nav-container{
        display: flex;
            a{
                font-size: .875rem;
                color: $col-nav-text;
            }
    }
    ul{
        display: flex;
        list-style: none;
        position: relative;
            .menu-list{
               margin-right: 1.875rem; 
            }
    }
    // button 
    .over-add{
        position: absolute;
        right: 16%;
        bottom: 16px;
    }
    .over-zoom{
        bottom: 16px;
        position: absolute;
        left: 16%;
    }
</style>
