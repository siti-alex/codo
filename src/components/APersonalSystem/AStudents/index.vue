<template lang="pug">
div
  v-row
    v-col
    v-col
      v-text-field(label='Поиск' prepend-icon='mdi-account-search')
  v-card(:loading='loading').mb-5
    v-subheader.subtitle-1 Школьники
      v-btn(icon='' color="#8b2639" @click="showNewStudentForm").float-right
        v-icon mdi-plus
    v-expansion-panels(accordion='' focusable='')
      v-expansion-panel(v-for='student in students' :key='student.id' cols='12' link='' v-if="!loading")
        v-expansion-panel-header(@click="getDisciplinesByUser(student.id)") {{student.fio}}
          template(v-if="student.id%2==0" v-slot:actions='')
            v-icon(color='error')
              | mdi-alert-circle
        v-expansion-panel-content
          h2.subtitle-2.mt-2
            | Подписаные предметы
          v-chip-group(column='')
            v-chip(outlined='' v-for="discipline in disciplines" :key="discipline.id" @click="showDisciplineForm" :color="discipline.colorCode")
              | {{discipline.name}}
          v-divider
          h2.subtitle-2.mt-3  Общая информация
          v-row
            v-col
              p.caption Уплачено за месяц: {{student.balance}} руб.
            v-col
              p.caption Родитель: {{student.parentFio}}
            v-col
              p.caption Номер телефона: {{student.phoneNumber}}

          v-btn(color='primary' fab='' x-small='' @click="selStudent = student; showChangeStudentForm()").float-right
            v-icon mdi-pencil
  a-new-student-form(ref="aNewStudentForm")
  a-change-student(ref="aChangeStudentForm" :Student="selStudent")
</template>

<script>
import Api from "@/service/apiService";
import ANewStudentForm from "@/components/APersonalSystem/AStudents/ANewStudentForm/index";
import AChangeStudent from "./AChangeStudent/index";

export default {
name: "AStudents",
  components: {AChangeStudent, ANewStudentForm},
  data: () => ({

    selStudent: null,
    students: [],
    disciplines: [],
    loading: false,

  }),
  methods: {
    showDisciplineForm(){
        alert("Че смотришь, мем только строится еще")
    },
    getAllStudents() {
      this.loading = true;
      Api.getAllStudents().then(value => {
            this.students = value.data;
            console.log(this.students)
            this.loading = false;
          },
          (error) => {
            console.log(error);
            this.loading = false;
          });
    },
      getDisciplinesByUser(id) {
          Api.getDisciplinesByUser(id).then(value => {
                  this.disciplines = value.data;
                  console.log(this.disciplines)
                  //console.log(value)
              },
              () => {
                  console.log('Ошибка');
              });
      },
    showNewStudentForm() {
      this.$refs.aNewStudentForm.showDialog();
    },
    showChangeStudentForm() {
        console.log(this.selStudent);
          this.$refs.aChangeStudentForm.showDialog();
      },
  },
  mounted() {
    this.getAllStudents();
  }
}
</script>

<style scoped>

</style>
