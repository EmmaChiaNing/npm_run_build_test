<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const value = ref('hello world')
</script>

<template>
    <Child v-model="value" />
</template>
