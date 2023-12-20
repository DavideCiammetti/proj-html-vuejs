<script>
import TitleSectionFour from './TitleSectionFour.vue';
import Statistics from './Statistics.vue';

export default{
    name: 'Subscribe',
}
</script>

<template>
    <!-- title -->

    <div class="subscribe-container">
        <div class="m-62">
            <div>
                <h5 class="m-b-21">Subscribe our newseletter</h5>
            </div>

            <div>
                <p class="f-size">
                    There are variations of passeges of Lorem Ipsum available, but the majority have <br>
                    suffered alteration in some form, by injected humour, or randomised words
                </p>
            </div>
        </div>
        <!-- container -->
        <div class="main-search-container">
            <!-- input -->
            <div class="search-container">
                <p class="m-b-21">YOUR E-MAIL ADDRESS</p>
                <label for="serach">YOUR E-MAIL ADDRESS</label> 
               <input type="search" id="n-search" name="newSeacrh"  placeholder="Search Courses" class="search-input">
            </div>
            <!-- icona lente -->
            <div>
                <div class="ico-search-container">
                    <span class="ico-search">
                       SUBSCRIBE
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.subscribe-container{
    display: flex;
    justify-content: center;
    padding: 3.8125rem 0;
    background-color: #4ed7a8;
    margin-bottom: 8.125rem;
    // debug
}
    .main-search-container{
        display: flex;
        align-items: center;
        margin-right: 2.8125rem;
            .search-container{
                label[for="serach"]{
                    display:none;
                }
                .search-input{
                    padding: 17px 0 14px 13px;
                    border: none;
                    outline: none;
                    background-color: #f0f2f5;
                    width: 20vw;
                }
            }
            .ico-search-container{
                background-color: $blue-600-search;
                padding: 12px 22px;
                margin-top: 42px;
            }
    }
    .m-62{
        margin-right: 62px;
    }
    h5{
        font-size: 1.2vw;
    }
    .f-size{
        font-size: 1vw;
    }
    .m-b-21{
        margin-bottom: 1.3125rem;
    }
    h5, span, p{
        color: white;
    }
</style>
