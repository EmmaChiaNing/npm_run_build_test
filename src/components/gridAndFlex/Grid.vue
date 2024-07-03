<script setup>
defineOptions({
    name: 'Grid'
})
</script>

<template>
    <ul class="grid-block">
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
.grid-and-flex ul.grid-block {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    gap: 10px;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "one three" 
        "two three";
}
.grid-and-flex ul li {
    border: solid 1px #ebebeba3; 
}
.grid-and-flex ul li.one {
    grid-area: one;
}
.grid-and-flex ul li.one img {
    width: 100%;
    height: 100%;
}
.grid-and-flex ul li.two {
    grid-area: two;
    padding: 1rem;
}
.grid-and-flex ul li.two h1 {
    margin-top: 0;
}
.grid-and-flex ul li.three {
    grid-area: three;
    padding: 1rem;
}
@media (max-width: 750px) {
    .grid-and-flex ul.grid-block {
        grid-template-columns: 100%;
        grid-template-rows: auto;
        grid-template-areas: 
        "one"
        "three" 
        "two";
    }
}
</style>