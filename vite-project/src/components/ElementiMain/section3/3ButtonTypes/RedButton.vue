<script>
   export default {
        name:'RedButton',
    }

</script>

<template>
    <div class="button-container">
       <input type="button" value="HOT" class="red-button">
    </div>
</template>

<style scoped lang="scss">
.button-container{
    position: absolute;
    top: 1%;
    right: 3%;
}
    .red-button{
        background-color: red;
        padding: .375rem .5rem;
        border: none;
        outline: none;
        border-radius: 3px;
        color: white;
        font-size: 10px;
    }
</style>
