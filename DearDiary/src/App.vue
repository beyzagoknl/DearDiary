<template>
  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="pinia" title="Pinia" />
      <h1>My Diary</h1>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="diary-list" v-for="diary in diaryStore.diary"> 

      <diary-details :diary="diary"></diary-details>
       
    </div>
    </div>

  </main>
</template>

<script>
import diaryDetails from './components/diary-details.vue';
import { useDiaryStore } from "./stores/DiaryStore"; //import the store

export default {
  components:{
    "diary-details" : diaryDetails
  },
  setup() {
    const diaryStore = useDiaryStore();
    return { diaryStore }; //define store
  },
};
</script>

<style lang="scss" scoped>
</style>
