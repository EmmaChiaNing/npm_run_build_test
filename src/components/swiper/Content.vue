
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps({
    modules: { type: Array, default: () => [] },
    photoSwiper: { type: Object, default: () => {} },
    swiperList: { type: Array, default: () => [] },
    setContentSwiper: { type: Function, default: () => {} }
})

</script>
<template>
    <div class="swiper-content">
        <swiper
            loop
            :modules="props.modules"  
            :direction="'vertical'"
            :controller="{
                control: props.photoSwiper
            }"
            @swiper="props.setContentSwiper"
        >
            <swiper-slide v-for="(item, index) in props.swiperList" :key="index">
                <div class="p-2">
                    <blockquote class="m-0">
                        <h3>{{item.title}}</h3>
                        <p>{{item.content}}</p>
                    </blockquote>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>