<script>
    export default {
        name:'socila icon',

    }
</script>

<template>
    <div class="social-container">
        <ul class="list-container">
            <li class="list mrgin-10">
                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            </li>
            <li class="list">
                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </li>
            <li class="list">
                <a href="#"><font-awesome-icon :icon="['fab', 'behance']" /></a>
            </li>
            <li class="list">
                <a href="#"><font-awesome-icon :icon="['fas', 'basketball']" /></a>
            </li>
            <li class="list">
                <a href="#"><font-awesome-icon :icon="['fab', 'flickr']" /></a>
            </li>
            <li class="list">
                <a href="#"><font-awesome-icon :icon="['fab', 'git']" /></a>
            </li>
            <li class="list">
                <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </li>
            <li class="list">
                <a href="#"><font-awesome-icon :icon="['fab', 'pinterest']" /></a>
            </li>
        </ul>
    </div>
</template>
   
<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

    .list-container{
        display: flex;
        list-style: none;
            .list{
                margin-right: .9375rem;
            }
            .mrgin-10{
                margin-left: .6875rem;
            }
            a{
                font-size: .875rem;
                color: $col-nav-text;
            }
    }
</style>
