import { ref, watch, computed } from 'vue';
import { useQuery, useQueryClient, useMutation } from '@tanstack/vue-query';
import clientsApi from '@/api/clients-api';
import type { Client } from '../interfaces/client';


const getClient = async( id: number):Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${id}`)

    return data
}

const updateClient = async( client: Client ):Promise<Client> => {
    // const queryClient = useQueryClient()

    const { data } = await clientsApi.patch<Client>(`/clients/${ client.id}`, client)

    // const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: true })

    // queries.forEach( query => query.fetch())

    return data
}

const useClient = ( id: number ) => {

    const client = ref<Client>()
    const queryClient = useQueryClient()

    const { isLoading, data, isError } = useQuery(
        ['client', id],
        () => getClient(id),
        {
            retry: false
        }
    )

    // const clientMutation = useMutation( updateClient )
    const clientMutation = useMutation({
        mutationFn: updateClient,
        onSuccess: () => {
            // const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: true })

            // queries.forEach( query => query.fetch())

            //*** invalidate cache and refetching */
            queryClient.invalidateQueries(["clients?page=", id])
        }
    })

    watch(data, () => {
        if (data) {
            client.value = { ...data.value! }
        }
    }, { immediate: true })

    const updateClientMutation = clientMutation.mutate
    const resetClientMutation  = clientMutation.reset
    const isLoadingMutation    = computed( () => clientMutation.isLoading.value )
    const isSuccessMutation    = computed( () => clientMutation.isSuccess.value )

    return {
        client,
        isLoading,
        isError,

        isLoadingMutation,
        isSuccessMutation,
        resetClientMutation,
        updateClientMutation,
    }
}

export default useClient