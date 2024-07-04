<script setup>
import BasicUsage from './basicUsage/Parent.vue'
import PastUsage from './pastUsage/Parent.vue'
import MultipleUsage from './multipleUsage/Parent.vue'
import ModifiersAndTransformersUsage from './modifiersAndTransformersUsage/Parent.vue'

defineOptions({
    name: 'DefineModel'
})
</script>

<template>
    <article>
        <header>
            <h3><b class="accent">參數</b></h3>
        </header>
        <p>它與 defineProps 一樣，可以設定 type, default, required, validator。</p>
    </article>
    <article>
        <header>
            <h3><b class="accent">基本用法</b></h3>
        </header>
        <BasicUsage/>
    </article>
    <article>
        <header>
            <h3><b class="accent">過去用法</b></h3>
        </header>
        <PastUsage/>
    </article>
    <article>
        <header>
            <h3><b class="accent">多個 v-model 綁定</b></h3>
        </header>
        <MultipleUsage/>
    </article>
    <article>
        <header>
            <h3><b class="accent">處理 v-model 修飾符</b></h3>
        </header>
        <ModifiersAndTransformersUsage/>
    </article>
</template>