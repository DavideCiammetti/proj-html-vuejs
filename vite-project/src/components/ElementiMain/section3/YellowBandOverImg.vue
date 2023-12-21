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
@use '../style/partials/_variables.scss' as *;
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
                color: $white;
                font-size: 11px;
            }
    }  
// media query 
    @media screen and (min-width: 1600px){
        .band-container{
            top: 6.6%;
        }
    }
    @media screen and (min-width: 1706px){
        .band-container{
            clip-path: polygon(49% -148%, 99% 100%, 0 93%);
            top: 6%;
        }
    }
    @media screen and (min-width: 1920px){
        .band-container{
            clip-path: polygon(49% -162%, 99% 100%, 0 93%);
        }
    }
</style>
