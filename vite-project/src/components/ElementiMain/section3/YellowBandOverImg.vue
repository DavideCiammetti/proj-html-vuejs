<script>
   export default {
        name:'YellowButton',
    }

</script>

<template>
    <div class="band-container">
       <p>
        <strong>FEATURED</strong>
       </p>
    </div>
</template>

<style scoped lang="scss">
    .band-container{
        position: absolute;
        padding: 5px 10px;
        background-color: #f09b23;
        width: 7.6875rem;
        text-align: center;
        transform: rotate(-45deg);
        top: 7%;
        left: -26px;
        clip-path: polygon(47% -151%, 100% 100%, 0 95%);
        
            p{
                color: white;
                font-size: 11px;
            }
    }
</style>
