<template>
  <div class="Navs">
    <ul>
      <li><a v-link="{path:'/index'}">index</a></li>
      <li><a v-link="{path:'/list'}">list</a></li>
      <li><a v-link="{path:'/content'}">content</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
