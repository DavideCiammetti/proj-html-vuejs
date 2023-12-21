<script>
import Categories from './Categories.vue';
   export default {
        name:'searchBar',
            components:{
                Categories,
            }
    }

</script>

<template>
    <Categories></Categories>
    <div class="main-search-container">
        <div class="search-container">
            <label for="serach">Search Courses</label>
            <input type="search" id="n-search" name="newSeacrh"  placeholder="Search Courses" class="search-input">
        </div>
        <div>
            <div class="ico-search-container">
                <span class="ico-search">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="ico"/>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    .main-search-container{
        display: flex;
        align-items: center;
        margin-right: 2.8125rem;
            .search-container{
                label[for="serach"]{
                    display:none;
                }
                .search-input{
                    padding: .9375rem;
                    border: none;
                    outline: none;
                    background-color: $bg-input;
                    width: 20vw;
                }
            }
            .ico-search-container{
                    background-color: $blue-600-search;
                    padding: .7562rem 1.375rem;
                .ico-search{
                    position: relative;
                    top: 25%;
                }
                .ico{
                    color: $white;
                }
            }
    }
</style>
