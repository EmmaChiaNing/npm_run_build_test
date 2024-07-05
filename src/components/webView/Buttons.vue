<script setup>
import { computed } from 'vue';
import liff from '@line/liff';

const isLoggedIn = defineModel({ type: Boolean, default: false });

const login = () => {
    if (!liff.isLoggedIn())
    liff.login({ redirectUri: window.location.href });
};

const logout = () => {
    if (liff.isLoggedIn()) 
    liff.logout()
    isLoggedIn.value = liff.isLoggedIn()
};

const setButton = (title, solution) => { 
    return {title: title, solution: solution} 
};

const button = computed(() => 
    isLoggedIn.value ? setButton('登出', logout) : setButton('登入', login) 
);


defineOptions({
    name: 'WebViewButtons'
})
</script>

<template>
   <button @click="button.solution">{{ button.title }}</button>
</template>