<script setup>
import { ref } from 'vue';

const profile = ref(null);

const getProfile = async () => {
  try {
    const date = await liff.getProfile()
    profile.value = date;
  } catch (error) {
    console.log(`liff.getProfile error ${error}`);
  }
}

defineOptions({
    name: 'Profile'
})
</script>

<template>
    <article>
        <header>
            <h3><b class="accent">取得資料使用者資料</b></h3>
        </header>
        <button @click="getProfile">取得資料</button>
        <br/>
        <ul v-if="profile">
            <li ><img class="profile-picture" loading="lazy" :src="profile?.pictureUrl" alt="profile picture"></li>
            <li v-for="(item, key) of profile" :key="key">{{key}} ： {{item}} </li>
        </ul> 
    </article>
</template>

<style scoped>
.profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 100%;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>