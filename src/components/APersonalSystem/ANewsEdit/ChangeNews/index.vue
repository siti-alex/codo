<template lang="pug">
  div
    v-dialog(v-model='dialog' fullscreen='' hide-overlay='' transition='dialog-bottom-transition')
      v-card
        v-toolbar(dark='' color="#8b2639")
          v-btn(icon='' dark='' @click='showDialog()')
            v-icon mdi-close
          v-toolbar-title Изменение новости
          v-spacer
          v-toolbar-items
            v-btn(dark='' text='' @click='uploadNews' :loading="loadBtn")
              | Сохранить
        v-divider
        v-row(no-gutters='').mx-5.mt-3
          v-col(cols='4')
            v-divider
            v-card(outlined='' elevation="19" tile='').pa-3.mx-3.mt-3
              v-img.white--text.align-end(height='200px' :src='serverIp+`/image/`+NewsSrc.image.id' v-if="NewsSrc.image")
                v-card-title
                  v-text-field(label="Заголовок" dark='' v-model="NewsSrc.head").title
              v-card-subtitle().pb-0
                | {{NewsSrc.date}}
              v-card-text.pa-0.text--primary
                v-divider
                v-textarea(auto-grow='' value='Текст' v-model="NewsSrc.previewText" autofocus='')
              v-divider

          br
          v-col(cols='8')
            a-c-m-s(v-model="NewsSrc.fullText" height="650" v-if="dialog")
</template>

<script>
import Api from '@/service/apiService';
import { McWysiwyg } from '@mycure/vue-wysiwyg';
import ACMS from "@/views/ACMS/index";

export default {
  components: {
    ACMS,
    McWysiwyg
  },
name: "ChangeNews",
  props: {
    NewsSrc: Object
  },
  data:()=> ({
    dialog: false,
    serverIp: Api.api,
      loadBtn: false,

  }),
  methods: {
    showDialog(){
      this.dialog = !this.dialog;
      //console.log(this.NewsSrc);
    },
    uploadNews(){
        this.loadBtn = true;
      let formdata = new FormData();
      formdata.append("head", this.NewsSrc.head);
      formdata.append("previewText", this.NewsSrc.previewText);
      formdata.append("fullText", this.NewsSrc.fullText);
      formdata.append("id", this.NewsSrc.id);
      Api.ChangeNews(formdata,this.NewsSrc.id).then(() => {
        this.$emit('update');
        this.loadBtn = false;
        this.dialog = !this.dialog;
      });

    },
  }
}
</script>

<style scoped>

</style>
