<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const value = ref('hello world')
</script>

<template>
    <Child :model-value="value" @update:model-value="newValue => value = newValue"/>
</template>