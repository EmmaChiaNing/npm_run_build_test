<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const props = defineProps({
  list: { type: Array, default: () => [] }
});

const modules = ref([Autoplay, Pagination, Navigation]);

defineOptions({
  name: 'HomeBanner'
});

console.log(props.list)
</script>

<template>
    <swiper
        loop    
        centeredSlides
        grabCursor
        :modules="modules"
        :autoplay="{
            delay: 2000
        }"
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :navigation="{
            nextEl: '.banner-next-button',
            prevEl: '.banner-prev-button',
            disabledClass: 'bg-disabled cursor-auto',
        }"
        :pagination="{ clickable: true }"
        class="swiper-banner"
    >
        <swiper-slide
            v-for="(banner, index) in props.list"
            :key="index"
            class="cursor-pointer"
        >
            <div class="bg-accent width height flex center align-center swiper-slide-item" style="width: 50%;">
                <img :src="banner.img" :id="index"/>
            </div>
        </swiper-slide>
    </swiper>
    <div class="navigation">
        <div class="navigation-button banner-prev-button">prev</div>
        <div class="navigation-button banner-next-button">next</div>
    </div>
</template>

<style lang="css" scoped>

</style>