<template lang="pug">
  div
    v-card.mx-auto(height='100%' width='80%' elevation="6")
      v-card-title.justify-center Новости
      v-divider
      v-row
        //v-col(v-for='n in 8' cols='4')
        v-col(v-for='news in newses' :key="news.id" cols='4')
          v-card.mx-5
            v-img.white--text.align-end(height='200px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
              v-card-title {{news.title}}
            v-card-subtitle.pb-0
              | {{news.date}}
            v-card-text.text--primary
              div {{news.text}}
            v-divider
            v-card-actions
              v-btn(text='' color='deep-purple accent-4')
                | Изменить
              v-btn(text='' color='red darken-4' @click="deleteNews(newses.indexOf(news))")
                | Удалить

    br

</template>

<script>
export default {
name: "ANewsEdit",
  data:() => ({
    newses: [
      {
        id: '1',
        title: 'Занятия',
        date: '2 октября 2020 года',
        text: 'Занятия начнутся с 5-го октября без ограничений.'
      },
      {
        id: '2',
        title: 'Карантин отменен',
        date: '1 октября 2020 года',
        text: 'Рады сообщить, что всё прекрасно, можно продолжать учиться.'
      },
      {
        id: '3',
        title: 'Карантин до 1 октября',
        date: '24 сентября 2020 года',
        text: 'Администрация Центра организации довузовского образования временно (до 1 октября) находится на карантине. До нас можно дозвониться в рабочее время с 8.00 до 18.00 по телефону 89145552747 (главный специалист ЦОДО: Иванова Екатерина Владимировна).'
      },
    ]
  }),
  methods: {
    deleteNews(id){
      this.newses.splice(id,1);
    },
  },
}
</script>

<style scoped>

</style>