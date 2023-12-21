<script>
import NoticeInfo from './NoticeInfo.vue';

export default{
    name: 'SectionTwo',
        components:{
            NoticeInfo,
        }
}
</script>

<template>
    <section id="section-two">
        <NoticeInfo></NoticeInfo>
    </section>
</template>

<style scoped>
    #section-two{
        background: url("../../../../../src/assets/img/img-section-2/Untitled-1-1-1-1-1.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding: 4vw;
        margin: 9.375rem 0 6.875rem 0;
        height: 30vw;
    }
</style>
