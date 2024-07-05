<script setup>
import { onMounted } from 'vue';
import liff from '@line/liff';

const sendTargetPicker = async () => {
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
  }
  if (liff.isApiAvailable("shareTargetPicker")) {
    try {
      const picker = await liff.shareTargetPicker([
        {
          type: "text",
          text: "Hello, World!",
        },
      ]);
      if (picker) {
        // 發送成功
        console.log(`[${picker.status}] Message sent!`);
      } else {
        const [majorVer, minorVer] = (liff.getLineVersion() || "").split(".");
        if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
          console.log(
            "TargetPicker was opened at least. Whether succeeded to send message is unclear"
          );
        } else console.log("TargetPicker was closed!");
      }
    } catch (error) {
      // 錯誤處理
      console.log(error);
      console.log("Flex Message got some error");
      liff.closeWindow();
    }
  } else console.log("Please login...");
}

onMounted(async () => {
    try {
      await liff.init({ liffId:  import.meta.env.VITE_Liff_ID }); // Use own liffId
      if (!liff.isLoggedIn())
        liff.login({ redirectUri: window.location.href });
    } catch (err) {
      console.log(`liff.state init error ${err}`);
    }
})
</script>
<template>
    <div class="webView">
        <button @click="sendTargetPicker">Send Sample</button>
    </div>
</template>
