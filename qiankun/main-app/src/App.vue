<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/subapp/">sub-app</router-link> <!--新增部分-->
		</div>
		<router-view />
		<div id="vueContainer"></div><!--新增部分，用于承载子应用-->
	</div>
</template>

<script>

</script>

<style>

</style>
