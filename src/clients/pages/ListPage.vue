<script setup lang="ts">
    import useClients from '../composables/useClients';
    import ClientList from '../components/ClientList.vue';
    import PaginationNumber from '../components/PaginationNumber.vue';
    import LoadingModal from '../../shared/components/spinners/LoadingModal.vue'

    const { isLoading, clients, currentPage, totalPages, getPage } =  useClients()
</script>

<template>
    <div>
        <h1>List client</h1>

        <!-- Client List -->
        <ClientList :clients="clients" />

        <!-- Pagination Number -->
        <PaginationNumber 
            :current-page="currentPage" 
            :total-pages="totalPages" 
            @get-page="getPage"
        />

        <!-- Loading Modal -->
        <LoadingModal v-if="isLoading" />
    </div>
</template>


<style scoped>

</style>