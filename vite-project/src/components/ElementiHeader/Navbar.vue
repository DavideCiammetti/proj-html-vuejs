<script>
import { store } from '../../store';

    export default {
        name:'navbar',

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
    </div>
</template>
   
<style scoped>
</style>
