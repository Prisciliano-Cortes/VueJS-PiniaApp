<script setup lang="ts">
    import { useCounterOptionsStore } from '@/store/counter-options';
    import CounterOptionsValue from '../components/CounterOptionsValue.vue';

    const counterOptionsStore = useCounterOptionsStore()
</script>

<template>
    <h1>Pinia Options</h1>
    <h4>Counter: {{ counterOptionsStore.count }}</h4>
    <h4>Square: {{ counterOptionsStore.squareCount }}</h4>

    <br />

    <button @click="counterOptionsStore.increment()">+1</button>
    <button @click="counterOptionsStore.incrementBy(2)">+2</button>
    <button @click="counterOptionsStore.incrementBy(5)">+5</button>

    <button @click="counterOptionsStore.$reset()">Reset</button>

    <CounterOptionsValue />
</template>

<style scoped>
    button {
        margin-right: 5px;
    }
</style>