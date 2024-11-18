<template>
    <select>
        <option v-for="(item, index) in financialInstitution" :key="index" :value="item.no">{{item.no}} {{item.name}}</option>
    </select>
</template>

<script setup>
import financialInstitution from '@/data/financialInstitution.json'

// const financialInstitutionList =  [...(
//     new Map(financialInstitution.map((item) => {
//         return { 
//             no: item.no, 
//             name: item.name
//         }
//     }).map(item => [item.no, item])).values()
// )]

// // financialInstitution.map((item) =>  {
// //     return { 
// //         no: item.no, 
// //         name: item.name
// //     }
// // })

defineOptions({
    name: 'FinancialInstitutionView'
})
</script>

<style lang="scss" scoped>

</style>