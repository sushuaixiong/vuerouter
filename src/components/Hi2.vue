<template>
  <div>
      {{msg}}--{{$route.params.username}}
  </div>
</template>

<script>
export default {
  name: 'Hi2',
  data () {
    return {
      msg: 'Hi,I am Hi2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
