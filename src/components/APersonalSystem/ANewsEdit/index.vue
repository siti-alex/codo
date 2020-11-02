<template lang="pug">
  div
    v-card.mx-auto(height='100%' width='95%' elevation="6")
      //v-btn(color='primary' fab='' x-small='').float-lg-right.mx-5.mt-5
        v-icon mdi-plus
      v-card-title.justify-center Редактирование новостей
        v-spacer
        v-btn(color='#a25161' small='' dark='' right='' tile='' @click="showNews").ml-5 Добавить
          v-icon mdi-comment-plus-outline
      v-divider
      v-row
        //v-col(v-for='n in 8' cols='4')
        v-col(v-for='newses in news' :key="newses.id" cols='4')
          v-card.mx-5
            v-img.white--text.align-end(height='200px' :src='serverIp+`/news/getImage?id=`+newses.image.id')
              v-card-title {{newses.head}}
            v-card-subtitle.pb-0
              | {{newses.date}}
            v-card-text.text--primary
              div {{newses.text}}
            v-divider
            v-card-actions
              //v-btn(text='' color='deep-purple accent-4' @click='showChangeNews(news.indexOf(newses))')
              v-btn(text='' color='deep-purple accent-4' @click='showChangeNews(); curNews = newses')
                | Изменить
              //v-btn(text='' color='red darken-4' @click="deleteNews(newses.indexOf(news))")
              v-spacer
              v-btn(text='' color='red darken-4' @click="dialog = true; newsId = newses.id")
                | Удалить
            //change-news(ref="ChangeNews" :NewsSrc="newses" @update = "getAllNews")
    br
    v-row(justify='center')
      v-dialog(v-model='dialog' persistent='' max-width='40%')
        template(v-slot:activator='{ on, attrs }')
        v-card
          v-card-title.headline
            | Новость будет удалена
          v-card-text
            | Вы уверены?
          v-card-actions
            v-spacer
            v-btn(color='primary' text='' @click='dialog = false')
              | Отмена
            v-btn(color="red darken-4" text='' @click='deleteNews(newsId); dialog = false')
              | Удалить

    add-news(ref="AddNews" @update = "getAllNews")
    change-news(ref="ChangeNews" :NewsSrc="curNews" @update = "getAllNews")
</template>

<script>
import AddNews from "@/components/APersonalSystem/ANewsEdit/AddNews/index";
import Api from "@/service/apiService";
import ChangeNews from "@/components/APersonalSystem/ANewsEdit/ChangeNews/index";

export default {
name: "ANewsEdit",
  components: {ChangeNews, AddNews},
  data:() => ({
    dialog: false,
    newsId: 0,
    news: [],
    serverIp: Api.api,
    curNews: {},
  }),
  methods: {
    showNews(){
      this.$refs.AddNews.showDialog();
    },
    showChangeNews(){
      this.$refs.ChangeNews.showDialog();
    },
    getAllNews(){
      Api.getAllNews().then(value => {
            this.news = value.data;
            //this.imgSrc = `http://192.168.202.104:8080/news/getImage?id=${value.data.id}`
          },
          () => {
            console.log('Ошибка');
          });
    },
      deleteNews(){
          Api.deleteNewsById(this.newsId).then(() => {
                  this.getAllNews();
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
