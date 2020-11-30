<template lang="pug">
div
  v-carousel(cycle='' height='400' show-arrows-on-hover='')
    v-carousel-item(v-for='(item, i) in items' :key='i' :src="item.src")
  v-tabs(fixed-tabs='' background-color='#8b2639' dark='')
    v-tab(v-for='link in links' :to="link.route")
      | {{ link.title }}
  div.grey.lighten-3
    router-view
  v-footer(dark='' padless='' style="opacity: 0.9")
    v-card.white--text.text-center(flat='' tile='' width='100%' color="#8b2639")
      v-card-text.pa-1
        v-btn.mx-4.white--text(v-for='icon in icons' icon='' :href='icon.href')
          v-icon
            | {{ icon.icon }}
      v-divider
      v-card-text.white--text
        | {{ new Date().getFullYear() }} —
        strong  Ситиков Алексей,
        strong  Щеголь Андрей
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
    icons: [
      {
        icon: 'mdi-vk',
        href: null,
      },
      {
        icon: 'mdi-instagram',
        href: null,
      },
      {
        icon: 'mdi-school',
        href: 'https://bgpu.ru/func/educational/codo.html',
      },
    ],
  }),
}
</script>

<style scoped>

</style>
