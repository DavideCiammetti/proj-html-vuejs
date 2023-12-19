<script>

   export default {
        name:'loginElements',
    }

</script>

<template>
    <div class="main-list-container" >
        <ul class="list-login-container">
            <li class="login-list m-30-r lin-3 f-size">
                <a href="#"><font-awesome-icon :icon="['far', 'user']" /> <span>Login</span></a>
            </li>
            <li class="login-list">
                <!-- button -->
                <div class="but-container">
                    <input type="button" class="butt" value="SIGN UP">
                </div>
            </li>
            <li class="login-list m-30-l lin-3 f-s-lheight">
                <a href="#"><font-awesome-icon :icon="['far', 'bookmark']" /></a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.main-list-container{
    display: flex;
    align-items: center;
    .list-login-container{
        display: flex;
        list-style: none;
            a{
                color: $blue-300-ico;
            }
    }
    // margin
    .m-30-r{
        margin-right: 1.875rem;
    }
    .m-30-l{
        margin-left: 1.875rem;
    }
    .f-size{
        font-size: 13px;
        line-height: 3;
    }
    .f-s-lheight{
        font-size: 20px;
        line-height: 2;
    }
}
// button
.butt{
        padding: 12px 23px;
        border: none;
        outline: none;
        background-color: $blue-600-search;
        border-radius: 35px;
        color: white;
    }
</style>
