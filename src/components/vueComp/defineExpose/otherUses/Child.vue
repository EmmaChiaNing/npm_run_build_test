<script setup>
import { reactive } from "vue";

const person = reactive({
  name: 'emma',
  age: 18
})

const setPersonValue = (key, value) => {
  person[key] = value
}

defineExpose({
	person,
    setPersonValue,
});
</script>

<template>
    <p>name: {{person.name}}</p>
    <p>age: {{person.age}}</p>
</template>