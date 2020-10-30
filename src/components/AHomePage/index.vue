<template lang="pug">
div
  v-carousel(cycle='' height='400' show-arrows-on-hover='')
    v-carousel-item(v-for='(item, i) in items' :key='i' :src="item.src")
  v-tabs(fixed-tabs='' background-color='#8b2639' dark='')
    v-tab(v-for='link in links' :to="link.route")
      | {{ link.title }}
  div.grey.lighten-3
    router-view
</template>

<script>
export default {
name: "AHomePage",
  data: () => ({
    links: [
      {
        title: 'Новости',
        route: '/home/news'
      },
      {
        title: 'Мероприятия',
        route: '/home/events'
      },
      {
        title: 'Направления',
        route: '/home/directions'
      },
      {
        title: 'Документы',
        route: '/home/docs'
      },
      {
        title: 'О нас',
        route: '/home/about'
      },
      {
        title: 'Личный кабинет',
        route: '/login'
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