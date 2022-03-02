<template>
	<el-dialog :title="title" :visible.sync="show" :customClass="'custom-dialog'" :width="width" @close="$emit('hclose')">
		<div class="com-dia-content">
			<slot></slot>
		</div>
		<div class="com-dia-footer">
			<el-button v-if="cancelText !== '916'" class="dia-button" type="cancel" @click="$emit('hclose')">{{ cancelText }}</el-button>
			<el-button v-if="confirmText !== '916'" class="dia-button" type="primary" @click="$emit('hconfirm')">{{ confirmText }}</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	// 事件：hclose-关闭弹窗回调，hconfirm-确定按钮回调
	props: {
		title: {
			//标题
			type: String,
			required: false,
			default: ''
		},
		show: {
			//是否展示
			type: Boolean,
			default: false
		},
		cancelText: {
			//取消按钮文字，如果是916 不展示该按钮
			type: String,
			required: false,
			default: '取消'
		},
		confirmText: {
			//确定按钮文字，如果是916 不展示该按钮
			type: String,
			required: false,
			default: '确定'
		},
		width: {
			//弹窗宽度
			type: String,
			required: false,
			default: '750px'
		}
	},
	data() {
		return {}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
/deep/ .custom-dialog {
	// width: 750px;
}
/deep/ .el-dialog__header {
	border-bottom: 1px solid $border-color;
}
.com-dia-content {
	position: relative;
}
.com-dia-footer {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	.dia-button {
		min-width: 100px;
	}
}
</style>
