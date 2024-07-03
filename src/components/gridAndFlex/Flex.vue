<script setup>
defineOptions({
    name: 'Flex'
})
</script>

<template>
    <ul class="flex-block">
        <li class="bg-accent one">
            <img src="https://picsum.photos/500/500?grayscale"/>
        </li> 
        <li class="bg-success two">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ullam magnam esse deleniti eaque dicta nostrum! Error eveniet eaque quod pariatur voluptatem debitis asperiores illum ab. Eos, ipsum aut! Amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ullam magnam esse deleniti eaque dicta nostrum! Error eveniet eaque quod pariatur voluptatem debitis asperiores illum ab. Eos, ipsum aut! Amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ullam magnam esse deleniti eaque dicta nostrum! Error eveniet eaque quod pariatur voluptatem debitis asperiores illum.</p>
        </li> 
        <li class="bg-danger three">
            <h2>Product Title</h2>
            <h3>Price: 100</h3>
            <button class="active width">Add To Cart</button>
            <button class="accent width">Share</button>
        </li>
    </ul>
</template>


<style lang="css" scoped>

</style>