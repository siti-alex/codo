<template lang="pug">
div
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
import Api from "@/service/apiService";

export default {
name: "AStudents",
  data: () => ({
    cards: ['Физико-матетиматический', 'Естественно-географический'],

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