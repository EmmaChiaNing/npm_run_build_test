<script setup>
import liff from '@line/liff';
defineOptions({
    name: 'CloseWindow'
})
</script>
<template>
    <article>
        <header>
            <h3><b class="accent">關閉瀏覽器</b></h3>
        </header>
        <button @click="liff.closeWindow()">Close Window</button>
    </article>
</template>