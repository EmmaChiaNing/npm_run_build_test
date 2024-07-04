<script setup>
import BasicUsage from './basicUsage/Parent.vue'
import OtherUses from './otherUses/Parent.vue'

defineOptions({
    name: 'DefineExpose'
})
</script>

<template>
    <article>
        <p>透過 defineExpose 編譯器巨集來明確指定在子元件中要揭露的屬性</p>
        <p>Component 傳遞 props 很多層，會傳到頭暈，而每一層 Component  都要再轉過才可使用資料，過程繁瑣。可以使用 defineExpose() 類似授權父層直接取得 Component 的資料，將資料操作管理在 Component  中。</p>
    </article>
    <article>
        <header>
            <h3><b class="accent">基本用法</b></h3>
        </header>
        <p>子元件在父元件取得子元件資料，呼叫子元件方法。</p>
        <BasicUsage />
    </article>
    <article>
        <header>
            <h3><b class="accent">其他用法</b></h3>
        </header>
        <p>修改子元件裡的資料不可在父元件直接取得後修改但可以在子元件宣告方法修改，父元件呼叫子元件方法 set value。※請注意資料必須具有響應(ref, reactive)</p>
        <OtherUses />
    </article>
</template>

<style lang="scss" scoped>

</style>