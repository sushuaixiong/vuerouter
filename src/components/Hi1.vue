<template>
  <div>
      {{msg}}--{{$route.params.username}}
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'Hi,I am hi1'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('进入路由')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('离开路由')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
