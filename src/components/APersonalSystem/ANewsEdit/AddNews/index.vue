<template lang="pug">
div
    v-dialog(v-model='dialog' persistent='' width='500px')
      v-card(tile='').pa-5
        v-card(outlined='' elevation="19" tile='')
          v-img.white--text.align-end(height='250px' :src='defaultImg' v-if="!newPost.img")
            v-card-title
              v-text-field(label="Заголовок" dark='' v-model="newPost.title").title
          v-img.white--text.align-end(height='250px' :src='previewImg' v-if="newPost.img")
            v-card-title
              v-text-field(label="Заголовок" dark='' v-model="newPost.title").title
          v-card-subtitle.pb-0
            | Дата
          v-card-text.text--primary
            v-divider
            v-textarea(auto-grow='' value='Текст' v-model="newPost.text" autofocus='')
            //v-file-input(label='Вставить изображение' hide-input='' accept='image/*' prepend-icon='mdi-camera' small-chips='' v-model="newPost.img")
          v-divider
          v-card-actions
            //v-btn(text='' color='deep-purple accent-4' @click="dialog = false")
            v-btn(text='' color='deep-purple accent-4' @click="dialog = false")
              | Отмена
            v-spacer
            v-file-input(label='Вставить изображение' accept="image/*" @change="imgPreview" hide-input='' prepend-icon='mdi-camera' v-model="newPost.img").mb-3
            v-btn(text='' color='green darken-3' @click="uploadNews")
              | Сохранить
</template>

<script>
import Api from '@/service/apiService';
export default {
name: "AddNews",
  data:()=> ({
    dialog: false,
    defaultImg: 'https://www.amurobl.ru/upload/iblock/5e2/image_21_08_20_02_41_5.jpeg',
    previewImg: '',
    newPost: {
      title: '',
      text: 'Текст',
      img: null,
    },
  }),
  methods: {
    imgPreview(){
      if(this.newPost.img) {
        const file = this.newPost.img;
        this.previewImg = URL.createObjectURL(file);
      }
    },
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
        //this.dialog = !this.dialog;
        //this.newPost.img = `http://213.87.96.9:6006/news/getImage?id=${result.data}`
        this.$emit('update');
      });
          this.dialog = !this.dialog;
    },
  }
}
</script>

<style scoped>

</style>
