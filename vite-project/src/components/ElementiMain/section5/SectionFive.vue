<script>
import Carousel from './Carousel.vue';
import CarouselButton from './CarouselButton.vue';

export default{
    name: 'SectionFive',
        components:{
            Carousel,
            CarouselButton,
        }
}
</script>

<template>
    <section id="section-five">
        <Carousel></Carousel>
        <CarouselButton></CarouselButton>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

    #section-five{
        padding-top: 8.125rem;
        background-color: $col-bg-sec;
        margin-bottom: 114px;
    }
</style>
