<template lang="pug">
  v-dialog(v-model="mutableDialog" :max-width="600+widthImg")
    v-card.noscroll
      v-card-title
        span.headline Вставить картинку
      v-card-text
        v-container
          v-row
            v-col(cols='12')
              v-file-input(label="Картинка" accept="image/*" v-model="files" @change="imgPreview")
            v-col(cols='12' v-if="files")
              v-radio-group(row='' v-model="formatImgText")
                v-divider(vertical='')
                v-icon(left='') mdi-format-float-left
                v-radio(value='left')
                v-divider(vertical='')
                v-icon(left='') mdi-format-float-right
                v-radio(value='right')
                v-divider(vertical='')
                v-icon(left='') mdi-format-float-none
                v-radio(value='none')
              v-btn(color='blue darken-1', text='', @click="imgPreview") Изменить размер
            v-col(cols='12' v-if="resize && files")
              v-container(fluid='')
                v-slider(v-model='widthImg', min='10', max='1000', step='1'  thumb-label="always")
                v-navigation-drawer(:width='widthImg', :value='true', stateless='')
            v-col(cols='12' v-if="resize")
              v-img(:src="previewImg" :width='widthImg' v-if="files")





      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='', @click="showDialog") Закрыть
        v-spacer
        v-btn(color='blue darken-1', text='', @click="uploadImage") Вставить картинку

</template>

<script>
import Api from '@/service/apiService';
export default {
  name: "InsertImage",
  data: () => ({
    files: null,
    previewImg: '',
    mutableDialog: false,

    //srcImg: '',
    widthImg: 160,
    resize: false,

    formatImgText: 'none',

  }),
  props: {
    asection: null,
  },

  methods: {
    imgPreview(){
      if(this.files) {
        const file = this.files;
        this.previewImg = URL.createObjectURL(file);
        this.resize = true;
      }
    },
    uploadImage(){
      let formdata = new FormData();
      formdata.append("file", this.files);
      Api.UploadImage(formdata).then(result => {
        console.log(result.data);
        this.$emit('insertImage', `<img style="float: ${this.formatImgText}; margin: 0 13px 5px 0; " src=${Api.api}/news/getImage?id=${result.data} width=${this.widthImg} alt=${this.text}></img>`);
        this.showDialog();
      })
    },

    showDialog() {
      this.mutableDialog = !this.mutableDialog;
      this.files = null;
      this.previewImg = '';
      this.widthImg = 160;
      this.resize = false;
    },

  }
}
</script>

<style scoped>

</style>
