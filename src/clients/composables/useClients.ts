import { watch } from "vue"
import { storeToRefs } from "pinia"
import { useQuery } from "@tanstack/vue-query"
import { useClientStore } from "@/store/clients"
import clientsApi from "@/api/clients-api"
import type { Client } from "../interfaces/client"

const getClients = async( page: number ):Promise<Client[]> => {

    // await new Promise( resolve => {
    //     setTimeout(() => {
    //         resolve(true)
    //     }, 1500);
    // })

    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`)

    return data
}

const useClients = () => {

    const storeClient = useClientStore()

    const { clients, currentPage, totalPages } = storeToRefs( storeClient );

    const { isLoading, data } = useQuery(
        ['clients?page=', currentPage],
        () => getClients( currentPage.value ),
        {
            //staleTime: 1000 * 60
        }
    )

    watch( data, clients => {
        if (clients) {
            storeClient.setClients(clients)
        }
    }, { immediate: true })

    function getPage( page: number ) {
        storeClient.setPage(page)
    }

    return {
        clients,
        isLoading,
        currentPage,
        totalPages,

        getPage,
    }
}

export default useClients