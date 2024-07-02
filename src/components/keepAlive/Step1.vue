<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    age: 0
})

const emit = defineEmits(['changeStep', 'upDateFormData'])

const next = () => {
    emit('changeStep', 2)
    emit('upDateFormData', form.value)
}

defineOptions({
    name: 'Step1'
})
</script>

<template>
    <ul class="step1">
        <li>
            <label for="name">姓名</label>
            <input type="text" id="name" v-model="form.name"/>
        </li>
        <li>
            <label for="age">年齡</label>
            <input type="number" id="age" v-model="form.age"/>
        </li>
    </ul>
    <button @click="next">下一步</button>
</template>

<style lang="css" scoped>
.step1 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
    padding-left: 0;
    padding-top: 2rem;
    margin: 0 0 20px 0;
}
.step1 label {
    margin: 0;
}
</style>