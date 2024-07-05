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
        // succeeded in sending a message through TargetPicker
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
      // something went wrong before sending a message
      console.log(error);
      console.log("Flex Message got some error");
      liff.closeWindow();
    }
  } else console.log("Please login...");
}

onMounted(async () => {
    try {
      await liff.init({ liffId: "2005773506-b25V0Rgw" }); // Use own liffId
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
