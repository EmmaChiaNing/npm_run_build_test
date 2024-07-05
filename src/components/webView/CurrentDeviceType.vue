<script setup>
import device from "current-device";

defineOptions({
    name: 'CurrentDeviceType'
})
</script>

<template>
    <article>
        <header>
            <h3><b class="accent">目前裝置類型</b></h3>
        </header>
        <h3>{{device.type}}</h3>
    </article>
</template>