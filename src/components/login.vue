<template>
    <div>
        <input type="text" v-model="val">
        <button @click="btn">submit</button>
    </div>    
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'login',
    data(){
        return {
            val: ''
        }
    },
    computed: {
        ...mapGetters([
            'authList'
        ])
    },
    beforeCreate(){
        console.log(location.href)
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function () {
            history.pushState(null, null, document.URL);
        });
        //history.pushState(null ,null ,location.href)
    },
    created(){
        //console.log(this.$store.state.auth)
        console.log('start')
        this.$store.commit('clearList')
    },
    methods: {
        btn(){
            this.$router.push({
                path: '/dashboard',
                query: {
                    auth: this.val
                }
            })
            
        }
    }
}
</script>
<style lang="scss">

</style>


