<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6")
    v-card-title.justify-center Новости
    v-divider
    v-row
      v-col(v-for='newses in news' :key='newses.id' cols='4')
        v-card(tile='').mx-5
          //v-img.white--text.align-end(height='200px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
          //v-img.white--text.align-end(height='200px' :src='`http://192.168.202.104:8080/news/getImage?id=`+newses.id')
          v-img.white--text.align-end(height='200px' :src='serverIp+`/news/getImage?id=`+newses.imgId')
            //v-card-title Карантин до 1 октября
            v-card-title {{newses.head}}
          v-card-subtitle.pb-0
              | {{newses.date}}
          v-card-text.text--primary
            //div Администрация Центра организации довузовского образования временно (до 1 октября) находится на карантине. До нас можно дозвониться в рабочее время с 8.00 до 18.00 по телефону 89145552747 (главный специалист ЦОДО: Иванова Екатерина Владимировна). Занятия в группах 0, 1, 2, 3, 4, 6, 7, 8, 11, 15, 18 Школы иностранных языков временно прекращены (до 5 октября). Преподаватели находятся на самоизоляции в связи с контактом с больным.
            div {{newses.text}}

  br
</template>

<script>
    import Api from "@/service/apiService";
export default {
name: "ANewsPage",
    data:()=>({
        news: [],
        serverIp: Api.api,
    }),
    methods: {
        getAllNews(){
            Api.getAllNews().then(value => {
                    this.news = value.data;
                    //this.imgSrc = `http://192.168.202.104:8080/news/getImage?id=${value.data.id}`
                console.log(value);
                },
                () => {
                    console.log('Ошибка');
                });
        }
    },
    mounted() {
        this.getAllNews();
    }
}
</script>

<style scoped>

</style>
