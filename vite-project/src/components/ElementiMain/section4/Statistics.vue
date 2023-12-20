<script>

export default{
    name: 'SectionFour',
}
</script>

<template>
    <div class="statistic-container">

        <div class="stat-item p-27">
            <h4>2000</h4>
            <p>STUDENTS</p>
        </div>
        <div class="stat-item p-27 p-l-27 border-col">
            <h4>950</h4>
            <p>COURSES</p>
        </div>
        <div class="stat-item p-27 p-l-27 border-col-r">
            <h4>1600</h4>
            <p>HOURS VIDEO</p>
        </div>
        <div class="stat-item p-l-27">
            <h4>150</h4>
            <p>COUNTRIES REACHED</p>
        </div>

    </div>
</template>

<style scoped lang="scss">
    .statistic-container{
        display: flex;
        justify-content: center;
            h4{
                font-weight: 100;
                font-size: 4.4vw;
                color: #273044;
            }
            p{
                color: #273044;
                font-size: 1.2vw;
            }
            .p-27{
                padding-right: 27px;
            }
            .p-l-27{
                padding-left: 27px;
            }
            .border-col{
                border-left: 1px solid #dddddd;
                border-right: 1px solid #dddddd;
            }
            .border-col-r{
                border-right: 1px solid #dddddd;
            }
    }
</style>
