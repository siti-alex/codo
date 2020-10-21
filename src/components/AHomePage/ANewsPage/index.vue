<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6")
    v-card-title.justify-center Новости
    v-divider
    v-row
      v-col(v-for='n in 8' cols='4')
        v-card.mx-5
          v-img.white--text.align-end(height='200px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
            v-card-title Карантин до 1 октября
          v-card-subtitle.pb-0
            | 24 сентября 2020 года
          v-card-text.text--primary
            div Администрация Центра организации довузовского образования временно (до 1 октября) находится на карантине. До нас можно дозвониться в рабочее время с 8.00 до 18.00 по телефону 89145552747 (главный специалист ЦОДО: Иванова Екатерина Владимировна). Занятия в группах 0, 1, 2, 3, 4, 6, 7, 8, 11, 15, 18 Школы иностранных языков временно прекращены (до 5 октября). Преподаватели находятся на самоизоляции в связи с контактом с больным.

  br
</template>

<script>
export default {
name: "ANewsPage"
}
</script>

<style scoped>

</style>