<script>
import InfoSection from './infoSection.vue';

export default{
    name: 'SectionSeven',
        components:{
            InfoSection,
        },
}
</script>

<template>
    <section id="section-seven">
        <InfoSection></InfoSection>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

#section-seven{
    background: url('../../../../../../src/assets/img/img-section-7/brooke-cagle-224821-unsplash-1-1920x700.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3vw;
    height: 36vw;
}

</style>
