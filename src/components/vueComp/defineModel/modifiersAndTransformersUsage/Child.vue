<template>
    <input v-model="modelValue" />
</template>

<script setup>
const [modelValue, modelModifiers] = defineModel({
    set(value) {
        if (modelModifiers.uppercase) {
            return value?.toUpperCase();
        }
    },
});
</script>
  