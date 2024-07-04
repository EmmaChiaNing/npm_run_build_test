<script setup>
import { ref } from 'vue';

const props = defineProps(["modelValue"])
const emits = defineEmits(["update:modelValue"])

const handleChange = () => {
    emits('update:modelValue', '子元件改變值')
}
</script>

<template>
    <p>從父元件接收的值為 {{ props.modelValue }}</p>
    <input :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <br/>
    <button @click="handleChange">Change Value</button>
</template>
  