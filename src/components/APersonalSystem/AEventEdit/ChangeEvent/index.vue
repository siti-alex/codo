<template lang="pug">
    div
        v-dialog(v-model='dialog' fullscreen='' hide-overlay='' transition='dialog-bottom-transition')
            v-card
                v-toolbar(dark='' color="#8b2639")
                    v-btn(icon='' dark='' @click='showDialog()')
                        v-icon mdi-close
                    v-toolbar-title Изменение мероприятия
                    v-spacer
                    v-toolbar-items
                        v-btn(dark='' text='' @click='uploadEvent')
                            | Сохранить
                v-divider
                v-row(no-gutters='').mx-5.mt-3
                    v-col(cols='4')
                        v-divider
                        v-card(outlined='' elevation="19" tile='').pa-3.mx-3.mt-3
                            v-img.white--text.align-end(height='200px' :src='serverIp+`/image/`+EventSrc.image.id' v-if="EventSrc.image")
                                v-card-title
                                    v-text-field(label="Заголовок" dark='' v-model="EventSrc.head").title
                            v-card-subtitle().pb-0
                                | {{EventSrc.date}}
                            v-menu(v-model='menu2' :close-on-content-click='false' :nudge-right='40' transition='scale-transition' offset-y='' min-width='290px')
                              template(v-slot:activator='{ on, attrs }')
                                v-text-field(v-model='EventSrc.date' label='Выберите дату' prepend-icon='mdi-calendar' readonly='' v-bind='attrs' v-on='on')
                              v-date-picker(v-model='EventSrc.date' @input='menu2 = false' locale='ru-ru')
                            v-card-text.pa-0.text--primary
                                v-divider
                                v-textarea(auto-grow='' value='Текст' v-model="EventSrc.previewText" autofocus='')
                            v-divider

                    br
                    v-col(cols='8')
                        a-c-m-s(v-model="EventSrc.fullText+''" height="650" v-if="dialog")
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
        name: "ChangeEvent",
        props: {
            EventSrc: Object
        },
        data:()=> ({
            dialog: false,
            serverIp: Api.api,
            //date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,

        }),
        methods: {
            showDialog(){
                this.dialog = !this.dialog;
                //console.log(this.NewsSrc);
            },
            uploadEvent(){
                let formdata = new FormData();
                formdata.append("head", this.EventSrc.head);
                formdata.append("previewText", this.EventSrc.previewText);
                formdata.append("fullText", this.EventSrc.fullText);
                formdata.append("id", this.EventSrc.id);
                formdata.append("date", this.EventSrc.date);
                Api.ChangeEvent(formdata,this.EventSrc.id).then(() => {
                    this.$emit('update');
                });
                this.dialog = !this.dialog;
            },
        }
    }
</script>

<style scoped>

</style>
