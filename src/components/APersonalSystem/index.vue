<template lang="pug">
  div#inspire
    v-navigation-drawer(v-model='drawer' app='' clipped='' mobile-breakpoint=0)
      v-sheet.pa-4(color='grey lighten-4')
        div.title Преподаватель
      v-divider
      v-list
        v-list-item(v-for='[icon, text] in links' :key='icon' link='')
          v-list-item-icon
            v-icon {{ icon }}
          v-list-item-content
            v-list-item-title {{ text }}
    v-main
      v-container.py-8.px-6(fluid='')
      v-card(v-for='n in 6').mb-5
        v-subheader Направление
        v-expansion-panels(accordion='')
          v-expansion-panel(v-for='student in students' :key='student.id' cols='12' link='')
            v-expansion-panel-header {{student.fio}}
              template(v-if="student.id%2==0" v-slot:actions='')
                v-icon(color='error')
                  | mdi-alert-circle
            v-expansion-panel-content
              h2.subtitle-2
                | Предметы
              v-chip-group(column='')
                v-chip(outlined='' v-for="tag in tags" :key="tag")
                  | {{tag}}
              v-btn(color='primary' fab='' x-small='').float-lg-right
                v-icon mdi-pencil


</template>

<script>
import Api from '@/service/apiService';
export default {
name: "APersonalSystem",
  data: () => ({
    cards: ['Физико-матетиматический', 'Естественно-географический'],
    drawer: null,
    links: [
      ['mdi-school', 'Школьники'],
      ['mdi-book-open', 'Предметы'],
      ['mdi-newspaper', 'Расписание'],
      ['mdi-send', 'Журнал'],
    ],
    students: [],

    tags: [
      'Русский язык',
      'Экономика',
      'Музыка',
      'География',
      'Информатика',
      'Экология',
  ],
  }),
  methods: {
    getAllStudents() {
      Api.getAllStudents().then(value => {
            this.students = value.data;
            console.log(this.students)
          },
          () => {
            console.log('Ошибка');
          });
    },
  },
  mounted() {
  this.getAllStudents();
  }

}
</script>

<style scoped>

</style>