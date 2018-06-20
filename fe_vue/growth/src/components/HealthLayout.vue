<template>
	<div class="main">
			<div 
				class="left-menu" 
				:style="{width: leftMenuWidth + 'px', 'top': leftMenuTop + 'px', overflow: menuOverflow}"
			>
			<el-menu
				:collapse="isToggleLeftMenu"
				default-active="1"
				class="left-menu-ul"
				background-color="#eef1f6"
			>
			  <el-menu-item index="1">
			    <i class="el-icon-menu"></i>
			    <span slot="title">检查结果</span>
			  </el-menu-item>
			</el-menu>
		</div>
		<div class="router-container" :style="{'margin-left': leftMenuWidth + 'px'}">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HealthLayout',
		data() {
			return {
				leftMenuWidth: 170,
				leftMenuTop: 80,
				menuOverflow: true,
				isToggleLeftMenu: false,
			}
		},
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>
<style scoped>
	.main {
		min-height: calc(100% - 80px);
	}
	.left-menu {
		position: fixed;
		left: 0;
		height: 100%;
		z-index: 2000;
	}
	.left-menu-ul {
		height: 100%;
	}
	.left-menu-ul:not(.el-menu--collapse) {
		text-align: left;
		width: 170px;
	}
</style>