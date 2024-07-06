<script setup>
import { ref, defineAsyncComponent} from 'vue';
import DynamicModel from './DynamicModel.vue'
import ErrorComponent from './Error.vue';
import LoadingComponent from './Loading.vue';

const show = ref(false);

const Dynamic = defineAsyncComponent({
  loader: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(DynamicModel);
      }, 3000); // 模擬 3 秒的載入時間
    }),
  // 加載異步元件時使用的元件
  loadingComponent: LoadingComponent,
  // 加載失敗時使用的元件
  errorComponent: ErrorComponent,
  // 在顯示加載元件之前延遲。默認值：1000ms
  delay: 1000,
  // 超過指定時間，顯示錯誤元件。默認值：Infinity
  timeout: 10000
});

defineOptions({
  name: 'LazyLoad'
});
</script>

<template>
    <div class="lazy-load-components">
        <article>
            <p>定義一個非同步元件，它在運行時是懶加載的。參數可以是一個非同步載入函數，或是對載入行為進行更具體自訂的選項物件。</p>
        </article>
        <button @click="show = !show">點我打開視窗</button>
        <Dynamic v-if="show" />
    </div>
</template>