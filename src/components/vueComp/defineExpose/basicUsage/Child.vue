<script setup>
import { ref } from 'vue'

let value1 = 100;
const value2 = ref(50);
function childFn() {
	alert('我是孩子');
};

defineExpose({
    value1,
    value2,
    childFn
})
</script>

<template>
    <p>子元件中的資料：</p>
    <p>value1: {{ value1 }}</p>
    <p>value2: {{ value2 }}</p>
</template>