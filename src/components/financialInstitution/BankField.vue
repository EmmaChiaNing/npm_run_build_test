<template>
	<div 
		class="flash bank-field" 
		:class="{
			'danger': isError, 
			'muted': !isError
		}"
		@click="() => emit('handlerSearchBoxVisible')"
	>
		<span>{{ bankFieldValue }}</span>
		<ArrowIcon 
			:class="{
				down: isSearchBoxVisible,
				up: !isSearchBoxVisible
			}"
		/>
	</div>
	<p class="danger" v-if="isError">必填</p>
</template>

<script setup>
import ArrowIcon from './ArrowIcon.vue'

const emit = defineEmits(['handlerSearchBoxVisible'])

defineProps({
	bankFieldValue: {
		type: String,
		require: true
	},
	isSearchBoxVisible: {
		type: Boolean,
		require: true
	},
	isError: {
		type: Boolean,
		require: false
	}
})
defineOptions({
	name: 'FinancialInstitutionBankField'
})
</script>

<style lang="css" scoped>
.bank-field {
	display: flex;
	width: 100%;
	gap: 1rem;
	cursor: pointer;
}
.bank-field span {
	flex-shrink: 1;
	width: 100%;
}
</style>