<script>
export default{
    name: 'InfoSection',
}
</script>

<template>
    <div class="content">
        <div class="void"></div>
        <div class="padd-cont">
            <h4>Come as you are</h4>
            <p class="line-height">
                Masterstudy used is a excellent workshop whether you come <br>
                as a counselor, advisor, administrator, or faculty member. I am <br>
                going home empowered, I am looking forward to attending <br>
                the On Course Masterstudy and Masterstudi National <br>
                Conference next year and facilitating the use of this excellent <br>
                retention/student success course at my college.
            </p>

            <h5>Tim Sab</h5>
            <p class="final-p">General Developer, Stylemix Themes</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

.content{
    width: 610px;
    background-color: $white;
    position: relative;
    left: 7%;
        .padd-cont{
            padding-left: 5rem;
        }
        h4{
            padding-top: 3.75rem;
            padding-bottom: 1.875rem;
            font-size: 1.375rem;
        }
        h5{
            padding-top: 1.875rem;
            font-size: 1.125rem;
        }
        .final-p{
            padding-top: .6875rem;
            padding-bottom: 4.375rem;
            font-size: .75rem;
        }
        .line-height{
            line-height: 1.6;
            font-size: .75rem;
        }
}
.void{
    width: 3.75rem;
    height: 2.3125rem;
    position: absolute;
    right: -1.3125rem;
    top: 44%;
    transform: rotate(3deg);
    background-color: $white;
    clip-path: polygon(0 84%, 50% 121%,102% 48%,50% 0);
}
</style>
