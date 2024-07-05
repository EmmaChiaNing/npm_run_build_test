<script setup>
import { onMounted, ref } from 'vue';
import liff from '@line/liff';
import Buttons from '@/components/webView/Buttons.vue'
import ShareTargetPicker from '@/components/webView/ShareTargetPicker.vue'
import Profile from '@/components/webView/Profile.vue'
import CurrentDeviceType from '@/components/webView/CurrentDeviceType.vue'

const isLoggedIn = ref(false);

onMounted(async () => {
  try {
    await liff.init({ liffId: import.meta.env.VITE_Liff_ID });
    if (liff) 
      isLoggedIn.value = liff.isLoggedIn()
  } catch (error) {
    console.log(`liff.state init error ${error}`);
  }
})

</script>

<template>
    <div class="webView">
      <Buttons v-model="isLoggedIn"/>
      <template v-if="isLoggedIn">
            <ShareTargetPicker />
            <Profile />
            <CurrentDeviceType />
      </template>
    </div>
</template>