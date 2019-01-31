<template>
  <div id="app">
  	<h1>Welcome！I am Jianest</h1>
		<h3>IP:http://{{IPADDRESS}}</h3>
    <router-view/>
  </div>
</template>

<script>
import global_ from './components/Global'
export default {
  name: 'App',
	data() {
		return {
			IPADDRESS: global_.IPADDRESS
		}
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  margin-top: 50px;
}

/* 移动端样式 */
@media all and (max-width: 639px) {
	
}
</style>
