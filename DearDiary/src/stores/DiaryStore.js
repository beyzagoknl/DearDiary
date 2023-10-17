import {defineStore} from 'pinia'

export const useDiaryStore = defineStore("diaryStore", {
    state : () => ({
        diary: [
            {id:1 ,diary : "Today is nice day", date: "11.06.2023" , isFav : false},
            {id:2 ,diary : "I start the pinia", date: "10.02.2023" , isFav : true}

        ],
    }),
    getters: {
        favs(){

            return this.diary.filter(diary=>diary.isFav)
        },
        
        favCount(){
            return this.diary.reduce((previous,current) => {
                return current.isFav? previous+ 1 : previous

            },0)
 
        },
        totalCount : (state) => { //I am using arrow function so I will not use this anymore, change to this to state
            return state.diary.length
        }
    },
    actions:{
        newDiary(diary){
            this.diary.push(diary)

        },
        toggleFav(id){
    
            const diary = this.diary.find(diary => diary.id===id )
            diary.isFav = !diary.isFav

        },
        deleteDiary(id){
            this.diary = this.diary.filter(diary => {
                return diary.id !== id

            })
        }
    }
})