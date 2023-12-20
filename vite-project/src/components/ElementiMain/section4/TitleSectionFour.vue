<script>

export default{
    name: 'TitleSectionFour',
}
</script>

<template>
    <div class="tile-container">
        <h3>We are proud</h3>
        <p>
            Certicate courses instructed by highly educated and qualified instructors eho hold <br> 
            doctoral and master's level degrees
        </p>
        
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    .tile-container{
        padding: 100px 0 90px 0;
        background-color: $bg-input;
        text-align: center;
            h3{
                font-size: 3.1vw;
                margin-bottom: 2.75rem;
                font-weight: 100;
                color: $title-bg;
            }
            p{
                font-size: 1.2vw;
                color: $title-bg;
            }
    }
</style>
