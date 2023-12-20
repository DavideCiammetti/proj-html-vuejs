<script>
export default{
    name: 'Cards',
}
</script>

<template>
    <div class="main-cards-container">
        <!-- card 1 -->
        <div class="card-container">
            <span><font-awesome-icon :icon="['fas', 'earth-africa']" size="2xl" class="ico-card"/></span>
            <div class="card-title">
                <h4>Worldwide Recognize</h4>
            </div>

            <div class="description">
                <p>
                    Our online course certificates can be used <br>
                    around the world and also in most popular <br>
                    univrsities and companies.
                </p>
            </div>
        </div>
        <!-- card 2 -->
        <div class="card-container  m-r-l">
            <span><font-awesome-icon :icon="['fas', 'desktop']" size="2xl" class="ico-card"/></span>
            <div class="card-title">
                <h4>Mostly Online Learning (sd)</h4>
            </div>

            <div class="description">
                <p>
                   Masterstudy online certicates can be <br>
                   obtained in a range of specialized areas and <br>
                   typically take about a year to complete.
                </p>
            </div>
        </div>
        <!-- card 3 -->
        <div class="card-container">
            <span><font-awesome-icon :icon="['fas', 'calendar-check']" size="2xl" class="ico-card"/></span>

            <div class="card-title">
                <h4>Graduate in as little as 1 Year</h4>
            </div>

            <div class="description">
                <p>
                    Online post-graduate certicates are a popular <br>
                    way to develop your professional <br>
                    qualifications of Masterstudy
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    .main-cards-container{
        display: flex;
        margin-top: 76px;
            .card-container{
                background-color: #f2f6fb;
                padding: 30px;
                    .ico-card{
                        color: $blue-600-search;
                        font-size: 45px;
                    }
                    .card-title{
                        margin: 30px 0;
                    }
            }
            .m-r-l{
                margin: 0 30px;
            }
            P{
                color: #a4aab5;
                font-size: 14px;
            }
    }
</style>
