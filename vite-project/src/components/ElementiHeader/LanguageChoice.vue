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
        <select name="language" id="languages" class="select-lang">
            <!-- ciclo for che prende in store elementi header -->
            <option v-for="languages in this.store.headerDataConfig.language" :value="languages" class="option-lang"><a href="#">{{languages}}</a></option>
        </select>
    </div>
</template>
   
<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

    .select-lang{
        font-size: .75rem;
        border: none;
        outline: none;
        color: $col-nav-text;
    }
</style>
