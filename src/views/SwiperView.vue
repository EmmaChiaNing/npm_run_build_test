<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import PhotosSwiper from '@/components/swiper/Photos.vue'
import ContentSwiper from '@/components/swiper/Content.vue';
import ThumbsSwiper from '@/components/swiper/Thumbs.vue';
import 'swiper/css';
import '@/assets/swiper.css';
import { Autoplay, Pagination, Navigation, Controller, Thumbs, EffectCoverflow, Zoom } from 'swiper/modules';

const photoSwiper = ref(null);
const contentSwiper = ref(null);
const thumbsSwiper = ref(null);
const modules = ref([Autoplay, Pagination, Navigation, Controller, Thumbs, EffectCoverflow, Zoom]);
const swiperList = ref([
    {
        title: 'Slide 1',
		img: 'https://picsum.photos/900/506?image=1081',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate.'
	},
	{
        title: 'Slide 2',
		img: 'https://picsum.photos/900/506?image=1068',
        content: 'dolore dolorem odio accusantium molestiae beatae sunt odit voluptatibus.'
	},
	{
        title: 'Slide 3',
		img: 'https://picsum.photos/900/506?image=989',
        content: 'est cum architecto repudiandae itaque, corporis sit earum placeat.'
	}
]);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const setPhotoSwiper = (swiper) => {
    photoSwiper.value = swiper
}

const setContentSwiper = (swiper) => {
    contentSwiper.value = swiper
}


</script>
<template>
    <div class="swiper-view">
        <ContentSwiper 
            :modules="modules" 
            :photo-swiper="photoSwiper" 
            :swiper-list="swiperList" 
            :set-content-swiper="setContentSwiper"
        />
        <PhotosSwiper 
            :modules="modules" 
            :thumbs-swiper="thumbsSwiper" 
            :content-swiper="contentSwiper" 
            :swiper-list="swiperList" 
            :set-photo-swiper="setPhotoSwiper"
            :set-pag-info="setPagInfo"
        />
    </div>
    <ThumbsSwiper 
        :set-thumbs-swiper="setThumbsSwiper"
        :swiper-list="swiperList" 
    />

  </template>