<template lang="pug">
  div
    v-carousel(cycle='' height='400' show-arrows-on-hover='')
      v-carousel-item(v-for='(item, i) in items' :key='i' :src="item.src")
    v-tabs(fixed-tabs='' background-color='indigo' dark='')
      v-tab(v-for='link in links' :key='link' :to="link.route")
        | {{ link.title }}
    div.grey.lighten-3

      v-container
        //h3(align='center') Новости
        v-card.mx-auto(height='100%' width='100%' elevation="6")
          v-card-title.justify-center Документы
          v-divider
          v-content
            v-content
              h1 Документы
</template>

<script>
export default {
name: "ADocs",
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