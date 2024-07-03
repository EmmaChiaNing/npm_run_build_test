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
import { ref } from 'vue';
import Grid from '@/components/gridAndFlex/Grid.vue';
import Flex from '@/components/gridAndFlex/Flex.vue';

const menuList = ref([
    {
        title: 'Grid',
        component: Grid
    },
    {
        title: 'Flex',
        component: Flex
    },
])
const currentComp = ref(Flex);
const changeComp = (comp) => {
    currentComp.value = comp
}
</script>

<style lang="css" scoped>

</style>