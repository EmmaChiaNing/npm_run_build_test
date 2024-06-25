import { createRouter, createWebHistory } from 'vue-router'

const metaRouters = import.meta.glob("./modules/*.js");

const routerArray = []
for (const key in metaRouters) {
  const mod = await metaRouters[key]()
  routerArray.push(...mod.default)   
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routerArray
  ]
})

console.log('router', router)

export default router
