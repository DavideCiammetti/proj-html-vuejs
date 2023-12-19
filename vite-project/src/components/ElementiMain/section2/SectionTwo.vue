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
        <immageBg></immageBg>
    </section>
</template>

<style scoped>
    #section-two{
        position: relative;
        margin-top: 150px;
    }
</style>
