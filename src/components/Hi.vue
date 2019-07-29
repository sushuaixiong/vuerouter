<template>
  <div>
      {{msg}}
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi,I am seth'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
