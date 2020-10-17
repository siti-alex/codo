<template lang="pug">
  div
    //v-app-bar(app='' color='white' flat='')
      v-tabs.ml-n9(centered='' color='grey darken-1')
        v-tab(v-for='link in links' :key='link')
          | {{ link }}

    //v-parallax(src='https://cdn.vuetifyjs.com/images/parallax/material.jpg')
    //v-parallax(src='@/assets/slide3.jpg' height="500")
    v-carousel(cycle='' height='400' show-arrows-on-hover='')
      v-carousel-item(v-for='(item, i) in items' :key='i' :src="item.src")
    v-tabs(fixed-tabs='' background-color='indigo' dark='')
      v-tab(v-for='link in links' :key='link' :to="link.route")
        | {{ link.title }}
    div.grey.lighten-3


        //h3(align='center') Новости
        v-card.mx-auto(height='100%' width='80%' elevation="6")
          v-card-title.justify-center Новости
          v-divider
          v-content
            v-row
              v-col(v-for='n in 8' :key='n' cols='4')
                v-card.mx-5
                  v-img.white--text.align-end(height='200px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
                    v-card-title Карантин до 1 октября
                  v-card-subtitle.pb-0
                    | 24 сентября 2020 года
                  v-card-text.text--primary
                    div Администрация Центра организации довузовского образования временно (до 1 октября) находится на карантине. До нас можно дозвониться в рабочее время с 8.00 до 18.00 по телефону 89145552747 (главный специалист ЦОДО: Иванова Екатерина Владимировна). Занятия в группах 0, 1, 2, 3, 4, 6, 7, 8, 11, 15, 18 Школы иностранных языков временно прекращены (до 5 октября). Преподаватели находятся на самоизоляции в связи с контактом с больным.



</template>

<script>
export default {
  name: "AHome",
  data: () => ({
    links: [
      {
        title: 'Новости',
        route: '/news'
      },
      {
        title: 'Направления',
        route: '/directions'
      },
      {
        title: 'Документы',
        route: '/docs'
      },
      {
        title: 'О нас',
        route: '/about'
      },
    ],
    items: [
      {
        //src: 'https://i1.photo.2gis.com/images/branch/52/7318349406952696_1d15.jpg',
        src: '/slides/slide1.jpg',
      },
      {
        //src: 'https://bgpu.ru/newsfiles/5986_i1597193373016.jpg',
        src: '/slides/slide4.jpg',
      },
      {
        //src: 'https://bgpu.ru/newsfiles/5986_i1597193364793.jpg',
        src: '/slides/slide3.jpg',
      },
    ],
  }),
}
</script>

<style scoped>

</style>