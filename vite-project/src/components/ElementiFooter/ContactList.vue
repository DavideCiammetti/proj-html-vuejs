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
                <h5>Contact</h5>
            </li>
            <li class="contact-list">
                <p>
                    Usa, California 20, First Avenue, <br>
                    California
                </p>
            </li>
            <li class="contact-list" v-for="foot in this.store.footDataConfig.contact">{{ foot }}</li>
            <li class="contact-list col-grey">
                    info@masterstudy.com
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

ul{
    list-style: none;
}

</style>
