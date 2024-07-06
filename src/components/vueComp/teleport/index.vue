<script setup>
import { markRaw } from 'vue'
import ModalConfirm from '@/components/modal/ModalConfirm.vue';
import ModalOverview from '@/components/modal/ModalOverview.vue';
import useModal from '@/composables/useModal.js'

const modal = useModal()

const openConfirmModal = () => {
    modal.component.value = markRaw(ModalConfirm)
    modal.showModal()
}
const openOverviewModal = () => {
    modal.component.value = markRaw(ModalOverview)
    modal.showModal()
}

defineOptions({name: 'Teleport'})
</script>

<template>
    <div class="teleport">
        <article>
            <p>是一個內建元件，它可以將一個元件內部的一部分模板「傳送」到該元件的DOM 結構外層的位置去。</p>
        </article>
        <button @click="openConfirmModal">Open Confirm Modal</button>
        <button @click="openOverviewModal">Open Overview Modal</button>
        <Teleport to="#modal">
            <Transition>
                <component :is="modal.component.value" v-if="modal.show.value" @close="modal.closeModal"/>
            </Transition>
        </Teleport>
        <div class="absolute uglyDom">This will make ui ugly</div>
    </div>
</template>

<style lang="css" scoped>
.uglyDom {
    background: red;
    top: 50%;
    left: 50%;
}
</style>