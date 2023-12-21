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
    box-shadow: -1px 8px 19px #d1d1d1;
        .list-content{
            list-style: none;
            text-align: center;
        }
        .ico-drop-list{
            padding-bottom:1.3125rem;
            font-size: 1.25rem;
            padding-left: 1.1875rem;
            padding-right: 1.1875rem;
        }
        .p-15{
            padding-top: .9375rem;
        }
        a{
            color: #616161;
        }
}
</style>
