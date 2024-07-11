
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps({
    modules: { type: Array, default: () => [] },
    thumbsSwiper: { type: Object, default: () => {} },
    contentSwiper: { type: Object, default: () => {} },
    swiperList: { type: Array, default: () => [] },
    setPhotoSwiper: { type: Function, default: () => {} },
});

const progressLine = ref(null);

const onAutoplayTimeLeft = (s, time, progress) => {
    progressLine.value.style.setProperty('--progress', progress);
};

const setPagInfo =  (currentClass, totalClass) => {
    return `<span class=${currentClass}></span> / <span class=${totalClass}></span>`;
}

</script>

<template>
    <div class="swiper-photo">
        <swiper
            loop    
            :modules="props.modules"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: false
            }"
            :navigation="{
                nextEl: '.next-button',
                prevEl: '.prev-button',
                disabledClass: 'bg-disabled cursor-auto',
            }"
            :pagination="{
                type: 'fraction',
                renderFraction: setPagInfo,
                el: '.swiper-pag-text'          
            }"
            :thumbs="{ swiper: props.thumbsSwiper }"
            effect="coverflow"
            :coverflowEffect="{
                rotate: 0,
                stretch: 100,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            }"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            :controller="{
                control: props.contentSwiper
            }"
            @swiper="props.setPhotoSwiper"
            :zoom="true" 
            :limitToOriginalSize="false"
        >
            <swiper-slide v-for="(item, index) in props.swiperList" :key="index">
                <div class="bg-accent width height flex center align-center swiper-slide-item">
                    <p class="absolute">{{ item.title }}</p>
                    <img :src="item.img" :id="index"/>
                </div>
            </swiper-slide>
            <template #container-end>
                <div class="progress" ref="progressLine"></div>
            </template>
        </swiper>
    </div>
    <div class="navigation">
        <div class="navigation-button prev-button">prev</div>
        <div class="swiper-pag-text"></div>
        <div class="navigation-button next-button">next</div>
    </div>
</template>