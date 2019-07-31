<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">前进</button>
      <button @click="goForwoad">后退</button>
      <button @click="goHome">回到首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <!-- <router-link :to="{name: 'Hi1',params:{username: 'seth'}}">Hi1页面</router-link> -->
      <router-link to="/hi/hi1/123">Hi1页面</router-link>
      <router-link :to="{name: 'Hi2',params:{username: 'luojun'}}">Hi2页面</router-link>
      <router-link to="/gohome/aaa">回到首页</router-link>
      <router-link to="/home1">回到首页1</router-link>
      <router-link to="/1234">错误页面</router-link>
      <router-link to="/vuex">vuex</router-link>
    </div>
    {{$route.name}}
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:red;"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:grey;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goForwoad () {
      this.$router.go(1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>
