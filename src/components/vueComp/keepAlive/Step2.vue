<script setup>
import { ref } from 'vue';

const form = ref({
    jobTitle: '',
    jobTenure: 0
})

const emit = defineEmits(['changeStep', 'upDateFormData'])

const next = () => {
    emit('changeStep', 3)
    emit('upDateFormData', form.value)
}

const prev = () => {
    emit('changeStep', 1)
    emit('upDateFormData', form.value)
}

defineOptions({
    name: 'Step2'
})
</script>

<template>
    <ul class="step2">
        <li>
            <label for="jobTitle">職稱</label>
            <input type="text" id="jobTitle" v-model="form.jobTitle"/>
        </li>
        <li>
            <label for="jobTenure">年資</label>
            <input type="number" id="jobTenure" v-model="form.jobTenure"/>
        </li>
    </ul>
    <button @click="prev">上一步</button>
    <button @click="next">下一步</button>
</template>

<style lang="css" scoped>
.step2 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
    padding-left: 0;
    padding-top: 2rem;
    margin: 0 0 20px 0;
}
.step2 label {
    margin: 0;
}
</style>