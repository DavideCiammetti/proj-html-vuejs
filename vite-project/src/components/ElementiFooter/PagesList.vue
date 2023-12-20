<script>
import { store } from '../../store';

   export default {
        name:'Pages',
        data(){
            return{
                store,
            }
        },
    }

</script>

<template>
        <div class="pages-container">
            <ul>
                <li class="pag-list list-none">
                    <h4>Pages</h4>
                </li>
                <li class="pag-list">{{ this.store.footDataConfig.pages.blog}}</li>
                <li class="pag-list">{{ this.store.footDataConfig.pages.home}}</li>
                <li class="pag-list">{{ this.store.footDataConfig.pages.short}}</li>
            </ul>
            <ul>
                <li class="pag-list">{{ this.store.footDataConfig.pages.courses}}</li>
                <li class="pag-list">{{ this.store.footDataConfig.pages.membership}}</li>
                <li class="pag-list">{{ this.store.footDataConfig.pages. typography}}</li>
            </ul>
        </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

.list-none{
    list-style: none;
}
.pages-container{
    display: flex;
}

</style>
