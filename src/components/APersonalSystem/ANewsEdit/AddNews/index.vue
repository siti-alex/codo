<template lang="pug">
div
    v-dialog(v-model='dialog' persistent='' max-width='380px')
      v-card
        v-img.white--text.align-end(height='200px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
          v-card-title
            v-text-field(label="Заголовок" dark='').title
        v-card-subtitle.pb-0.mt-5
          | Дата
        v-card-text.text--primary
          v-textarea(auto-grow='' value='Текст')
        v-divider
        v-card-actions
          v-btn(text='' color='deep-purple accent-4' @click="dialog = false")
            | Отмена
          //v-btn(text='' color='red darken-4' @click="deleteNews(newses.indexOf(news))")
          v-spacer
          v-btn(text='' color='red darken-4' @click="dialog = false")
            | Сохранить
</template>

<script>
export default {
name: "AddNews",
  data:()=> ({
    dialog: false,

  }),
  methods: {
    showDialog(){
      this.dialog = !this.dialog;
    }
  }
}
</script>

<style scoped>

</style>