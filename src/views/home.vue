<template>
	<div>
		<div class="language-header">
			<span @click="$store.commit('updateLanguage','zh-cn')">中文</span> / 
			<span @click="$store.commit('updateLanguage','en')">英文</span>
		</div>
		{{$t('login.title')}}
	</div>
</template>

<script>

export default {
	name: 'Home',
	data () {
		return {
		}
	}
}
</script>
<style scoped lang="scss">
	.language-header {
		span {
			cursor: pointer;
		}
	}
</style>
