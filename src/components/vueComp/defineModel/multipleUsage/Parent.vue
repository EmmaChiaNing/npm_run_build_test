<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const numberValue = ref(555)
const stringValue = ref('hello world')
</script>

<template>
    <Child 
      v-model:numberValue="numberValue"
      v-model:stringValue="stringValue"
    />
</template>