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
</script>

<template>
    <div class="teleport">
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