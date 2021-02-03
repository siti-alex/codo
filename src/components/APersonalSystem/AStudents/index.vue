<template lang="pug">
div
  v-card().mb-5
    v-subheader Направление
    v-expansion-panels(accordion='' focusable='')
      v-expansion-panel(v-for='student in students' :key='student.id' cols='12' link='')
        v-expansion-panel-header {{student.fio}}
          template(v-if="student.id%2==0" v-slot:actions='')
            v-icon(color='error')
              | mdi-alert-circle
        v-expansion-panel-content
          h2.subtitle-2.mt-2
            | Подписаные предметы
          v-chip-group(column='')
            v-chip(outlined='' v-for="tag in tags" :key="tag")
              | {{tag}}
          v-divider
          h2.subtitle-2.mt-3  Общая информация
          v-row
            v-col
              p.caption Уплочено за месяц: {{student.balance}} руб.
            v-col
              p.caption Родитель: {{student.parentFio}}
            v-col
              p.caption Номер телефона: {{student.phoneNumber}}

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
