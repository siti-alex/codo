<template lang="pug">
div
    v-dialog(v-model='dialog' fullscreen='' hide-overlay='' transition='dialog-bottom-transition')
      v-card
        v-toolbar(dark='' color="#8b2639")
          v-btn(icon='' dark='' @click='dialog = false')
            v-icon mdi-close
          v-toolbar-title Создание новости
          v-spacer
          v-toolbar-items
            v-btn(dark='' text='' @click='dialog = false')
              | Сохранить

        v-list()
          v-list-item
              v-list-item-subtitle С помощью данной формы можно создать и мероприятие, просто установив соответсвующий пункт ниже
          v-list-item
            v-list-item-content
              p Опубликовать как
              v-radio-group(v-model='radioGroup' mandatory='true').ml-3
                v-radio(label='Новость' value=true)
                v-radio(label='Мепроприятие' value=false)
        v-divider

        v-row(no-gutters='')
          v-col(cols='4')
              v-card(outlined='' elevation="19" tile='').pa-3.mx-3.mt-3
                v-img.white--text.align-end(height='200px' :src='defaultImg' v-if="!newPost.img")
                  v-card-title
                    v-text-field(label="Заголовок" dark='' v-model="newPost.title").title
                v-img.white--text.align-end(height='200px' :src='previewImg' v-if="newPost.img")
                  v-card-title
                    v-text-field(label="Заголовок" dark='' v-model="newPost.title").title
                v-card-subtitle(v-if='!radioGroup').pb-0
                  | Дата
                v-menu(v-model='menu2' :close-on-content-click='false' :nudge-right='40' transition='scale-transition' offset-y='' min-width='290px' v-if='radioGroup')
                  template(v-slot:activator='{ on, attrs }')
                    v-text-field(v-model='date' label='Выберите дату' prepend-icon='mdi-calendar' readonly='' v-bind='attrs' v-on='on')
                  v-date-picker(v-model='date' @input='menu2 = false' locale='ru-ru')
                v-card-text.pa-0.text--primary
                  v-divider
                  v-textarea(auto-grow='' value='Текст' v-model="newPost.text" autofocus='')
                v-divider
                v-file-input(label='Вставить изображение' accept="image/*" @change="imgPreview" hide-input='' prepend-icon='mdi-camera' v-model="newPost.img").pa-0.justify-center
          v-divider(vertical='')
          v-col(cols='6')
            //v-menu(v-model='menu2' :close-on-content-click='false' :nudge-right='40' transition='scale-transition' offset-y='' min-width='290px')
              template(v-slot:activator='{ on, attrs }')
                v-text-field(v-model='date' label='Picker without buttons' prepend-icon='mdi-calendar' readonly='' v-bind='attrs' v-on='on')
              v-date-picker(v-model='date' @input='menu2 = false')
</template>

<script>
import Api from '@/service/apiService';
export default {
name: "AddNews",
  data:()=> ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    radioGroup: true,

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
      this.newPost.img = null;
      this.newPost.text = 'Текст';
      this.newPost.title = '';
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
        this.showDialog();
      });

    },
  }
}
</script>

<style scoped>

</style>
