<script setup lang="ts">
    import { useCounterOptionsStore } from '../../store/counter-options';
    const counterOptionsStore = useCounterOptionsStore()
</script>

<template>
    <h1>This value is {{ counterOptionsStore.count }}</h1>

    <h4>Ultimate change {{ counterOptionsStore.lastChange }}</h4>
</template>


<style scoped>

</style>