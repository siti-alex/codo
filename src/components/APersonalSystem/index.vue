<template lang="pug">
  div#inspire
    v-navigation-drawer(app='' clipped='' mobile-breakpoint=0)
      v-sheet.pa-4(color='grey lighten-4')
        div(v-if="user == 'ROLE_ADMIN'").title Администратор
        div(v-else-if="user == 'ROLE_TEACHER'").title Преподаватель
        div(v-else-if="user == 'ROLE_USER'").title Ученик
      v-divider
      v-list
        v-list-item(v-for='[icon, text, route, privilege, teacher] in links' :key='icon' link='' :to="route" v-if="privilege!==user && teacher!==user")
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
      ['mdi-school', 'Школьники', '/personal/students', 'ROLE_USER'],
      ['mdi-book-open', 'Предметы', '/personal/subjects'],
      ['mdi-account-multiple-outline', 'Учителя', '/personal/teachers', 'ROLE_USER'],
      ['mdi-newspaper', 'Расписание'],
      ['mdi-notebook-outline', 'Журнал', '/personal/journal', 'ROLE_USER'],
      ['mdi-pencil-box-outline', 'Редактор новостей', '/personal/edit-news', 'ROLE_USER', 'ROLE_TEACHER'],
      ['mdi-calendar-edit', 'Редактор мероприятий', '/personal/edit-event', 'ROLE_USER', 'ROLE_TEACHER'],
    ],
      user: null,
  }),
  methods: {

  },
  mounted() {
      this.user = localStorage.getItem('role');
  }

}
</script>

<style scoped>

</style>
