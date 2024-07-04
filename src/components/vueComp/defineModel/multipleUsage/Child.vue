<script setup>
const childNumberValue = defineModel('numberValue')
const childStringValue = defineModel('stringValue')

const handleChange = () => {
    childNumberValue.value = 666
    childStringValue.value = '你好，世界'
}
</script>

<template>
    <p>從父元件接收的值：</p>
    <p>{{ childNumberValue }}</p>
    <p>{{ childStringValue }}</p>
    <button @click="handleChange">Change Value</button>
</template>
  