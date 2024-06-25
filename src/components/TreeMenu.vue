<script setup>
const props = defineProps({
    treeItem: { type: Object, default: () => {} },
})

defineOptions({
    name: 'TreeMenu'
})

</script>

<template>
    <button class="title-bar">
        <p>{{ props.treeItem.title }}</p>
        <span>+</span>
    </button>
</template>


<style lang="css" scoped>
.title-bar {
    background:hsla(160, 100%, 37%, 1);
    display: flex;
    justify-content: space-between;
    min-width: 100px;
    border: none;
    padding: 5px;
    cursor: pointer;
}
</style>