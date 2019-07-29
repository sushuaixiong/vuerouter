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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
