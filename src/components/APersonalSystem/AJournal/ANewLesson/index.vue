<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="600px")
    v-card.noscroll
      v-card-title
        span.headline Новый урок
      v-card-text
        v-container
          v-row
            v-col(cols='12')
              v-text-field(label='Кабинет')
            v-col(cols='12')
              v-text-field(label="Номер пары")
            v-col(cols='12')
              v-text-field(label="Предмет")
            v-col(cols='12')
              v-text-field(label="Учитель")



      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='' @click="showDialog()") Сохранить
        v-btn(color='blue darken-1', text='' @click="showDialog()") Отмена
</template>

<script>
//import Api from '@/service/apiService';
export default {
name: "ANewLesson",
  data: () => ({
    mutableDialog: false,
  }),
  methods: {
    showDialog() {
      this.mutableDialog = !this.mutableDialog;
    },
  }
}
</script>

<style scoped>

</style>