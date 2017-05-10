<template>
  <div id="app">
      <Headers></Headers>
      <Navs></Navs>
      <Foot></Foot>
      <div class="calender">
        <calendar :value.sync="value" title="check In"></calendar>
      </div>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Hello from './components/Hello'
import Navs from './components/Navs'
import Foot from './components/Foot'
import Calendar from '../node_modules/vux/dist/components/calendar'
import '../node_modules/vux/dist/vux.css'

export default {
  components: {
    Hello,
    Navs,
    Foot,
    Headers,
    Calendar
  }
}
</script>

<style>

*{
  margin:0;
  padding:0;
}
html {
  width:100%;
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width:100%;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  width:100%;
  height:100%;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

.Foot{
  float:left;
  background: red;
}

.Navs{
  float:right;
  background: blue;
  list-style:none;
}
.calender{
    float:right;
    width:500px;
    height:500px;
    border:1p solid #000;
}
</style>
