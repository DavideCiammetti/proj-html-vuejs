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
        padding: 6px 1px;
        border: none;
        outline: none;
        border-radius: 3px;
        color: white;  
        font-size: 10px;

    }
</style>