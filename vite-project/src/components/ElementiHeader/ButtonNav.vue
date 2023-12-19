<script>
export default{
    name: 'ButtonNav',
}
</script>

<template>
    <div>
        <button class="button">new</button>
    </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;
    .button{
        text-transform: uppercase;
        border: none;
        background-color: $col-button-nav;
        color: white;
        padding: .125rem .3125rem;
        border-top-right-radius: .1875rem;
        border-bottom-right-radius: .25rem;
        border-top-left-radius: .25rem;
        font-size: .625rem;
    }
</style>
