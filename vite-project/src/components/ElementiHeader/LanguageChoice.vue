<script>
import { store } from '../../store';

    export default {
        name:' languageChoice',

            data(){
                return{
                    store,
                }
            }
    }

</script>

<template>
    <div>
        <select name="language" id="languages">
            <option v-for="languages in this.store.headerDataConfig.language" :value="languages">{{languages}}</option>
        </select>
    </div>
</template>
   
<style scoped>
</style>
