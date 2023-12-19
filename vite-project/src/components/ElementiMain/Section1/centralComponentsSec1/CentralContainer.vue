<script>
import MainTitle from './MainTitle.vue';
import Image from './Image.vue';
import Cards from './Cards.vue';
export default{
    name: 'CentralContainer',
        components:{
            MainTitle,
            Image,
            Cards,
        }
}
</script>

<template>
   <div class="central-container">
    <MainTitle></MainTitle>
    <Image></Image>
   </div>
   <Cards></Cards>
</template>

<style scoped lang="scss">
    .central-container{
        display: flex;
        align-items: center;
        margin-top: 130px;
    }
</style>
