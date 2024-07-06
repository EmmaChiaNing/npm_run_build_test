<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const value = ref('hello world');
// const getNewValue = (newVal) => {
//     alert(newVal);
// }
</script>

<template>
    <Child v-model="value" @update:modelValue="getNewValue"/>
</template>