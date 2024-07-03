
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';

const props = defineProps({
    swiperList: { type: Array, default: () => [] },
    setThumbsSwiper: { type: Function, default: () => {} }
})

</script>
<template>
    <div class="swiper-thumbs">
        <swiper
            :modules="[Thumbs]"
            :spaceBetween="10"
            :slidesPerView="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            @swiper="props.setThumbsSwiper"
        >
            <swiper-slide v-for="(item, index) in props.swiperList" :key="index">
                <div class="bg-accent width height flex center align-center swiper-slide-item">
                    <p class="absolute">{{ item.title }}</p>
                    <img :src="item.img" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>