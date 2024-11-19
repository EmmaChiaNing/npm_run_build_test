<template>
    <select v-model="bankId.value" @change="selectBankData" autocomplete="on">
        <option v-for="(item, index) in financialInstitution" :key="index" :value="item.value" :data-name="item.label">{{item.value}} {{item.label}}</option>
    </select>
    <p class="mt-1" v-if="bankId.value">銀行代碼：{{ bankId }}</p>
    <input class="mt-2" type="text" id="searchInput" placeholder="Search..." v-model="keyword">
    <button @click="highlightText">Search</button>
    <ul ref="bankListContainer">
        <li v-for="(item, index) in bankList" :key="index">{{item.value}} {{item.label}}</li>
    </ul>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import financialInstitution from '@/data/financialInstitution.json';

const bankId = ref({
    value: null
});

const keyword = ref('')
const bankListContainer = ref(null)
const bankList = ref([])
const initialFilteredContent = ref(null)

const selectBankData = (e) => {
    const selectItem = financialInstitution.find((bank) => bank.value === e.target.value)
    bankId.value = selectItem;
}

const highlightText = () => {
    if (keyword.value !== '') {
        const searchValue = keyword.value.trim();
        // filter highlight span tag
        // const filteredContent = content.replace(/<span class="fg-attention">(.*?)<\/span>/gi, '$1');
        bankList.value = financialInstitution.filter((str) =>  { return str.value.includes(searchValue) || str.label.includes(searchValue) });
        const content = bankListContainer.value;
    
        nextTick(() => {
            const filteredContent = content.innerHTML.replace(/<span class="fg-attention">(.*?)<\/span>/gi, '$1');
    
                const highlightedContent = filteredContent.replace(new RegExp(searchValue, 'gi'), '<span class="fg-attention">$&</span>');
                bankListContainer.value.innerHTML = highlightedContent;
    
            // bankList.value = financialInstitution
            // console.log("🚀 ~ nextTick ~ financialInstitution:", financialInstitution)
            // bankListContainer.value.innerHTML = filteredContent;
            // console.log("🚀 ~ nextTick ~ filteredContent:", filteredContent)
        })
    } else {
        bankList.value = financialInstitution;
        
    }
}

onMounted(() => {
    bankList.value = financialInstitution;
})


defineOptions({
    name: 'FinancialInstitutionView'
})
</script>


