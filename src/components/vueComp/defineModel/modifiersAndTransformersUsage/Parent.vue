<template>
	<p>處理 v-model 與加修飾符的子元件值</p>
	<Child v-model.trim.uppercase="inputValue" />
	<br/>
	<p>未處理與未加修飾符父元件值</p>
	<input v-model="inputValue" />
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const inputValue = ref('')
</script>