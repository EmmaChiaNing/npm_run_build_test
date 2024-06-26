<script setup>
import { ref, watch } from 'vue'
const copyValues = ref(false)
const subscriber = ref('')
const addressee = ref('')
const addresseeDisabled = ref(false)

watch([copyValues, subscriber], ([copyValues, subscriber]) => {
    if (copyValues) {
        addressee.value = subscriber
        addresseeDisabled.value = true
        return
    }
    addresseeDisabled.value = false
})

</script>

<template>
    <div class="watch">
        <ul>
            <li class="checkbox">
                <label>同訂購人</label>
                <input type="checkbox" v-model="copyValues" />
            </li>
            <li>
                <label>訂購人</label>
                <input type="text" v-model="subscriber">
            </li>
            <li>
                <label>收件人</label>
                <input type="text" v-model="addressee" :disabled="addresseeDisabled">
            </li>
        </ul>
    </div>
</template>

<style lang="css" scoped>
.watch label {
    margin: 0;
    padding-bottom: 5px;
}
.watch ul {
    list-style: none
}
.watch ul li {
    padding-bottom: 30px;
}
.checkbox {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>