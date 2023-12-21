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

                    <div class="img margin-t-b">
                        <img :src="this.store.footDataConfig.images.img2" alt="woman1">
                    </div>
                    <div>
                        <p class="text-description">Our main target is to <br>
                            "Developing Yourself as <br>
                            a Leader"
                        </p>
                        <p class="date">
                            -August 9, 2018
                        </p>
                    </div>
               </div>
            </li>

            <li class="blog-list">
                <div class="d-flex align-items">
                    <div class="img m-b-40">
                        <img :src="this.store.footDataConfig.images.img1" alt="img">
                    </div>
                    <div class="m-b-40">
                        <p class="text-description">Those Other College<br>
                            Expenses you Aren't<br>
                            Thinking About
                        </p>
                        <p class="date">
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
        margin: 0 20px 0 35px;
    }
    .margin-t-b{
        margin-top: 28px;
        margin-bottom: 22px;
    }
    .title{
        margin-left: 33px;
    }
    .text-description{
        color: #aaaaaa;
        font-size: 12px;
        font-weight: 600;
    }
    .date{
        color: #d8d8d8;
        font-size: 11px;
    }
    .m-b-40{
        margin-bottom: 40px;
    }
</style>
