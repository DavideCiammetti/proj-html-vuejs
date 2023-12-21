<script>
export default{
    name: 'Grid',

}
</script>

<template>
    <div class="grid-container">
        <!-- img 1 -->
        <div class="grid-item big-item">
            <div>
                <img src="../../../../../src/assets/img/img-section-1/cat_1-770x375.jpg" alt="s">
            </div>
            <div class="info-courses m-21">
                <p>Software Development</p>
                <p>5 Courses</p>
            </div>
        </div>
            <!-- img 2 -->
        <div class="grid-item img-flex">
           <div>
                <div class="double-img">
                    <img src="../../../../../src/assets/img/img-section-1/cat_2-370x155.jpg" alt="">
                </div>
                <div class="info-courses">
                    <p>Art</p>
                    <p>8 Courses</p>
                </div>
           </div>

            <div>
                <div>
                    <img src="../../../../../src/assets/img/img-section-1/cat_3-370x155.jpg" alt="">
                </div>
                <div class="info-courses">
                    <p>Material Design</p>
                    <p>5 Courses</p>
                </div>
            </div>
        </div>
        <!-- img 3 -->
        <!-- img 4 -->
        <div class="grid-item">
                <img src="../../../../../src/assets/img/img-section-1/cat_5-370x155.jpg" alt="">
                <div class="info-courses">
                    <p>Music</p>
                    <p>5 Courses</p>
                </div>
        </div>
        <!-- img 5 -->
        <div class="grid-item">
                <img src="../../../../../src/assets/img/img-section-1/cat_4-370x155.jpg" alt="">
                <div class="info-courses">
                    <p>Exercise</p>
                    <p>7 Courses</p>
                </div>
        </div>
        <!-- img 6 -->
        <div class="grid-item">
                <img src="../../../../../src/assets/img/img-section-1/cat_6-370x155.jpg" alt="">

                <div class="info-courses">
                    <p>Photography</p>
                    <p>4 Courses</p>
                </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
    .grid-container{
        display: flex;
        width: 76.25rem;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.875rem;
        margin-top: 6.875rem;
            //cards 
            .grid-item{
                width: calc((100% / 3) - 3.75rem);
                    .info-courses{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 1.1875rem;
                    }
                    .m-21{
                        margin-top: 1.3125rem;
                    }
                    .info-courses p:last-child{
                        font-size: .8125rem;
                    }
            }
            //elemento più grande
            .big-item{
                width: calc((100% / 3) * 2 - 5.625rem);
            }
            img{
                width: 100%;
            }

            .img-flex{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
    }
</style>
