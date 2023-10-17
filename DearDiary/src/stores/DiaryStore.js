import {defineStore} from 'pinia'

export const useDiaryStore = defineStore("diaryStore", {
    state : () => ({
        diary: [
            {id:1 ,diary : "Today is nice day", date: "11.06.2023" , isFav : false},
            {id:2 ,diary : "I start the pinia", date: "10.02.2023" , isFav : false}

        ],
    })
})