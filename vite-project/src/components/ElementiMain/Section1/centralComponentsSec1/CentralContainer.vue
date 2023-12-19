<script>
import MainTitle from './MainTitle.vue';
import Image from './Image.vue';
export default{
    name: 'CentralContainer',
        components:{
            MainTitle,
            Image,
        }
}
</script>

<template>
   <div class="central-container">
    <MainTitle></MainTitle>
    <Image></Image>
   </div>
</template>

<style scoped lang="scss">
    .central-container{
        display: flex;
        align-items: center;
        margin-top: 130px;
    }
</style>
