<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: "App"
	};
</script>

<style lang="scss">
	//$bcc: #f3f3f3;
	#app {
		background-color: $bcc;
	}
</style>
