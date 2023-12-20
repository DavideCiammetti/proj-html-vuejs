<script>
import SocialFootList from './ElementiFooter/SocialFootList.vue';
import ContactList from './ElementiFooter/ContactList.vue';
import PagesList from './ElementiFooter/PagesList.vue';
import BlogList from './ElementiFooter/BlogList.vue';

   export default {
        name:'footer',
            components:{
                SocialFootList,
                ContactList,
                PagesList,
                BlogList,
            }
    }

</script>

<template>
    <footer id="footer">
        <SocialFootList></SocialFootList>
        <ContactList></ContactList>
        <PagesList></PagesList>
        <BlogList></BlogList>
    </footer>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;
#footer{
    margin: 40px 0;
    display: flex;
    justify-content: center;
}
</style>
