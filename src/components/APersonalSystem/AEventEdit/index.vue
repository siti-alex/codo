<template lang="pug">
    div
        v-card.mx-auto(height='100%' width='95%' elevation="6")
            //v-btn(color='primary' fab='' x-small='').float-lg-right.mx-5.mt-5
              v-icon mdi-plus
            v-card-title.justify-center Редактирование мероприятий
                v-spacer
                v-btn(color='#a25161' small='' dark='' right='' tile='' @click="showEvent").ml-5 Добавить
                    v-icon mdi-comment-plus-outline
            v-divider
            v-row
                //v-col(v-for='n in 8' cols='4')
                v-col(v-for='event in events' :key="event.id" cols='4')
                    v-card.mx-5
                        v-img.white--text.align-end(height='200px' :src='serverIp+`/image/`+event.image.id')
                            v-card-title {{event.head}}
                        v-card-subtitle.pb-0
                            | {{event.date}}
                        v-card-text.text--primary
                            div {{event.previewText}}
                        v-divider
                        v-card-actions
                            //v-btn(text='' color='deep-purple accent-4' @click='showChangeNews(news.indexOf(newses))')
                            v-btn(text='' color='deep-purple accent-4' @click='showChangeEvent(); curEvent = event')
                                | Изменить
                            //v-btn(text='' color='red darken-4' @click="deleteNews(newses.indexOf(news))")
                            v-spacer
                            v-btn(text='' color='red darken-4' @click="dialog = true; eventId = event.id")
                                | Удалить
                        //change-news(ref="ChangeNews" :NewsSrc="newses" @update = "getAllNews")
        br
        v-row(justify='center')
            v-dialog(v-model='dialog' persistent='' max-width='40%')
                template(v-slot:activator='{ on, attrs }')
                v-card
                    v-card-title.headline
                        | Мероприятие будет удалено
                    v-card-text
                        | Вы уверены?
                    v-card-actions
                        v-spacer
                        v-btn(color='primary' text='' @click='dialog = false')
                            | Отмена
                        v-btn(color="red darken-4" text='' @click='deleteEvent(eventId); dialog = false')
                            | Удалить

        add-event(ref="AddEvent" @update = "getAllEvents")
        change-event(ref="ChangeEvent" :EventSrc="curEvent" @update = "getAllEvents")
</template>

<script>
    import Api from "@/service/apiService";
    import AddEvent from "./AddEvent/index";
    import ChangeEvent from "./ChangeEvent/index";

    export default {
        name: "AEventEdit",
        components: {ChangeEvent, AddEvent},
        data:() => ({
            dialog: false,
            eventId: 0,
            events: [],
            serverIp: Api.api,
            curEvent: {},
        }),
        methods: {
            showEvent(){
                this.$refs.AddEvent.showDialog();
            },
            showChangeEvent(){
                console.log(this.curEvent);
                this.$refs.ChangeEvent.showDialog();
            },
            getAllEvents(){
                Api.getEvents().then(value => {
                        this.events = value.data;
                        //this.imgSrc = `http://192.168.202.104:8080/news/getImage?id=${value.data.id}`
                    },
                    () => {
                        console.log('Ошибка');
                    });
            },
            deleteEvent(){
                Api.deleteEventById(this.eventId).then(() => {
                        this.getAllEvents();
                    },
                    () => {
                        console.log('Ошибка');
                    });

            }
        },
        mounted() {
            this.getAllEvents();
        }
    }
</script>

<style scoped>

</style>
