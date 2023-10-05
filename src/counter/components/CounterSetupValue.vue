<script setup lang="ts">
    import { useCounterSetupStore } from '../../store/counter-setup';

    const counterSetupStore = useCounterSetupStore()
</script>

<template>
    <h1>This value is {{ counterSetupStore.count }}</h1>

    <h4>Ultimate change {{ counterSetupStore.lastChange }}</h4>
</template>


<style scoped>

</style>