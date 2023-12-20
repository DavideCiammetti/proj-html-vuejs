<script>

export default{
    name: 'DropRigth',
}
</script>

<template>
    <div class="right-att">
        <ul class="list-content">
            <li class="ico-drop-list p-15">
                <a href="#"><font-awesome-icon :icon="['fas', 'desktop']" /></a>
            </li>
            <li class="ico-drop-list">
                <a href="#"><font-awesome-icon :icon="['fas', 'life-ring']" /></a>
            </li>
            <li class="ico-drop-list">
                <a href="#"><font-awesome-icon :icon="['fas', 'wrench']" /></a>
            </li>
            <li class="ico-drop-list">
                <a href="#"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
            </li>
            <li class="ico-drop-list">
                <a href="#"><font-awesome-icon :icon="['fas', 'mobile']" /></a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

.right-att{
    position: absolute;
    top: 77%;
    right: 0;
    box-shadow: -1px 3px 6px #d1d1d1;
        .list-content{
            list-style: none;
            text-align: center;
        }
        .ico-drop-list{
            padding-bottom:21px;
            font-size: 20px;
            padding-left: 19px;
            padding-right: 19px;
        }
        .p-15{
            padding-top: 15px;
        }
        a{
            color: #616161;
        }
}
</style>
