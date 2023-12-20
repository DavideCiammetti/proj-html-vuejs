<script>
export default{
    name: 'InfoSection',
}
</script>

<template>
    <div class="info-container">
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
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

.info-container{
    padding: 21px 181px;
        .content{
            width: 33.75rem;
            background-color: $white;
            position: relative;
                .padd-cont{
                    padding-left: 80px;
                }
                h4{
                    padding-top: 60px;
                    padding-bottom: 30px;
                    font-size: 22px;
                }
                h5{
                    padding-top: 30px;
                    font-size: 18px;
                }
                .final-p{
                    padding-top: 11px;
                    padding-bottom: 70px;
                    font-size: 12px;
                }
                .line-height{
                    line-height: 1.6;
                    font-size: 12px;
                }
        }
}
.void{
    width: 60px;
    height: 37px;
    position: absolute;
    right: -21px;
    top: 44%;
    transform: rotate(3deg);
    background-color: $white;
    clip-path: polygon(0 84%, 50% 121%,102% 48%,50% 0);
}
</style>
