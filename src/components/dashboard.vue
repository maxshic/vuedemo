<template>
    <div>
        dashboard
        <button>drawArr{{a}}</button>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default{
        data(){
            return {

            }
        },
        created(){
            //console.log(this.$store.state.auth)
        },
        computed: {
            a(){
                return 'a'
            },
            ...mapGetters([
                'authList'
            ])
        }
    }
</script>
<style>

</style>

