<template>
    <div class="bg">
        <dialog open class="modalConfirm">
            <header>
                <h2>ModalConfirm</h2>
            </header>
            <p>ModalConfirm, ModalConfirm, ModalConfirm, ModalConfirm, ModalConfirm, ModalConfirm, ModalConfirm... </p>
            <footer>
                <button @click="$emit('close')">Close</button>
            </footer>
        </dialog>
    </div>
</template>

<script setup>
</script>