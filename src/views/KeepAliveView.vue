        
<script setup>
import { ref, KeepAlive } from 'vue';
import Step1 from '@/components/keepAlive/Step1.vue'
import Step2 from '@/components/keepAlive/Step2.vue'
import Step3 from '@/components/keepAlive/Step3.vue'

const currentStep = ref(1);
const menuList = [
    {
        title: 'Step1',
        component: Step1,
        id: 1
    },
    {
        title: 'Step2',
        component: Step2,
        id: 2
    },
    {
        title: 'Step3',
        component: Step3,
        id: 3
    }
];

const formData = ref({
    name: '',
    age: 0,
    jobTitle: '',
    jobTenure: 0
})

</script>
<template>
    <div class="keep-alive">
        <menu>
            <li 
                v-for="(item, index) in menuList" 
                :key="index" 
                :class="{selected: item.id === currentStep}"
            >
                {{item.title}}
            </li>
        </menu>
        <KeepAlive :include="['Step1', 'Step2']">
            <component 
                :is="menuList[currentStep - 1].component" 
                :formData="formData"
                @changeStep="(id) => currentStep = id" 
                @upDateFormData="(form) => { formData = { ...formData, ...form } }"
            />
        </KeepAlive>
    </div>
</template>

<style lang="css" scoped>
.keep-alive {
    width: 100%;
}
.keep-alive menu li {
    cursor: default;
}
</style>