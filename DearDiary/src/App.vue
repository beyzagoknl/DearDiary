<template>
  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="pinia" title="Pinia" />
      <h1>My Diary</h1>
    </div>
  </header>
  <main>
    <div class="container">
    <new-diary></new-diary>
    <div class="data-area">
    <p v-if="filter==='all'">Total diary : {{totalCount}}</p>
    <p  v-if="filter==='favs'" >Total diary : {{favCount}}</p>

    <div>
    <button @click="filter='all'">All Diaries</button>
     <button @click="filter='favs'">Favourite Diaries</button>

    </div>
    </div>
    
      <div class="diary-list" v-for="diary in diary" v-if="filter==='all'">
        <diary-details :diary="diary"></diary-details>
      </div>

    <div class="diary-list" v-for="diary in favs"  v-if="filter==='favs'">
        <diary-details :diary="diary"></diary-details>
      </div>

        <p><button @click= "diaryStore.$reset">Reset</button></p>

    </div>
  </main>
</template>

<script>
import {ref} from 'vue';
import diaryDetails from "./components/diary-details.vue";
import { useDiaryStore } from "./stores/DiaryStore"; //import the store
import newDiary from "./components/new-diary.vue";
import {storeToRefs} from 'pinia'

export default {
  components: {
    "diary-details": diaryDetails,
    "new-diary": newDiary
  },
  setup() {
    const diaryStore = useDiaryStore();
    const { diary, loading, favs, totalCount, favCount} =storeToRefs(diaryStore)
    const filter = ref('all')
    diaryStore.getDiary()
  
    return { diaryStore,filter, diary, loading, favs, totalCount, favCount}; //define store
  },
};
</script>

<style lang="scss" scoped></style>
