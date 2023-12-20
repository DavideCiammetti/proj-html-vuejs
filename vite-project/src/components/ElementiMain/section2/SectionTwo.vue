<script>
import immageBg from './immageBg.vue';
import NoticeInfo from './NoticeInfo.vue';

export default{
    name: 'SectionTwo',
        components:{
            immageBg,
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
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 6vw;
        margin: 150px 0 110px 0;
    }
</style>
