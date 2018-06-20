<template>
	<div class="layout-container">
		<header class="header">
			<div class="header-title"><img src="../assets/logo.png"></div>
		</header>
		<router-view></router-view>
	</div>
</template>
<script>
	
</script>
<style>
	.layout-container {
		width: 100%;
		height: 100%;
	}
	.header {
		min-width: 1180px;
		height: 80px;
		overflow: hidden;
		background-color: #324157;
		color: #fff;
	}
	header div img {
		width: 80px;
	}
</style>
