<script>

export default{
    name: 'SectionSix',
}
</script>

<template>
    <!-- 1 -->
    <div class="info-container m-r-30">

        <div class="img-container">
            <img src="../../../../../../src/assets/img/img-section-6/image_box_1-221x231.png" alt="teach.img">
        </div>

        <div class="info-content">
             <!-- info -->
             <div>
                <h4>Setup For Business</h4>
                <p>
                   Get unlimited access to 2,500 of Udemys top <br>
                    courses for your team.
                </p>
            </div>
            <!-- info -->
            <!-- button -->
            <div class="but-container">
                <input type="button" class="butt" value="START TEACHING">
            </div>
        </div>
    </div>

    <!-- 2 -->
    <div class="info-container">

        <div class="img-container">
            <img src="../../../../../../src/assets/img/img-section-6/image_box_2-234x231.png" alt="businness.img">
        </div>

        <div class="info-content">
            <!-- info -->
            <div>
                <h4>Become an instructor</h4>
                <p>
                    Teach what you love. Masterstudy gives you <br>
                    the tools to crate a course.
                </p>
            </div>
            <!-- info -->
            <!-- button -->
            <div class="but-container">
                <input type="button" class="butt" value="DOING BUSINESS">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;

.info-container{
    border: 1px solid $brder-color;
    display: flex;
    align-items: center;
        .img-container{
            padding: 4.4375rem 2.875rem 4.375rem 2.375rem;
                img{
                    width: 100%;
                }
        }
        .info-content{
            padding-right: 3.125rem;
        }
        p{
            font-size: .6875rem;
            margin: 1.875rem 0 2.3125rem 0;
            line-height: 1.7;
        }
        h4{
            font-size: 1.5625rem;
            font-weight: 100;
        }
        .but-container{
            .butt{
                padding: .875rem 1.4375rem;
                border: none;
                outline: none;
                background-color: $blue-600-search;
                border-radius: 2.1875rem;
                color: $white;
            }
        }
}
.m-r-30{
    margin-right: 1.875rem;
}

</style>
