<template>
    <div class="container">
        <ul class="router-content">
            <router-link to="/dashboard" tag="li">dashboard</router-link>
            <router-link to="/admin" tag="li">admin</router-link>
            <router-link to="/visiter" tag="li">visiter</router-link>
            <li @click='logout'>log out</li>
        </ul>
        <div class="main">
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
    export default{
        name: 'layout',
        data(){
            return {}
        },
        created(){

        },
        methods: {
            logout(){
                this.$router.replace('/login');
            }
        }
    }
</script>
<style lang="scss">
    .container{
        overflow: hidden;
        .router-content{
            width: 150px;
            height: 100%;
            background-color: skyblue;
            float: left;
            li{
                display: block;
                padding: 5px 10px;
                &.actived{
                    color: red;
                }
            }
            
        }
        .main{
            width: calc(100% - 150px);
            float: right;
        }
    }
</style>

