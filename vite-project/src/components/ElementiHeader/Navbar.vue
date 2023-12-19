<script>
import SocialListNav from './SocialListNav.vue';
import { store } from '../../store';

    export default {
        name:'navbar',
            components:{
                SocialListNav,
            },

            data(){
                return{
                    store,
                }
            }
    }

</script>

<template>
    <div>
       <nav class="navbar">
            <ul>
                <li class="menu-list" v-for="items in this.store.headerDataConfig.itemsMenu">{{ items }}</li>
            </ul>
       </nav>
       <SocialListNav></SocialListNav>
    </div>
</template>
   
<style scoped>
</style>
