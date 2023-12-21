<script>
   export default {
        name:'SocialFoot',
    }

</script>

<template>
    <div class="social-container">
        <ul class="list-containet">
            <li class="social-list">
                <h4>About</h4>
            </li>
            <li class="social-list m-b-t">
               <p>
                <a href="#" class="link-master">Masterstudy</a> is Education WordPress theme <br>
                featured by Learning Management System <br>
                (LMS) for online education. <br>
                Developed by <a href="#" class="link-master">StylemixThemes.</a>
               </p>

            </li>
            <li class="social-list">
                <a href="#" class="ico-col"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                <a href="#" class="ico-col"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a href="#" class="ico-col"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;

    .link-master{
        color: $blue-600-search;
    }
    .social-list{
        color: $title-bg;
    }
    .m-b-t{
        margin-top: 38px;
        margin-bottom: 20px;
    }
    .ico-col{
        color: $p-color;
        margin-right: 20px;
    }
    ul{
        list-style: none;
    }
</style>
