<script setup lang="ts">
    import { useCounterSetupStore } from '@/store/counter-setup';
    import CounterSetupValue from '../components/CounterSetupValue.vue'

    const counterSetupStore = useCounterSetupStore()
</script>

<template>
    <h1>Pinia Setup</h1>
    <h4>Counter: {{ counterSetupStore.count }}</h4>
    <h4>Square: {{ counterSetupStore.squareCount }}</h4>

    <br />

    <button @click="counterSetupStore.increment()">+1</button>
    <button @click="counterSetupStore.incrementBy(2)">+2</button>
    <button @click="counterSetupStore.incrementBy(5)">+5</button>

    <button @click="counterSetupStore.$reset()">Reset</button>

    <CounterSetupValue />
</template>

<style scoped>
    button {
        margin-right: 5px;
    }
</style>