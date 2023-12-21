<script>

   export default {
        name:'MaterialsList',
    }

</script>

<template>
    <div class="main-materials-container">
        <ul class="materials-container">
            <li class="materials-list for-test">
                <a href="#">All Categories</a>
            </li>
            <li class="materials-list">
                <a href="#">Art</a>
            </li>
            <li class="materials-list">
                <a href="#">Exercise</a>
            </li>
            <li class="materials-list">
                <a href="#">Material Design</a>
            </li>
            <li class="materials-list">
                <a href="#">Music</a>
            </li>
            <li class="materials-list">
                <a href="#">Photography</a>
            </li>
            <li class="materials-list">
                <a href="#">Software Developement</a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.main-materials-container{
    margin-top: 4.125rem;
    .materials-container{
        display: flex;
        list-style: none;
        .for-test{
            background-color: $col-bg-sec;
            padding: 12px;
            border-radius: 30px;
        }
            .materials-list{
                margin-right: 2.875rem;
                padding: 12px;
                    a{
                        color: $blue-600-search;
                        font-size: .75rem;
                    }
            }
    }
}
// al click
.materials-list:active{
    background-color: $col-bg-sec;
    padding: .75rem;
    border-radius: 1.875rem;
}

</style>
