<template lang="pug">
  div#inspire
    v-navigation-drawer(app='' clipped='' mobile-breakpoint=0)
      v-sheet.pa-4(color='grey lighten-4')
        div.title Преподаватель
      v-divider
      v-list
        v-list-item(v-for='[icon, text, route] in links' :key='icon' link='' :to="route")
          v-list-item-icon
            v-icon {{ icon }}
          v-list-item-content
            v-list-item-title {{ text }}
    v-main
      //v-container.py-8.px-6(fluid='')
      router-view

</template>

<script>
//import Api from '@/service/apiService';
export default {
name: "APersonalSystem",
  data: () => ({
    links: [
      ['mdi-school', 'Школьники', '/personal/students'],
      ['mdi-book-open', 'Предметы', '/personal/subjects'],
      ['mdi-account-multiple-outline', 'Учителя', '/personal/teachers'],
      ['mdi-newspaper', 'Расписание'],
      ['mdi-notebook-outline', 'Журнал'],
      ['mdi-pencil-box-outline', 'Редактор новостей', '/personal/edit-news'],
      ['mdi-calendar-edit', 'Редактор мероприятий', '/personal/edit-event'],
    ],
  }),
  methods: {

  },
  mounted() {

  }

}
</script>

<style scoped>

</style>
