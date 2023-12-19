<script>
   export default {
        name:'categories',
    }

</script>

<template>
    <div class="categories-container">
        <p class="categories">
            <span><font-awesome-icon :icon="['fas', 'bars']" /></span> CATEGORY
        </p>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.categories-container{
    margin-right: .6875rem;
    display: flex;
    align-items: center;
    .categories{
        font-size: .6875rem;
        color: $col-categories;   
    }
}
</style>
