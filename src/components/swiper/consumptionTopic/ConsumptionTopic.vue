<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import PhotosSwiper from '@/components/swiper/consumptionTopic/Photos.vue'
import ContentSwiper from '@/components/swiper/consumptionTopic/Content.vue';
import ThumbsSwiper from '@/components/swiper/consumptionTopic/Thumbs.vue';
import 'swiper/css';
import '@/assets/swiper.css';
import { Autoplay, Pagination, Navigation, Controller, Thumbs, EffectCoverflow, Zoom } from 'swiper/modules';

const props = defineProps({
    list: { type: Array, default: () => [] }
})

const photoSwiper = ref(null);
const contentSwiper = ref(null);
const thumbsSwiper = ref(null);
const modules = ref([Autoplay, Pagination, Navigation, Controller, Thumbs, EffectCoverflow, Zoom]);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const setPhotoSwiper = (swiper) => {
    photoSwiper.value = swiper
}

const setContentSwiper = (swiper) => {
    contentSwiper.value = swiper
}

defineOptions({
    name: 'ConsumptionTopic'
})

</script>
<template>
    <div class="swiper-view">
        <ContentSwiper 
            :modules="modules" 
            :photo-swiper="photoSwiper" 
            :swiper-list="props.list" 
            :set-content-swiper="setContentSwiper"
        />
        <PhotosSwiper 
            :modules="modules" 
            :thumbs-swiper="thumbsSwiper" 
            :content-swiper="contentSwiper" 
            :swiper-list="props.list" 
            :set-photo-swiper="setPhotoSwiper"
        />
    </div>
    <ThumbsSwiper 
        :set-thumbs-swiper="setThumbsSwiper"
        :swiper-list="props.list" 
    />

  </template>