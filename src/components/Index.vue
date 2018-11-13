<template>
	<div class="form-content">
		<el-form>
			<button @click="btn" type="button">button</button>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
				activeIndex: '1'
			}
		},
		created(){
			var arr = [3>2>1,3<2<1];
			console.log(arr);
		},
		computed: {

		},
		methods: {
			btn(){
				alert(123);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	/* .el-header{
		padding: 0;
	}
	.el-aside{
		background-color: aqua;
	} */
</style>
