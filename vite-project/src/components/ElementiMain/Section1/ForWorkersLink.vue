<script>
   export default {
        name:'workers',
    }

</script>

<template>
    <div class="d-flex">
        <ul class="workers-list-container">
            <li class="work-list m-20"><font-awesome-icon :icon="['fas', 'bullhorn']" class="s-ico"/><span>Become an Instructor</span></li>
            <li class="work-list m-40"><font-awesome-icon :icon="['fas', 'suitcase']" class="s-ico"/><span>For Enterprise</span></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use './../style/partials/_variables.scss' as *;
.d-flex{
    display: flex;
    align-items: center;
}
    .workers-list-container{
        display: flex;
        list-style: none;
        .work-list{
            font-size: .8125rem;
        }
        // margin
        .m-20{
            margin-right: 1.25rem;
        }
        .m-40{
            margin-right: 2.5rem;
        }
        span{
            margin-left: .625rem;
        }
        // margin
        .s-ico{
            color:$blue-300-ico;
        }
    }
</style>
