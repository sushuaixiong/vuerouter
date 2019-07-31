<template>
  <div>
      {{$store.state.count}}--{{count}}--{{count1}}--{{countAlias}}--{{gettersCount}}
      <p><button @click="actionAdd()">+</button><button @click="reduce">-</button></p>
  </div>
</template>

<script>
import store from '@/vuex/stores'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'vuexInstance',
  data () {
    return {
      msg: 'Hi,I am seth'
    }
  },
  computed: {
    ...mapState({
      count () {
        return this.$store.state.count
      },
      count1: state => state.count,
      countAlias: 'count'
    }),
    ...mapGetters({
      gettersCount: 'count'
    })
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['actionAdd'])
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
