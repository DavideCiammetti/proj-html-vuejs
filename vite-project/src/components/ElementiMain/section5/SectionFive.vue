<script>
import Carousel from './Carousel.vue';
export default{
    name: 'SectionFive',
        components:{
            Carousel,
        }
}
</script>

<template>
    <section id="section-five">
        <Carousel></Carousel>
    </section>
</template>

<style scoped lang="scss">
    #section-five{
        padding-top: 8.125rem;
    }
</style>
