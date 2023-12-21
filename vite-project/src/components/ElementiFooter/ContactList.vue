<script>
import { store } from '../../store';

   export default {
        name:'Contact',
        data(){
            return{
                store,
            }
        }
    }

</script>

<template>
    <div class="contact-container">
        <ul>
            <li class="contact-list">
                <h4>Contact</h4>
            </li>
            <li class="contact-list  mar-b-t">
                <p class="line-h">
                    Usa, California 20, First Avenue, <br>
                    California
                </p>
            </li>
            <li class="contact-list" v-for="foot in this.store.footDataConfig.contact">{{ foot }}</li>
            <li class="contact-list info-mail">
                    info@masterstudy.com
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;
.contact-container{
    margin-right: 100px;
    margin-left: 36px;
    ul{
        list-style: none;
    }
    .mar-b-t{
        margin-bottom: 30px;
        margin-top: 33px;
    }
    .contact-list{
        color: $title-bg;
    }
    .line-h{
        line-height: 1.6;
    } 
    .info-mail{
        margin-top: 23px;
        color: #a3a3a3;
    }
}

</style>
