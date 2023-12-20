<script>
export default{
    name: 'CarouselTitle',
}
</script>

<template>
    <div class="title-container">
        <h3>Popular Courses</h3>
        <p>Discover our most popular courses for self learnening</p>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.title-container{
    text-align: center;
}
    h3, p{
        color: $title-bg;
    }
    p{
        font-size: 12px;
    }
    h3{
        font-size: 38px;
        font-weight: 100;
        margin-bottom: 36px;
    }
</style>
