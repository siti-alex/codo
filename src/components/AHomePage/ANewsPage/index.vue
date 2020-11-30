<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6" min-height='700px')
    v-card-title.justify-center Новости
    v-divider
    v-row
      v-col(v-for='newses in news' :key='newses.id' cols='4')
        v-card(tile='' height='100%' hover='' @click="" :to="{name: 'NewsId', params: { id: newses.id}}").mx-5.custom
          v-img.white--text.align-end(height='200px' :src='serverIp+`/image/`+newses.image.id')
            v-card-title {{newses.head}}
          v-card-subtitle.pb-0
            | {{newses.date}}
          v-card-text().subtitle-2
            | {{newses.previewText}}

          //router-link(:to="{name: 'NewsId', params: { id: newses.id}}")

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
                //console.log(value);
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
.custom {
    border-bottom:5px solid #673AB7;
}
.custom:hover {
    //background: #ff0f1d;
    border-bottom:5px solid #9b2b40;
}
</style>
