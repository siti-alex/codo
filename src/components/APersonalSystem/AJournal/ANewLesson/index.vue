<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="800px")
    v-card.noscroll
      v-card-title
        span.headline Новый урок
      v-card-text
        v-container
          v-row
            v-col(cols='5')
              v-date-picker(v-model='date' no-title='' locale='ru-ru')
            v-col(cols='3')
              v-text-field(label='Кабинет')
              v-text-field(label="Учитель")
            v-col(cols='4')
              v-text-field(label="Номер пары")
              v-text-field(label="Предмет")


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
    date: new Date().toISOString().substr(0, 10),
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