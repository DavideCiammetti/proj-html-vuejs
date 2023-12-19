<script>
import Logo from './Logo.vue';
import SearchBar from './SearchBar.vue';
import ForWorkersLink from './ForWorkersLink.vue'; 
import LoginElements from './LoginElements.vue';

   export default {
        name:'menu',
            components:{
                Logo,
                SearchBar,
                ForWorkersLink,
                LoginElements,
            }
    }

</script>

<template>
   <div class="menu-container">
        <Logo></Logo>
        <SearchBar></SearchBar>
        <ForWorkersLink></ForWorkersLink>
        <LoginElements></LoginElements>
   </div>
</template>

<style scoped lang="scss">
    .menu-container{
        display: flex;
        margin-top: 1.4375rem;
    }
</style>
