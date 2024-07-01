<script setup>
import { ref,defineAsyncComponent} from 'vue';
import DynamicModel from '../components/lazyLoadComponents/DynamicModel.vue'
import ErrorComponent from '../components/lazyLoadComponents/Error.vue';
import LoadingComponent from '../components/lazyLoadComponents/Loading.vue';

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

const show = ref(false)
</script>

<template>
    <div class="lazy-load-components">
        <button @click="show = !show">點我打開視窗</button>
        <div style="padding: 20px;">
            <Dynamic v-if="show" />
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>