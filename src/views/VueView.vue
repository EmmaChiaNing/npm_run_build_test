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

const menuList = [
    {
        title: 'DefineModel',
        component: DefineModel
    },
];

const currentComp = shallowRef(DefineModel);

const changeComp = (comp) => {
    currentComp.value = comp
}
</script>