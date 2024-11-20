<template>
	<div class="container">
		<BankField 
			:bank-field-value="bankFieldValue" 
			:is-search-box-visible="isSearchBoxVisible" 
			:is-error="isError"
			@handler-search-box-visible="handlerSearchBoxVisible"
		/>
		<SearchBox 
			v-model:isSearchBoxVisible="isSearchBoxVisible" 
			@change-bank-field-value="changeBankFieldValue"
		/>
		<button @click="onSubmit">Submit</button>
	</div>
</template>
  
<script setup>
import { ref } from "vue";
import BankField from "@/components/financialInstitution/BankField.vue";
import SearchBox from "@/components/financialInstitution/SearchBox.vue";

const bankFieldValue = ref("請選擇匯款銀行代碼");
const isSearchBoxVisible = ref(false);
const isError = ref(false);

const handlerSearchBoxVisible = () => {
	isSearchBoxVisible.value = !isSearchBoxVisible.value
}

const changeBankFieldValue = (val) => {
	bankFieldValue.value = val
	isError.value = false;
}

const onSubmit = () => {
	console.log("🚀 ~ onSubmit ~ bankFieldValue.value:", bankFieldValue.value)
	if (!bankFieldValue.value || bankFieldValue.value === "請選擇匯款銀行代碼") {
		isError.value = true;
	} else {
		isError.value = false;
	}
}
</script>
