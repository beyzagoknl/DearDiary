<template>
 <div class="box">
          <div>
            <p>{{diary.diary}}</p>
            <small class="date">{{diary.date}}</small>
          </div>
        <div>
        <i class="material-icons" :class="{active : diary.isFav}" @click="diaryStore.toggleFav(diary.id)">favorite</i>
        <i class="material-icons" @click="diaryStore.deleteDiary(diary.id)">delete</i>
        </div>
      </div>

</template>

<script>
import { useDiaryStore } from '../stores/DiaryStore'

    export default {
       setup(){
          const diaryStore = useDiaryStore()
          return {diaryStore}
        },
        props: ['diary'],
      
    }
</script>

<style lang="scss" scoped>

</style>