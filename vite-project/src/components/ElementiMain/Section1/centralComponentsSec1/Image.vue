<script>
export default{
    name: 'Image',
}
</script>

<template>
    <div>
        <div class="img-container">
            <div class="moon-img">
                <!-- moon in screen -->
                <img src="../../../../../src/assets/img/img-section-1/moon.png" alt="">
            </div>
            
            <!-- immagine principale -->
            <img src="../../../../../src/assets/img/img-section-1/base.png" alt="pc.img">
            <!-- 3 studenti sul libro -->
            <div class="students-on-book">
                <img src="../../../../../src/assets/img/img-section-1/book1.png" alt="">
                <!-- npensiero della ragazza -->
                <div class="cloud-img">
                    <img src="../../../../../src/assets/img/img-section-1/bubblespeech.png" alt="">
                </div>
            </div>

            <!-- 2 studenti sul libro -->
            <div class="two-students-container">
               <div class="two-students-book">
                <img src="../../../../../src/assets/img/img-section-1/book2.png" alt="">
               </div>
               <!-- lente -->
                <div class="lente">
                    <img src="../../../../../src/assets/img/img-section-1/magnifier.png" alt="">
                </div>
            </div>
      </div>

    </div>
</template>

<style scoped lang="scss">
.img-container{
    position: relative;
    .moon-img{
        position: absolute;
        top: 25%;
        left: 17%;
    }
    .students-on-book{
        position: absolute;
        top: 23%;
        left: 62%;
            .cloud-img{
                top: -26%;
                position: absolute;
                left: 61%;
            }
    }
    .two-students-book{
        position: absolute;
        top: 57%;
        left: 36%;
    }
    .lente{
        position: absolute;
        top: 67%;
        left: 76%;
    }
}
</style>
