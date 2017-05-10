<template>
  <div id="index">
   index页面
   <button @click="addProduct">add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        msg:'nihao'
    }
  },
  methods:{
    addProduct(){
      alert(1);
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
