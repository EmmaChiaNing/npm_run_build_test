<template>
    <div class="grid-and-flex">
        <menu class="mb-2" >
            <li 
                v-for="(item, index) in menuList" 
                :key="index" 
                :class="{selected: item.title === currentComp.name}"
                @click="changeComp(item.component)"
            >
                {{item.title}}
            </li>
        </menu>
        <component :is="currentComp"/>
    </div>
</template>

<script setup>
import { shallowRef } from 'vue';
import DefineModel from '@/components/vueComp/defineModel/DefineModel.vue';
import DefineExpose from '@/components/vueComp/defineExpose/DefineExpose.vue';

const menuList = [
    {
        title: 'DefineModel',
        component: DefineModel
    },
    {
        title: 'DefineExpose',
        component: DefineExpose
    },
];

const currentComp = shallowRef(DefineExpose);

const changeComp = (comp) => {
    currentComp.value = comp
}
</script>