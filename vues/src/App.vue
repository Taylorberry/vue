<template>
  <div id="app">
      <Headers></Headers>
      <Main></Main>
      <Navs></Navs>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Hello from './components/Hello'
import Navs from './components/Navs'
import Foot from './components/Foot'
import Main from './components/Main'
import Calendar from '../node_modules/vux/dist/components/calendar'
import '../node_modules/vux/dist/vux.css'

export default {
  components: {
    Hello,
    Navs,
    Foot,
    Headers,
    Main,
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
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.Navs{
  width:100%;
  height:60px;
  background:#000;
}

.Navs ul{
    display:flex;
}

.Navs ul li{
  flex:1;
}

</style>
