import { ref, computed } from 'vue';
import { defineStore } from "pinia";

export const useCounterSetupStore = defineStore('counterSetup', () => {
    const count = ref<number>(0)
    const lastChange = ref<Date>()

    const squareCount = computed( () => {
        return count.value * count.value
    })

    const incrementBy = (value: number) => {
        count.value += value
        lastChange.value = new Date()
    }

    const increment = () => {
        incrementBy(1)
    }

    return {
        //*** State */
        count,
        lastChange,

        //*** Getter */
        squareCount,

        //*** Actions */
        incrementBy,
        increment
    }
})