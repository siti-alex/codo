<template lang="pug">
  div
    v-dialog(v-model='dialog' persistent='' width='500px')
      v-card(tile='').pa-5
        v-card(outlined='' elevation="19" tile='')
          v-img.white--text.align-end(height='250px' :src='serverIp+`/news/getImage?id=`+NewsSrc.imgId')
            v-card-title
              v-text-field(label="Заголовок" dark='' v-model="NewsSrc.head").title
          v-card-subtitle.pb-0
            | {{NewsSrc.date}}
          v-card-text.text--primary
            v-divider
            v-textarea(auto-grow='' value='Текст' v-model="NewsSrc.text")
            //v-file-input(label='Вставить изображение' hide-input='' accept='image/*' prepend-icon='mdi-camera' small-chips='' v-model="newPost.img")
          v-divider
          v-card-actions
            //v-btn(text='' color='deep-purple accent-4' @click="dialog = false")
            v-btn(text='' color='deep-purple accent-4' @click="dialog = false")
              | Отмена
            v-spacer
            v-btn(text='' color='green darken-3' @click="uploadNews")
              | Сохранить
</template>

<script>
import Api from "@/service/apiService";

export default {
name: "ChangeNews",
  props: {
    NewsSrc: Object
  },
  data:()=> ({
    dialog: false,
    serverIp: Api.api,
  }),
  methods: {
    showDialog(){
      this.dialog = !this.dialog;
      //console.log(this.NewsSrc);
    },
    uploadNews(){
      let formdata = new FormData();
      formdata.append("id", this.NewsSrc.id);
      formdata.append("head", this.NewsSrc.head);
      formdata.append("text", this.NewsSrc.text);
      Api.ChangeNews(formdata).then(() => {
        //console.log(result.data);
        this.$emit('update');
      });
      this.dialog = !this.dialog;
    },
  }
}
</script>

<style scoped>

</style>