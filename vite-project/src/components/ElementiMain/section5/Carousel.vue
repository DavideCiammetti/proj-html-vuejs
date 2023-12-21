<script>
import CarouselTitle from './CarouselTitle.vue';
import YellowBandOverImg from '../section3/YellowBandOverImg.vue';
import YellowButton from '../section3/3ButtonTypes/YellowButton.vue';
import RedButton from '../section3/3ButtonTypes/RedButton.vue';
import GreenButton from '../section3/3ButtonTypes/GreenButton.vue';
export default{
    name: 'Carousel',
        components:{
            CarouselTitle,
            YellowBandOverImg,
            YellowButton,
            RedButton,
            GreenButton,
        }
}
</script>

<template>
    <CarouselTitle></CarouselTitle>

    <div class="main-grid-container">
        <!-- 1 -->
            <div class="grid-item">
                <div>
                    <img src="../../../../../src/assets/img/img-section-3-5/photo-1461749280684-dccba630e2f6-272x161.jpeg" alt="apache.img">
                </div>
            <div>
                    <p class="type">Apache ></p>
                    <h5>Web Coding and Apache <br> Basics</h5>

                    <div class="b-top">
                        <div class="hour-money-container d-flex m-l j-b">
                            <p class="hour"><font-awesome-icon :icon="['far', 'clock']" /> 6 hours</p> 
                            <p><strong>Free</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 2 -->
            <div class="grid-item button-relative">
                <div>
                    <YellowBandOverImg></YellowBandOverImg>
                    <GreenButton></GreenButton>
                    <img src="../../../../../src/assets/img/img-section-3-5/cat_2-272x161.jpg" alt="art.img">
                </div>
                <div class="border-yellow">
                    <p class="type">Art ></p>
                    <h5>Real Things Art Painting by<br>Jason Ni</h5>

                    <div class="b-top">
                        <div class="d-flex m-l j-b">
                                <p  class="hour"><font-awesome-icon :icon="['far', 'clock']"/> 6 hours</p> 
                            <div>
                                <p class="barred-price">$60</p>
                                <p><strong>$45</strong></p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <!-- 3 -->
            <div class="grid-item button-relative">
                <div>
                    <RedButton></RedButton>
                    <img src="../../../../../src/assets/img/img-section-3-5/course-preview-272x161.jpg" alt="software.img">
                </div>
                <div>
                    <p class="type">Software Developement ></p>
                    <h5>Basics of Masterstudy</h5>

                    <div class="b-top">
                        <div class="d-flex m-l j-b">

                            <div class="d-flex">
                                <div class="d-flex">
                                    <span class="star-full" v-for="n in 5"><img src="../../../../../src/assets/img/starfull.svg" alt="stars.img"></span> 
                                </div>
                                <p class="five-star">5</p>
                            </div>
                                <p><strong>Free</strong></p>
                        </div>
                    </div>
            </div>
            </div>
            <!-- 4 -->
            <div class="grid-item button-relative">
                <div>
                    <YellowButton></YellowButton>
                    <img src="../../../../../src/assets/img/img-section-3-5/photo-1496307042754-b4aa456c4a2d-272x161.jpeg" alt="electronic.img">
                </div>
                <div>
                    <p class="type">Electronic ></p>
                    <h5>How to be a DJ? Make <br> Electronic Music</h5>

                    <div class="b-top">
                        <div class="d-flex m-l j-b">
                            <div class="d-flex">
                                <div class="d-flex">
                                    <span class="star-full" v-for="n in 5"><img src="../../../../../src/assets/img/starfull.svg" alt="stars.img"></span> 
                                </div>
                                <p class="five-star">5</p>
                            </div>
                            <div>
                                <p class="barred-price">$59</p>
                                <p><strong>$49</strong></p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <!-- 5 -->
            <div class="grid-item">
                <div>
                    <img src="../../../../../src/assets/img/img-section-3-5/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg" alt="communication">
                </div>
                <div>
                    <p class="type">Communication ></p>
                    <h5>Design instrument for<br>Communication</h5>
                    <div class="b-top">
                        <div  class=" b-g">
                            <p class="hour"><font-awesome-icon :icon="['far', 'clock']" /> 6 hours</p>  
                        </div>  
                    </div>
            </div>
            </div>
            <!-- 6 -->
            <div class="grid-item">
                <div>
                    <img src="../../../../../src/assets/img/img-section-3-5/cathryn-lavery-67852-unsplash-272x161.jpg" alt="art.img">
                </div>
                <div>
                    <p class="type">Art ></p>
                    <h5>Make your Concept Right and<br>Beautiful</h5>

                    <div class="b-top">
                        <div class="d-flex m-l j-b">
                            <p class="hour"><font-awesome-icon :icon="['far', 'clock']" /> 6 hours</p>  
                            <p><strong>$70</strong></p>
                        </div>
                    </div>
            </div>
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
            .grid-item{
                width: calc((100% / 6) - 1.25rem);
                border: 1px solid $brder-color;
                margin-bottom: 3.125rem;
            }
            img{
                width: 100%;
            }
            .star-full img{
                width: 75%;
            }
    }
    // stile info sotto foto 
    .d-flex{
        display: flex;
        align-items: center;
    }
    .type{
        color: #c9c9c9;
        font-size: .625rem;
        margin: 1.3125rem 0 1.3125rem 1.3125rem;
    }
    h5{
        font-weight: 500;
        font-size: 12px;
        margin: 0 0 1.3125rem 1.3125rem;
    }
    .m-l{
       margin: 1.3125rem 0 1.3125rem 0;
    }
    .j-b{
        justify-content: space-between;
        border-top:1px solid $brder-color;
        padding-top: 1.25rem;
    }
    .b-g{
        border-top:1px solid $brder-color;
        padding-top: 1.25rem;
    }
    .b-top{
        padding: 0 1.25rem;
    }
    .hour{
        font-size: .75rem;
        color: $p-color;
    }
    .barred-price{
        text-decoration: line-through;
        color: $p-color;
        font-size: .8125rem;
        text-align: center;
    }
    .five-star{
        margin-left: .375rem;
        font-size: 12px;
    }
    // bottoni
    .button-relative{
        position: relative;
    }
    .border-yellow{
        border: 1px solid $band-col;
        border-top: 1px solid transparent;
    }

</style>
