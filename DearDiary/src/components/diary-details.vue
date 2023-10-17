<template>
 <div class="box">
          <div>
            <p>{{diary.diary}}</p>
            <small class="date">{{diary.date}}</small>
          </div>
        <div>
        <i class="material-icons">favorite</i>
        <i class="material-icons">delete</i>
        </div>
      </div>

</template>

<script>
    export default {
        props: ['diary']
        
    }
</script>

<style lang="scss" scoped>

</style>