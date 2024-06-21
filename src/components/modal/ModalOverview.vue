<template>
    <div class="bg">
        <dialog open class="modalConfirm">
            <header>
                <h2>ModalOverview</h2>
            </header>
            <p>
                ModalOverview, ModalOverview, ModalOverview, ModalOverview, ModalOverview, ModalOverview, ModalOverview...
            </p>
            <footer>
                <button @click="$emit('close')">Close</button>
            </footer>
        </dialog>
    </div>
</template>

<script setup>
</script>