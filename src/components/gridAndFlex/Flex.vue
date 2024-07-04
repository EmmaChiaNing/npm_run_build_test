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
ul.flex-block {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-flow: column;
    gap: 10px;
    flex-wrap: wrap;
}
ul.flex-block li {
    border: solid 1px #ebebeba3; 
}
ul.flex-block li.one {
    width: 50%;
    height: calc(100vh / 2 - 5px);
    object-fit: cover;
    overflow: hidden;
    order: 1;
}
ul.flex-block li.one img {
    aspect-ratio: 1 / 1; 
    width: 100%;
    height: 100%;
}
ul.flex-block li.two {
    padding: 1rem;
    width: 50%;
    height: calc(100vh / 2 - 5px);
    order: 2;
}
ul.flex-block li.two h1 {
    margin-top: 0;
}
ul.flex-block li.three {
    padding: 1rem;
    width: 50%;
    height: 100vh;
    order: 3;
}
@media (max-width: 750px) {
    ul.flex-block {
        height: 100%;
    }
    ul.flex-block li.one {
        width: 100%;
        height: 100%;
    }
    ul.flex-block li.two {
        width: 100%;
        height: 100%;
        order: 3;
    }
    ul.flex-block li.three {
        width: 100%;
        height: 100%;
        order: 2;
    }
}
</style>