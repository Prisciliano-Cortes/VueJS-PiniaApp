<script setup lang="ts">
    import { watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import useClient from '../composables/useClient';
    import LoadingModal from '@/shared/components/spinners/LoadingModal.vue';

    const route = useRoute()
    const router = useRouter()
    const id = route.params.id

    const { 
        client, 
        isError, 
        isLoading, 
        isLoadingMutation,
        isSuccessMutation,
        resetClientMutation,
        updateClientMutation,
    } =  useClient( +id )

    watch(isSuccessMutation, () => {
        setTimeout(() => {
            resetClientMutation()
        }, 1000);
    })

    watch(isError, () => {
        if (isError.value) {
            router.replace('/clients')
        }
    })
</script>

<template>
    <h3 v-if="isLoadingMutation">Saving...</h3>
    <h3 v-if="isSuccessMutation">Saving</h3>

    <LoadingModal v-if="isLoading" />

    <div v-if="client">
        <h1>{{ client.name }}</h1>

        <form @submit.prevent="updateClientMutation(client!)">
            <input 
                type="text"
                placeholder="Name"
                v-model="client.name"
            />
            <br />

            <input 
                type="text"
                placeholder="Direction"
                v-model="client.address"
            />
            <br />

            <button 
                type="submit"
                :disabled="isLoadingMutation"
            >
                Save
            </button>
        </form>
    </div>

    <code>
        {{  client }}
    </code>
</template>

<style scoped>
    input {
        width: 100%;
        padding: 5px 10px;
        margin-bottom: 10px;
    }

    button {
        margin-bottom: 10px;
    }
</style>