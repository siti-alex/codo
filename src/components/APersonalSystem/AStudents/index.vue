<template lang="pug">
  div
    v-row

      v-col
        v-btn-toggle(dense='' shaped='' v-model="filterButtons").pa-5
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn(small='' v-bind='attrs' v-on='on' @click="debtor()")
                v-icon(small="") mdi-account-cash
            span(style="font-size: 8pt;") Отобразить только должников
          //v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn(small='' v-bind='attrs' v-on='on')
                v-icon(small="") mdi-account-cash-outline
            span(style="font-size: 8pt;") Отобразить только тех, у кого нет долга
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn(small='' v-bind='attrs' v-on='on' @click="sortByAlph()")
                v-icon(small="") mdi-sort-alphabetical-ascending
            span(style="font-size: 8pt;") Сортировать по алфавиту

      v-col
        v-text-field(label='Поиск' prepend-icon='mdi-account-search' @input='search')

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
                v-progress-circular(indeterminate='' color='primary' v-if="loadingDisciplines")
                v-chip(outlined='' v-for="discipline in disciplines" :key="discipline.id" @click="showDisciplineForm" :color="discipline.colorCode" v-if="!loadingDisciplines")
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
    loadingDisciplines: false,

    slicer: 20,
    panel: true,

    filterButtons: null,
    onlyDebtor: false,
    byAlpha: false,

    loadingStudent: false,
  }),

  /*
  Помнить, что через v-model в exp-panels можно контролить opens и их очищать соответственно
   */
  methods: {
    showDisciplineForm(){
      alert("Че смотришь, мем только строится еще")
    },
    sortByAlph(){
      this.byAlpha = !this.byAlpha;
      let sortingStudents = this.allStudents;
      this.students = [];
      if(this.byAlpha){
        sortingStudents.sort((a, b) => a.fio.localeCompare(b.fio))
        this.students = sortingStudents.slice(0,this.slicer);
        console.log("Я выполнился");
      }
      else {
        this.students = this.allStudents.slice(0,this.slicer);
      }

    },
    debtor(){
      this.onlyDebtor = !this.onlyDebtor;
      this.students = [];
      if(this.onlyDebtor){
        this.allStudents.forEach(element => {
          if (element.debtor == true) {
            this.students.push(element);
          }
        })
      }
      else {
        this.students = this.allStudents.slice(0,this.slicer);
      }
    },
    search(search){
      this.students = this.allStudents.filter(
          student => student.fio.toLowerCase().match(`^${search.toLowerCase()}.`)
      );
      if(!search) {
        this.students = this.allStudents.slice(0,this.slicer);
      }
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
      this.loadingDisciplines = true;
      Api.getDisciplinesByUser(id).then(value => {
            this.disciplines = value.data;
            console.log(this.disciplines)
            this.loadingDisciplines = false;
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
            this.loadingDisciplines = false;
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
        if(this.bottom && this.onlyDebtor == false){
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

