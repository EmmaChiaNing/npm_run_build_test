<script setup>
import { ref, defineAsyncComponent} from 'vue';
import DynamicModel from './DynamicModel.vue'
import ErrorComponent from './Error.vue';
import LoadingComponent from './Loading.vue';

const show = ref(false)

const Dynamic = defineAsyncComponent({
  loader: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(DynamicModel);
      }, 3000); // 模擬 3 秒的載入時間
    }),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 1000,
  timeout: 10000
});

defineOptions({name: 'LazyLoad'})

</script>

<template>
    <div class="lazy-load-components">
        <button @click="show = !show">點我打開視窗</button>
        <Dynamic v-if="show" />
    </div>
</template>


<style lang="scss" scoped>

</style>