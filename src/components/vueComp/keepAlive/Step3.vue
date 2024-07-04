<script setup>

const props = defineProps({
    formData: { type: Object, default: () => {} }
})

const emit = defineEmits(['changeStep'])

const prev = () => {
    emit('changeStep', 2)
}

const toStepOne = () => {
    location.reload()
}

defineOptions({
    name: 'Step3'
})

</script>

<template>
    <div class="table-responsive">
        <table class="step3 center">
            <tbody>
                <tr>
                    <td>姓名</td>
                    <td>{{ props.formData.name }}</td>
                </tr>
                <tr>
                    <td>年齡</td>
                    <td>{{ props.formData.age }}</td>
                </tr>
                <tr>
                    <td>職稱</td>
                    <td>{{ props.formData.jobTitle }}</td>
                </tr>
                <tr>
                    <td>年資</td>
                    <td>{{ props.formData.jobTenure }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <button @click="prev">上一步</button>
    <button @click="toStepOne">清除回第一步</button>
</template>

<style lang="css" scoped>
.table-responsive {
    padding-top: 2rem;
    margin-bottom: 15px;
}
.step3 {
    width: 100%;
    margin: 0;
}
</style>