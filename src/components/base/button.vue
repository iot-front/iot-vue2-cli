<template>
	<el-button
		round
		type="success"
		:class="{
			normal: type == 'normal',
			save: type == 'save',
			cancel: type == 'cancel',
			delete: type == 'delete',
			confirm: type == 'confirm',
			plain: plain,
			small: size == 'small',
			middle: size == 'middle',
			large: size == 'large'
		}"
		@click="$emit('click')"
	>
		<slot></slot>
	</el-button>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: ''
		},
		plain: {
			type: Boolean,
			default: false
		},
		size: {
			/**
			 * small
			 * middle
			 * large
			 */
			type: String,
			default: 'normal'
		}
	},
	data() {
		return {
			icons: {}
		}
	}
}
</script>

<style lang="scss" scoped>
.el-button--success {
	height: 40px;
	border-radius: 100px;
	background-color: $theme-color;
	border: none;
	@include set-shadow-color(0.3);
	&:hover {
		@include set-bg-color(0.88);
	}
	&:active {
		@include set-bg-color(1.11);
	}
	&.save {
		position: relative;
		width: 160px;
		overflow: hidden;
		span {
			display: inline-block;
			text-align: center;
			overflow: hidden;
		}
		&::before {
			content: '';
			z-index: -1;
			position: absolute;
			top: 50%;
			left: 100%;
			margin: -15px 0 0 1px;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			@include set-bg-color(1.1);
			-webkit-transform-origin: 100% 50%;
			transform-origin: 100% 50%;
			-webkit-transform: scale3d(1, 2, 1);
			transform: scale3d(1, 2, 1);
			-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
			transition: transform 0.3s, opacity 0.3s;
			-webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
			transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
		}
		&:hover::before {
			-webkit-transform: scale3d(9, 9, 1);
			transform: scale3d(9, 9, 1);
		}
	}
	&.cancel {
		color: #979aa4;
		background-color: transparent;
		border: 2px solid #dfe2ec;
		&:hover {
			background-color: #f7f7f7;
		}
		&:active {
			background-color: #f4f4f5;
		}
	}
	&.delete {
		color: #de081c;
		background-color: transparent;
		border: 2px solid rgba(222, 8, 28, 0.1);
		&:hover {
			background-color: rgba(222, 8, 28, 0.1);
		}
		&:active {
			background-color: #fef0f0;
		}
	}
	&.plain {
		color: $theme-color;
		@include set-bg-color(0.16);
		@include set-shadow-color(0);
		&:hover {
			@include set-bg-color(0.12);
		}
		&:active {
			@include set-bg-color(0.2);
		}
	}
	&.small.cancel {
		color: #979aa4;
		background-color: transparent;
		border: 2px solid #dfe2ec;
		&:hover {
			background-color: #f7f7f7;
		}
		&:active {
			background-color: #f4f4f5;
		}
	}
	&.middle {
		width: 120px;
		height: 36px;
		line-height: 0.7;
	}
	&.large {
		width: 200px;
	}
	&.normal,
	&.delete,
	&.cancel,
	&.small &.middle,
	&.large {
		@include set-shadow-color(0);
	}
}
</style>
