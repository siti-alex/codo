<template lang="pug">
    div
        v-dialog(v-model='dialog' fullscreen='' hide-overlay='' transition='dialog-bottom-transition')
            v-card
                v-toolbar(dark='' color="#8b2639")
                    v-btn(icon='' dark='' @click='dialog = false')
                        v-icon mdi-close
                    v-toolbar-title Создание мероприятия
                    v-spacer
                    v-toolbar-items
                        v-btn(dark='' text='' @click='uploadEvent') Сохранить
                v-divider
                v-row(no-gutters='').mx-5.mt-3
                    v-col(cols='4')

                        v-divider


                        v-card(outlined='' elevation="19" tile='').pa-3.mx-3.mt-3
                            v-img.white--text.align-end(height='200px' :src='defaultImg' v-if="!newPost.img")
                                v-card-title
                                    v-text-field(label="Заголовок" dark='' v-model="newPost.title").title
                            v-img.white--text.align-end(height='200px' :src='previewImg' v-if="newPost.img")
                                v-card-title
                                    v-text-field(label="Заголовок" dark='' v-model="newPost.title").title
                            v-menu(v-model='menu2' :close-on-content-click='false' :nudge-right='40' transition='scale-transition' offset-y='' min-width='290px')
                                template(v-slot:activator='{ on, attrs }')
                                    v-text-field(v-model='date' label='Выберите дату' prepend-icon='mdi-calendar' readonly='' v-bind='attrs' v-on='on')
                                v-date-picker(v-model='date' @input='menu2 = false' locale='ru-ru')
                            v-card-text.pa-0.text--primary
                                v-divider
                                v-textarea(auto-grow='' value='Текст' v-model="newPost.text" autofocus='')
                            v-divider
                            v-file-input(label='Вставить изображение' accept="image/*" @change="imgPreview" hide-input='' prepend-icon='mdi-camera' v-model="newPost.img").pa-0.justify-center

                    br
                    v-col(cols='8')
                        a-c-m-s(v-model="newPost.html" height="650" v-if="dialog")

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
        name: "AddEvent",
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
                html: '',
            },
            //html: '',
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
                this.newPost.html = '';
            },
            test(){
                console.log(this.newPost.html);
            },

            uploadEvent(){
                let formdata = new FormData();
                formdata.append("head", this.newPost.title);
                formdata.append("previewText", this.newPost.text);
                formdata.append("fullText", this.newPost.html);
                formdata.append("file", this.newPost.img);
                formdata.append("date", this.date);
                Api.uploadEvent(formdata).then((result) => {
                    console.log(result);
                    //this.dialog = !this.dialog;
                    //this.newPost.img = `http://213.87.96.9:6006/news/getImage?id=${result.data}`
                    this.showDialog();
                });
            },
        }
    }
</script>

<style scoped>

</style>
