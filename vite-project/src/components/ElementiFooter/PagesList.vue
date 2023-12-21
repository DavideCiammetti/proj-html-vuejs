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
                <li class="pag-list p-relative">
                    <h4>Pages</h4>
                </li>
                <li class="pag-list bullet-1 line-h">{{ this.store.footDataConfig.pages.blog}}</li>
                <li class="pag-list bullet-1 line-h">{{ this.store.footDataConfig.pages.home}}</li>
                <li class="pag-list bullet-1 line-h">{{ this.store.footDataConfig.pages.short}}</li>
            </ul>
            <ul class="margin-t-50 margin-l-41">
                <li class="pag-list bullet-2 line-h">{{ this.store.footDataConfig.pages.courses}}</li>
                <li class="pag-list bullet-2 line-h">{{ this.store.footDataConfig.pages.membership}}</li>
                <li class="pag-list bullet-2 line-h">{{ this.store.footDataConfig.pages. typography}}</li>
            </ul>
        </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

ul{
    list-style: none;
    position: relative;
}
.pages-container{
    display: flex;
}
.p-relative{
    position: relative;
    margin-bottom: 28px;
    right: 14%;
}
.pag-list{
    color: $title-bg;
}
.margin-t-50{
    margin-top: 46px;
}
.margin-l-41{
    margin-left: 41px;
}
.line-h{
    line-height: 2;
}
// inserimento bullet accanto alla lista
ul .bullet-1::before {
    content: "•";
    position: absolute;
    left: -11px;
    margin-top: 3.5px;
}
ul .bullet-2::before {
    content: "•";
    position: absolute;
    left: -11px;
    margin-top: 3.5px;
}
</style>
