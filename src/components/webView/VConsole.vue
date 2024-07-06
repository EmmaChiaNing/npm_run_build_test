<script setup>

const testVConsole = () => {
  console.log("console log message");
}

defineOptions({
    name: 'VConsole'
})
</script>
<template>
  <article>
    <header>
        <h3><b class="accent">查詢 log</b></h3>
    </header>
    <button @click="testVConsole">console log</button>
  </article>
</template>