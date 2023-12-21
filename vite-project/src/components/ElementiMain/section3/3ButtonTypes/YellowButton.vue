<script>
   export default {
        name:'yellowButton',
    }

</script>

<template>
    <div class="button-container">
       <input type="button" value="SPECIAL" class="yellow-button">
    </div>
</template>

<style scoped lang="scss">
.button-container{
    position: absolute;
    top: 1%;
    right: 3%;
}
    .yellow-button{
        background-color: #f09b23;
        padding: .375rem .0625rem;
        border: none;
        outline: none;
        border-radius: .1875rem;
        color: white;  
        font-size: .625rem;

    }
</style>