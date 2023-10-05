<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import type { Client } from '../interfaces/client';
    
    interface Props {
        clients: Client[]
    }

    defineProps<Props>()
</script>

<template>
    <ul>
        <li 
            v-for="client of clients"
            :key="client.id"
        >
            <RouterLink :to="{ name: 'client-id', params: { id: client.id } }">
                {{ client.name }}
            </RouterLink>
        </li>
    </ul>
</template>


<style scoped>

</style>