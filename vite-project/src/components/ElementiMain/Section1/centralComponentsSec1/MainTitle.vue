<script>

export default{
    name: 'MainTitle',
}
</script>

<template>
    <div class="title-container">
        <div>
            <h2>Start investing in you</h2>
        </div>
        <div>
            <p>Whit over 1200 courses in 18 subjects, you're guaranteed to <br>find somethig that's right for you</p>
        </div>
        <div class="but-container">
            <input type="button" class="butt" value="SIGN UP">
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.butt{
        padding: 12px 23px;
        border: none;
        outline: none;
        background-color:  $blue-300-ico;
        border-radius: 35px;
        color: white;
    }
</style>
