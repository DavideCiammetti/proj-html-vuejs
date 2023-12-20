<script>
import { store } from '../../store';

   export default {
        name:'Blog',
        data(){
            return{
                store,
            }
        },
    }

</script>

<template>
    <div class="blog-container">
        <ul>
            <li class="blog-list title">
                <h4>Blog</h4>
            </li>
            <li class="blog-list" >
               <div class="d-flex align-items">
                    <div class="img">
                        <img :src="this.store.footDataConfig.images.img2" alt="woman1">
                    </div>
                    <div>
                        <p>Our main target is to <br>
                            "Developing Yourself as <br>
                            a Leader"
                        </p>
                        <p>
                            -August 9, 2018
                        </p>
                    </div>
               </div>
            </li>

            <li class="blog-list">
                <div class="d-flex align-items">
                    <div class="img">
                        <img :src="this.store.footDataConfig.images.img1" alt="img">
                    </div>
                    <div >
                        <p>Those Other College<br>
                            Expenses you Aren't<br>
                            Thinking About
                        </p>
                        <p>
                            - June 3, 2015
                        </p>
                    </div>
               </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

    ul{
        list-style: none;
    }
    .d-flex{
        display: flex;
    }
    .align-items{
        align-items: center;
    }   
    img{
        width: 76px;
    }
    .img{
        margin: 28px 20px 22px 35px;
    }
    .title{
        margin-left: 33px;
    }
</style>
