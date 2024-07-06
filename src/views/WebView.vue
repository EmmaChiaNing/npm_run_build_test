<script setup>
import { onMounted, ref } from 'vue';
import liff from '@line/liff';
import VConsole from 'vconsole';

import Buttons from '@/components/webView/Buttons.vue';
import ShareTargetPicker from '@/components/webView/ShareTargetPicker.vue';
import Profile from '@/components/webView/Profile.vue';
import CurrentDeviceType from '@/components/webView/CurrentDeviceType.vue';
import CloseWindow from '@/components/webView/CloseWindow.vue';
import Console from '@/components/webView/VConsole.vue';

const isLoggedIn = ref(false);
const vConsole = new VConsole();

onMounted(async () => {
  vConsole.show();
  try {
    await liff.init({ liffId: import.meta.env.VITE_Liff_ID });
    if (liff) 
      isLoggedIn.value = liff.isLoggedIn()
  } catch (error) {
    console.log(`liff.state init error ${error}`);
  }
});
</script>

<template>
    <div class="webView">
      <Buttons v-model="isLoggedIn"/>
      <template v-if="isLoggedIn">
            <ShareTargetPicker />
            <Profile />
            <CloseWindow />
            <CurrentDeviceType />
            <Console/>
      </template>
    </div>
</template>