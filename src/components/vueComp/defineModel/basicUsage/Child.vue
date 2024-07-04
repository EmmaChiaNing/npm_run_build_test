<script setup>
const modelValue = defineModel()

const handleChange = () => {
    modelValue.value = '子元件改變值'
}
</script>

<template>
    <p>從父元件接收的值為 {{ modelValue }}</p>
    <input v-model="modelValue" />
    <br/>
    <button @click="handleChange">Change Value</button>
</template>
  