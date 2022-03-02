<template>
	<div class="page-container">
		<el-pagination
			:current-page.sync="value.page"
			:page-size="value.size"
			:total="value.total"
			layout="total, prev, pager, next, jumper"
			@size-change="$emit('change', $event)"
			@current-change="$emit('change', $event)"
		></el-pagination>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Object,
			default: () => {
				return {
					page: 1,
					size: 20,
					total: 0
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.page-container {
	text-align: center;
	margin: 30px 0;
}
.el-pagination {
	color: #111b23;
	font-weight: 400;
	.el-pager {
		.number {
			&.active {
				color: $theme-color;
			}
		}
	}
}
</style>
