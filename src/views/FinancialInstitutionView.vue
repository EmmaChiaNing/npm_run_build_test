<template>
    <div class="container">
      <div class="home">
        <input type="text" v-model="inputValue" @input="searchKey" />
        <ul ref="bankListContainer">
            <li v-for="(item, index) in bankIdList" :key="index">
                <span v-html="item.value"></span>
                <span v-html="item.label"></span>
            </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import financialInstitution from '@/data/financialInstitution.json';

  const inputValue = ref("");

    const searchKey = (e) => {
        const searchValue = e.target.value.trim();
        const reg = new RegExp(searchValue, "gi");

        // 如果 input 值為空時，重置為原始清單
        if (!searchValue) {
            bankIdList.value = [...financialInstitution];
            return;
        }

        inputValue.value = searchValue;
        bankIdList.value = financialInstitution.map((item) => {
            // 建立新物件，避免直接修改原始資料
            const highlightedItem = {
            ...item,
            value: item.value.replace(reg, (match) => `<span style="color: red">${match}</span>`),
            label: item.label.replace(reg, (match) => `<span style="color: red">${match}</span>`),
            };

            // 篩選符合條件的項目
            return (
                item.value.includes(searchValue) || item.label.includes(searchValue)
            ) ? highlightedItem : null;
        }).filter(Boolean); // 移除不符合條件的項目 (過濾掉 null)
    };


  const bankIdList = ref(financialInstitution);
</script>
