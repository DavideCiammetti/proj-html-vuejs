<script>
   export default {
        name:'SocialFoot',
    }

</script>

<template>
    <div class="social-container">
        <ul class="list-containet">
            <li class="social-list">
                <h5>About</h5>
            </li>
            <li class="social-list">
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
    .ico-col{
        color: $p-color;
    }
    ul{
        list-style: none;
    }
</style>
