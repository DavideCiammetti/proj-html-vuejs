<script>
export default{
    name: 'CarouselButton',
}
</script>

<template>
    <div class="d-flex p-bottom">
        <div>
            <button class="arrow-button"><font-awesome-icon :icon="['fas', 'chevron-right']" class="ico-col"/></button>
        </div>
        <div>
            <button class="arrow-button"><font-awesome-icon :icon="['fas', 'chevron-left']" class="ico-col"/></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.d-flex{
    display: flex;
    justify-content: center;
}
.p-bottom{
    padding-bottom: 72px;
}
.arrow-button{
    padding: .9375rem 1.125rem;
    background-color: $white;
    border: none;
    outline: none;
    border: 1px solid $brder-color;
}
.ico-col{
    color: $brder-color;
}

</style>
