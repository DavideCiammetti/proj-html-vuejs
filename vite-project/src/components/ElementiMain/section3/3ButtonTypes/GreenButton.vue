<script>
   export default {
        name:'GreenButton',
    }

</script>

<template>
    <div class="button-container">
       <input type="button" value="NEW" class="green-button">
    </div>
</template>

<style scoped lang="scss">
.button-container{
    position: absolute;
    top: 1%;
    right: 3%;
}
    .green-button{
        background-color: #1db874;
        padding: .375rem .5rem;
        border: none;
        outline: none;
        border-radius: .1875rem;
        color: white;
        font-size: .625rem;
    }
</style>