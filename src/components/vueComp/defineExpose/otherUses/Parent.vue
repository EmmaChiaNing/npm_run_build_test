
<script setup>
import { ref } from 'vue'
import Child from "./Child.vue";

const childRef = ref(null);

function handleChange() {
  childRef.value.setPersonValue('name', 'tom')
  childRef.value.setPersonValue('age', 20)
}

</script>

<template>
  <Child ref=childRef />
  <button @click="handleChange">Change Value</button>
</template>
