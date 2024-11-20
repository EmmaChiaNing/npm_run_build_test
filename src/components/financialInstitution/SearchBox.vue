<template>
	<div class="flash muted" v-show="isSearchBoxVisible">
		<div class="search-box">
			<input type="text" v-model.trim="inputValue" @keyup.enter="searchKey" />
			<button @click="searchKey">Search</button>
		</div>
		<ul ref="bankListContainer" class="bankList-container">
			<li v-for="(item, index) in bankList" :key="index" @click="selectBank(item)">
				<span v-html="item.value"></span>
				<span v-html="item.label"></span>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from "vue";
import financialInstitution from '@/data/financialInstitution.json';

const emit = defineEmits(['changeBankFieldValue'])

const isSearchBoxVisible = defineModel('isSearchBoxVisible', {
	type: Boolean,
	default: false
})

const inputValue = ref("");
const isSearch = ref(false);

const resetBankList = () => {
    bankList.value = [...financialInstitution];
    isSearch.value = false;
}

const resetSearchBoxState = () => {
    isSearch.value = false;
    isSearchBoxVisible.value = false;
    inputValue.value = "";
    resetBankList();
}

// 篩選列表
const filterBankList = () => {
	return financialInstitution.filter((bank) => {
		// 篩選符合條件的項目
		const { value, label } = bank;
		return value.includes(inputValue.value) || label.includes(inputValue.value)
	})
}

// 增加關鍵字 highlight
const addKeywordHighlight = (bankList) => {
	const reg = new RegExp(inputValue.value, "gi");
	return bankList.reduce((prev, current) => {
		const { value, label } = current;
		// 建立新物件，避免直接修改原始資料
		prev.push({
				value: value.replace(reg, `<span class="fg-attention">$&</span>`),
        label: label.replace(reg, `<span class="fg-attention">$&</span>`),
		})
    return prev;
	}, [])
}

const searchKey = () => {
    // 如果 input 值為空時，重置為原始清單
    if (!inputValue.value) {
			resetBankList();
        return;
    }
		// 有搜尋過的旗標
    isSearch.value = true;
		// 創建新列表( 篩選列表、增加關鍵字 highlight)
		bankList.value = addKeywordHighlight(filterBankList());
		// 沒找到符合條件的項目就給全部清單
		if (!bankList.value.length) {
			resetBankList();
		}
};

const filterHighlightStyle = (bank) => {
	const reg = new RegExp(/<span class="fg-attention">(.*?)<\/span>/, "gi");
	return {
		value: bank.value.replace(reg, '$1'),
		label: bank.label.replace(reg, '$1'),
	};
}

const selectBank = (bank) => {
    if (!isSearch.value) {
			emit('changeBankFieldValue', `${bank.value} ${bank.label}`);
    } else {
			const selectItem = filterHighlightStyle(bank);
			emit('changeBankFieldValue', `${selectItem.value} ${selectItem.label}`);
    }
    resetSearchBoxState();
}

const bankList = ref(financialInstitution);

defineOptions({
	name: 'FinancialInstitutionSearchBox'
})
</script>

<style lang="css" scoped>
.search-box {
    display: flex;
    gap: 5px;
    margin-bottom: 1rem;
}
.bankList-container {
    display: flex;
    height: 300px;
    overflow-y: auto;
    flex-direction: column;
    gap: 5px;
    margin: 0;
    padding: 0;
}
.bankList-container li {
    display: flex;
    gap: 5px;
    cursor: pointer;
}
.bankList-container li:hover {
    color: #4493f8;
}
input {
    margin: 0;
}
button {
    width: 100px; 
    margin: 0;
}
</style>