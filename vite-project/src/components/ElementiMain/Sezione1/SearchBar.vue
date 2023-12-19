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
    <div>
        <input type="search" id="n-search" name="newSeacrh">
        <div>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
