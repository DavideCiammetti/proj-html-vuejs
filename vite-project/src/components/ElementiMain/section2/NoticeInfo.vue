<script>
export default{
    name: 'Notice',
}
</script>

<template>
     <div class="title-container">
        <div class="title-content">
            <h2 class="title">Limitless learning, <br> more possibilities</h2>
        </div>
        <div>
            <p>Online courses open the opportunity for learning to<br>
                almost anyone, regardless of their scheduling <br>
                commitments.
            </p>
        </div>
        <div class="but-container">
            <input type="button" class="butt" value="READ MORE">
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.title-container{
    margin-left: 17%;
        .title-content{
            margin-bottom: 2.3125rem;
            .title{
                font-weight: 100;
                font-size: 2.3125rem;
                color: #273044;
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
        color: white;
    }
    }
}
</style>
