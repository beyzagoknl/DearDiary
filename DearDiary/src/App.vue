<template>
  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="pinia" title="Pinia" />
      <h1>My Diary</h1>
    </div>
  </header>
  <main>
    <div class="container">
    <div class="data-area">
    <p v-if="filter==='all'">Total diary : {{diaryStore.totalCount}}</p>
    <p  v-if="filter==='favs'" >Total diary : {{diaryStore.favCount}}</p>

    <div>
    <button @click="filter='all'">All Diaries</button>
     <button @click="filter='favs'">Favourite Diaries</button>

    </div>
    </div>
    
      <div class="diary-list" v-for="diary in diaryStore.diary" v-if="filter==='all'">
        <diary-details :diary="diary"></diary-details>
      </div>

    <div class="diary-list" v-for="diary in diaryStore.favs"  v-if="filter==='favs'">
        <diary-details :diary="diary"></diary-details>
      </div>
 
            
    </div>
  </main>
</template>

<script>
import {ref} from 'vue';
import diaryDetails from "./components/diary-details.vue";
import { useDiaryStore } from "./stores/DiaryStore"; //import the store


export default {
  components: {
    "diary-details": diaryDetails,
  },
  setup() {
    const diaryStore = useDiaryStore();
    const filter = ref('all')
    return { diaryStore,filter}; //define store
  },
};
</script>

<style lang="scss" scoped></style>
