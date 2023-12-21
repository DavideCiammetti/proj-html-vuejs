<script>
// button over image 
import RedButton from '../section3/3ButtonTypes/RedButton.vue';
import GreenButton from '../section3/3ButtonTypes/GreenButton.vue';
import YellowButton from '../section3/3ButtonTypes/YellowButton.vue';
// band over image 
import YellowBandOverImg from '../section3/YellowBandOverImg.vue';
   export default {
        name:'MaterialsGrid',
            components:{
                RedButton,
                GreenButton,
                YellowButton,
                YellowBandOverImg,
            }
    }

</script>

<template>
    <div class="main-grid-container">
        <!-- 1 -->
        <div class="grid-item">
            <!-- img -->
            <div>
                <img src="../../../../../src/assets/img/img-section-3-5/photo-1461749280684-dccba630e2f6-272x161.jpeg" alt="apache.img">
            </div>
            <!-- img -->
            <!-- info -->
           <div>
                <p class="type">Apache ></p>
                <h5>Web Coding and Apache <br> Basics</h5>

                <div class="b-top">
                    <div class="hour-money-container d-flex m-b j-b">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p> 
                        <p class="col"><strong>Free</strong></p>
                    </div>
                </div>
            </div>
            <!-- info -->
        </div>

         <!-- 2 -->
        <div class="grid-item button-relative">
            <!-- img -->
            <div>
                 <!-- button -->
                <YellowBandOverImg></YellowBandOverImg>
                <GreenButton></GreenButton>

                <img src="../../../../../src/assets/img/img-section-3-5/cat_2-272x161.jpg" alt="art.img">
            </div>
             <!-- img -->
              <!-- info -->
            <div class="border-yellow">
                <p class="type">Art ></p>
                <h5>Real Things Art Painting by<br>Jason Ni</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                            <p  class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p> 
                        <div>
                            <p class="barred-price">$60</p>
                            <p class="col"><strong>$45</strong></p>
                        </div>
                    </div>
                </div>
           </div>
            <!-- info -->
        </div>

         <!-- 3 -->
        <div class="grid-item button-relative">
             <!-- img -->
            <div>
                <!-- button -->
                <RedButton></RedButton>

                <img src="../../../../../src/assets/img/img-section-3-5/course-preview-272x161.jpg" alt="software.img">
            </div>
             <!-- img -->
             <!-- info -->
            <div>
                <p class="type">Software Developement ></p>
                <h5>Basics of Masterstudy</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">

                        <div class="d-flex">
                            <div class="d-flex">
                                <span class="star-full" v-for="n in 5"><img src="../../../../../src/assets/img/starfull.svg" alt="star.img"></span> 
                            </div>
                            <p class="five-star">5</p>
                        </div>
                            <p class="col"><strong>Free</strong></p>
                    </div>
                </div>
           </div>
            <!-- info -->
        </div>

         <!-- 4 -->
        <div class="grid-item button-relative">
            <!-- img -->
            <div>
                <YellowButton></YellowButton>
                <img src="../../../../../src/assets/img/img-section-3-5/photo-1496307042754-b4aa456c4a2d-272x161.jpeg" alt="electronic.img">
            </div>
             <!-- img -->
              <!-- info -->
            <div>
                <p class="type">Electronic ></p>
                <h5>How to be a DJ? Make <br> Electronic Music</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <div class="d-flex">
                            <!-- stelle -->
                            <div class="d-flex">
                                <span class="star-full" v-for="n in 5"><img src="../../../../../src/assets/img/starfull.svg" alt="star.img"></span> 
                            </div>
                            <p class="five-star">5</p>
                        </div>
                        <div>
                            <p class="barred-price">$59</p>
                            <p class="col"><strong>$49</strong></p>
                        </div>
                    </div>
                </div>
           </div>
            <!-- info -->
        </div>
         <!-- 5 -->
        <div class="grid-item">
            <!-- img -->
            <div>
                <img src="../../../../../src/assets/img/img-section-3-5/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg" alt="communication.img">
            </div>
            <!-- img -->
             <!-- info -->
            <div>
                <p class="type">Communication ></p>
                <h5>Design instrument for<br>Communication</h5>
                <div class="b-top">
                    <div  class=" b-g">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p>  
                    </div>  
                </div>
            </div>
            <!-- info -->
        </div>

         <!-- 6 -->
        <div class="grid-item">
            <!-- img -->
            <div>
                <img src="../../../../../src/assets/img/img-section-3-5/cathryn-lavery-67852-unsplash-272x161.jpg" alt="art.img">
            </div>
            <!-- img -->
             <!-- info -->
            <div>
                <p class="type">Art ></p>
                <h5>Make your Concept Right and<br>Beautiful</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p>  
                        <p class="col"><strong>$70</strong></p>
                    </div>
                </div>
            </div>
            <!-- info -->
        </div>

         <!-- 7 -->
        <div class="grid-item">
            <!-- img -->
            <div>
                <img src="../../../../../src/assets/img/img-section-3-5/photo-1475452779376-caebfb988090-272x161.jpeg" alt="bici.img">
            </div>
            <!-- img -->
             <!-- info -->
            <div>
                <p class="type">Bicycling ></p>
                <h5>Road Bike Manual or How to<br>Be a Champion</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p>  
                        <p class="col"><strong>$20</strong></p>
                    </div>
                </div>
            </div>
            <!-- info -->
        </div>

         <!-- 8 -->
        <div class="grid-item">
             <!-- img -->
            <div>
                <img src="../../../../../src/assets/img/img-section-3-5/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg" alt="documentary.img">
            </div>
            <!-- img -->
             <!-- info -->
            <div>
                <p class="type">Documentary ></p>
                <h5>How to Make Beautiful<br>Landscape photos?</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p>  
                        <p class="col"><strong>$60</strong></p>
                    </div>
                </div>
            </div>
            <!-- info -->
        </div>

         <!-- 9 -->
        <div class="grid-item ">
            <!-- img -->
            <div>
                <img src="../../../../../src/assets/img/img-section-3-5/landscape-272x161.jpg" alt="art.img">
            </div>
            <!-- img -->
             <!-- info -->
            <div>
                <p class="type">Art ></p>
                <h5>Let's paint Van Gogh's<br>Starry Night</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p>  
                        <p class="col"><strong>$79</strong></p>
                    </div>
                </div>
            </div>
            <!-- info -->
        </div>

         <!-- 10 -->
        <div class="grid-item button-relative">
            <!-- img -->
            <div>
                <!-- button -->
                <YellowButton></YellowButton>

                <img src="../../../../../src/assets/img/img-section-3-5/12345-1-272x161.png" alt="nvidia.img">
            </div>
            <!-- img -->
             <!-- info -->
            <div>
                <p class="type">Nvidia ></p>
                <h5>Nvidia and UE4 Technologies<br>Pratice</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <div class="d-flex">
                            <!-- stelle -->
                            <div class="d-flex">
                                <span class="star-full" v-for="n in 5"><img src="../../../../../src/assets/img/starfull.svg" alt="star.img"></span> 
                            </div>
                            <p class="five-star">5</p>
                        </div>
                        <div class="d-flex margin">
                            <p class="col"><strong>Free</strong></p>
                        </div>
                    </div>
                </div>
            </div>
             <!-- info -->
        </div>

         <!-- 11 -->
        <div class="grid-item button-relative">
            <div>
            <YellowButton></YellowButton>
                <img src="../../../../../src/assets/img/img-section-3-5/jakob-owens-198234-unsplash-min-1-272x161.png" alt="art.img">
            </div>
            <div>
                <p class="type">Art ></p>
                <h5>How to Work whit Legendary<br>RED camera?</h5>
                
                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 6 hours</p>  
                        <p class="col"><strong>Free</strong></p>
                    </div>
                </div>
            </div>
        </div>

         <!-- 12 -->
        <div class="grid-item">
            <!-- img -->
            <div>
                <img src="../../../../../src/assets/img/img-section-3-5/promo_tf-272x161.jpg" alt="software.img">
            </div>
            <!-- img -->
            <!-- info -->
            <div>
                <p class="type">Software Developement ></p>
                <h5>MasterStudy Mobile LMS App</h5>

                <div class="b-top">
                    <div class="d-flex m-b j-b">
                        <p class="hour"><font-awesome-icon :icon="['far', 'clock']" class="ico-margin"/> 2 hours</p>  
                        <p class="col"><strong>Free</strong></p>
                    </div>
                </div>
            </div>
            <!-- inf0 -->
        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    .main-grid-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: .625rem;
        margin-top: 3.25rem;
        // sigoloelemento della griglia 
            .grid-item{
                width: calc((100% / 6) - 1.25rem);
                border: 1px solid $col-grid;
                margin-bottom: 3.125rem;
            }
            img{
                width: 100%;
            }
            // stelle
            .star-full img{
                width: 75%;
            }
    }
    // stiele sotto delle informazioni sotto la foto
    .d-flex{
        display: flex;
        align-items: center;
    }
    // p tag sopra titolo
    .type{
        color: #c9c9c9;
        font-size: .625rem;
        margin: 1.3125rem 0 1.3125rem 1.3125rem;
    }
    // titolo
    h5{
        font-weight: 500;
        font-size: 12px;
        margin: 0 0 1.3125rem 1.3125rem;
    }
    .col{
        color: $title-bg;
        font-size: 13px;
    }
    
    // icona orologio
    .hour{
        font-size: .75rem;
        color: $p-color;
    }
    .ico-margin{
        margin-right: 7px;
    }
     // icona orologio
    .barred-price{
        text-decoration: line-through;
        color: $p-color;
        font-size: .75rem;
        text-align: center;
    }
    .five-star{
        margin-left: .375rem;
        font-size: .75rem;
    }
    // bottoni
    .button-relative{
        position: relative;
    }
    .border-yellow{
        border: 1px solid #f09b23;
        border-top: 1px solid transparent;
    }

    // utility class
    .b-g{
        border-top:1px solid $col-grid;
        padding-top: 1.25rem;
    }
    .b-top{
        padding: 0 1.25rem;
    }
    .m-b{
       margin-bottom: .625rem;
    }
    .j-b{
        justify-content: space-between;
        border-top:1px solid $col-grid;
        padding-top: 1.25rem;
    }
</style>
