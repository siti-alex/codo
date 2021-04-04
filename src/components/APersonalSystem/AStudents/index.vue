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
      v-expansion-panels(accordion='' focusable='' v-model="panel")
        v-expansion-panel(v-for='student in students' :key='student.id' cols='12' link='' v-if="!loading")
          //v-expansion-panel-header(@click="getDisciplinesByUser(student.id)") {{student.fio}}
          v-expansion-panel-header(@click="selStudent = student") {{student.fio}}
            template(v-if="student.debtor" v-slot:actions='')
              v-icon(color='error')
                | mdi-alert-circle
          v-expansion-panel-content
            div(v-if="loadingStudent")
              v-subheader
                | Загрузка данных
              v-progress-linear(indeterminate='' rounded='')
            div(v-if="!loadingStudent")
              h2.subtitle-2.mt-2
                | Подписаные предметы
              v-chip-group(column='' style="height: 50px;")
                v-progress-circular(indeterminate='' color='primary' v-if="!disciplines")
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

              v-btn(color='primary' fab='' x-small='' @click="selStudent = student; selStudent.disciplines = disciplines; showChangeStudentForm()").float-right
                v-icon mdi-pencil
    a-new-student-form(ref="aNewStudentForm" @update="getAllStudents()")
    a-change-student(ref="aChangeStudentForm" :Student="selStudent" @update="getAllStudents()")
</template>

<script>
import Api from "@/service/apiService";
import ANewStudentForm from "@/components/APersonalSystem/AStudents/ANewStudentForm/index";
import AChangeStudent from "./AChangeStudent/index";

export default {
  name: "AStudents",
  components: {AChangeStudent, ANewStudentForm},
  data: () => ({
    bottom: false,
    selStudent: null,
    students: [],
    allStudents: [],
    disciplines: null,
    loading: false,

    slicer: 20,
    panel: true,

    loadingStudent: false,
  }),

  /*
  Помнить, что через v-model в exp-panels можно контролить opens и их очищать соответственно
   */
  methods: {
    showDisciplineForm(){
      alert("Че смотришь, мем только строится еще")
    },
    getAllStudents() {
      this.loading = true;
      Api.getAllStudents().then(value => {
            this.allStudents = value.data;
            this.students = this.allStudents.slice(0,this.slicer);
            console.log(this.students)
            console.log(this.allStudents)
            this.loading = false;
          },
          (error) => {
            console.log(error);
            this.loading = false;
          });
    },
    getDisciplinesByUser(id) {
      //this.loadingStudent = true;
      this.disciplines = null;
      Api.getDisciplinesByUser(id).then(value => {
            this.disciplines = value.data;
            console.log(this.disciplines)
            // if(this.students.length > 80){
            //     setTimeout(() => (this.loadingStudent = false), 1000)
            // }
            // else {
            //     this.loadingStudent = false
            // }
            //console.log(value)
          },
          () => {
            console.log('Ошибка');
            //this.loadingStudent = false;
          });
    },
    showNewStudentForm() {
      this.$refs.aNewStudentForm.showDialog();
    },
    showChangeStudentForm() {
      console.log(this.selStudent);
      this.$refs.aChangeStudentForm.showDialog();
    },
    scrollFunction(){
      //this.bottom = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
      this.bottom = document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight + 200;

    },
  },
  mounted() {
    window.onscroll = () => {this.scrollFunction()};
    this.getAllStudents();
  },
  watch: {
    bottom: {
      handler () {
        if(this.bottom){
          this.slicer += 10;
          this.students = this.allStudents.slice(0,this.slicer);
        }

      }
    },
    panel: {
      handler (){
        if(this.panel !== undefined){
          this.getDisciplinesByUser(this.panel+1)
          this.getDisciplinesByUser(this.selStudent.id)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

