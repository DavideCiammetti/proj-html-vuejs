<script>
import BlueButton from '../ButtonGeneralBlue.vue/BlueButton.vue';
   export default {
        name:'loginElements',
            components:{
                BlueButton,
            }
    }

</script>

<template>
    <div>
        <ul>
            <li class="login-list"><font-awesome-icon :icon="['far', 'user']" /> Login</li>
            <li class="login-list"><BlueButton></BlueButton></li>
            <li class="login-list"><font-awesome-icon :icon="['far', 'bookmark']" /></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
</style>
