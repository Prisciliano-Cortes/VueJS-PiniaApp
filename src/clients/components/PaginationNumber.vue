<script setup lang="ts">
    import { ref, toRef, watch } from 'vue';

    interface Props {
        totalPages: number;
        currentPage: number;
    }

    interface Emits {
        (e: 'getPage', page: number ): void 
    }

    const props = defineProps<Props>()

    const emits = defineEmits<Emits>()

    const totalPages = toRef( props, 'totalPages' )
    const currentPage = toRef( props, 'currentPage' )

    const totalPageNumber = ref<number[]>([])

    watch( totalPages, () => {
        totalPageNumber.value = [...new Array(totalPages.value)].map( (_, index) => index + 1 )
    }, { immediate: true })
</script>

<template>
    <div>
        <button 
            :disabled="currentPage === 1"
            @click="emits('getPage', currentPage - 1)"
        >
            Prev
        </button>

        <button 
            v-for="number of totalPageNumber"
            :key="number"
            @click="emits('getPage', number)"
            :class="{ active: currentPage === number }"
        >
            {{ number }}
        </button>

        <button 
            :disabled="currentPage === totalPages"
            @click="emits('getPage', currentPage + 1)"
        >
            Next
        </button>
    </div>
</template>


<style scoped>
    div {
        margin-top: 10px;
    }

    button {
        background-color: transparent;
        border-radius: 5px;
        border: 1px solid var( --color-border );
        color: var( --color-text );
        cursor: pointer;
        margin-right: 5px;
        padding: 10px;
        transition: all .5s;
    }

    button:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
        transition: all .5s;
    }

    button:disabled {
        cursor: not-allowed;
    }

    .active {
        background-color: hsla(160, 100%, 37%, 0.2);
    }
</style>