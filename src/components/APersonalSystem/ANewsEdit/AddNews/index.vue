<template lang="pug">
div
    v-dialog(v-model='dialog' persistent='' width='500px' height="1000px")
      v-card
        v-img.white--text.align-end(height='300px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
          //v-file-input(accept='image/*' dark='')
          v-card-title
            v-text-field(label="Заголовок" dark='' v-model="newPost.title").title
        v-card-subtitle.pb-0.mt-5
          | Дата
        v-card-text.text--primary
          v-textarea(auto-grow='' value='Текст' v-model="newPost.text")
          v-file-input(label='Вставить изображение' accept='image/*' prepend-icon='mdi-camera' small-chips='' v-model="newPost.img")
        v-divider
        v-card-actions
          v-btn(text='' color='deep-purple accent-4' @click="dialog = false")
            | Отмена
          v-spacer
          v-btn(text='' color='green darken-2' @click="uploadNews")
            | Сохранить
</template>

<script>
import Api from '@/service/apiService';
export default {
name: "AddNews",
  data:()=> ({
    dialog: false,
    newPost: {
      title: '',
      text: 'Текст',
      img: null,
    },
  }),
  methods: {
    showDialog(){
      this.dialog = !this.dialog;
    },
    test(){
      console.log(this.newPost.title);
      console.log(this.newPost.text);
      console.log(this.newPost.img);
    },
    uploadNews(){
      let formdata = new FormData();
      formdata.append("head", this.newPost.title);
      formdata.append("text", this.newPost.text);
      formdata.append("file", this.newPost.img);
      Api.setNews(formdata).then(result => {
        console.log(result.data);
        this.dialog = !this.dialog;
      })
    },
  }
}
</script>

<style scoped>

</style>