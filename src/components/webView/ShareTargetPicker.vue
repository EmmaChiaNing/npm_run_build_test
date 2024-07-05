<script setup>
import { ref } from 'vue';
import liff from '@line/liff';

const sendMessage = ref('');

const shareTargetPicker = async () => {
  if (liff.isApiAvailable("shareTargetPicker")) {
    try {
      const picker = await liff.shareTargetPicker([
        {
          type: "text",
          text: sendMessage.value,
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

defineOptions({
    name: 'ShareTargetPicker'
})
</script>
<template>
    <article>
        <header>
            <h3><b class="accent">發送 Line 訊息</b></h3>
        </header>
        <input type="text" v-model="sendMessage"/>
        <br/>
        <button @click="shareTargetPicker">傳送訊息 shareTargetPicker</button>
    </article>
</template>
