<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const childRef = ref(null)
const handleChange = () => {
	childRef.value.childFn() // 我是孩子
}

</script>

<template>
	<Child ref='childRef' />
    <p>父元件中取得的子元件資料：</p>
    <p>value1: {{ childRef?.value1 }}</p>
    <p>value2: {{ childRef?.value2 }}</p>
	<button @click="handleChange">Change Value</button>
</template>