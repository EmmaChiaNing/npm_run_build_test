<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="arrow-icon">
		<path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
	</svg>
</template>

<script setup>
defineOptions({
	name: 'FinancialInstitutionArrowIcon'
})
</script>

<style lang="css" scoped>
.arrow-icon {
	width: 24px;
	height: 24px;
	flex-shrink: 0;
	transition: 0.3s;
}
.arrow-icon.down {
	transform: rotate(180deg);
}
.arrow-icon.up {
	transform: rotate(0deg);
}
</style>