<script>

export default{
    name: 'MainTitle',
}
</script>

<template>
    <div class="title-container">
        <div class="title-content">
            <h2 class="title">Start investing in you</h2>
        </div>
        <div>
            <p>Whit over 1200 courses in 18 subjects, you're guaranteed to <br>find somethig that's right for you</p>
        </div>
        <div class="but-container">
            <input type="button" class="butt" value="JOIN FOR FREE">
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.title-container{
    margin-right: 3.5625rem;
        .title-content{
            margin-bottom: 2.3125rem;
            .title{
                font-weight: 100;
                font-size: 2.875rem;
            }
        }
    .but-container{
        margin-top: 2.625rem;
        .butt{
        padding: .875rem 1.4375rem;
        border: none;
        outline: none;
        background-color: $blue-600-search;
        border-radius: 2.1875rem;
        color: $white;
    }
    }
}
</style>
