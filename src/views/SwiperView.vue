<script setup>
import { ref } from 'vue';
import ConsumptionTopic from '@/components/swiper/consumptionTopic/ConsumptionTopic.vue';
import HomeBanner from '@/components/swiper/homeBanner/HomeBanner.vue';

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
	},
	{
        title: 'Slide 4',
		img: 'https://picsum.photos/900/506',
        content: 'olorem odio accusantium molestiae be itaque, corporis sit earum placeat.'
	}
]);

</script>
<template>
    <ConsumptionTopic :list="swiperList"/>
    <br/>
    <HomeBanner :list="swiperList"/>
</template>