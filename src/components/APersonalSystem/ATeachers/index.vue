<template lang="pug">
  div
    v-row
      v-col
      v-col
        v-text-field(label='Поиск' prepend-icon='mdi-account-search' @input='search')
    v-card(:loading='loading').mb-5
      v-subheader.subtitle-1 Учителя
        v-btn(icon='' color="#8b2639" @click="showNewTeacherForm").float-right
          v-icon mdi-plus
      v-expansion-panels(accordion='' focusable='')
        v-expansion-panel(v-for='teacher in teachers' :key='teacher.id' cols='12' link='' v-if="!loading")
          v-expansion-panel-header() {{teacher.fio}}
          v-expansion-panel-content
            h2.subtitle-2.mt-2
              | Преподает предметы
            v-chip-group(column='')
              v-chip(outlined='' v-for="discipline in teacher.disciplines" :key="discipline.id" @click="showDisciplineForm" :color="discipline.colorCode")
                | {{discipline.name}}
            v-divider
            h2.subtitle-2.mt-3  Общая информация
            v-row
              v-col
                p.caption Номер телефона: {{teacher.phoneNumber}}

            v-btn(color='primary' fab='' x-small='' @click="selTeacher = teacher; selTeacher.disciplines = disciplines; showChangeTeacherForm()").float-right
              v-icon mdi-pencil
    ANewTeacher(ref="aNewTeacher" @update="getAllTeacher()")
    AChangeTeacher(ref="aChangeTeacher" :Teacher="selTeacher" @update="getAllTeacher()")
</template>

<script>
import Api from "@/service/apiService";
import ANewTeacher from "@/components/APersonalSystem/ATeachers/ANewTeacher/index";
import AChangeTeacher from "@/components/APersonalSystem/ATeachers/AChangeTeacher/index";

export default {
  name: "ATeachers",
  components: {AChangeTeacher, ANewTeacher},
  data: () => ({

    bottom: false,
    selTeacher: null,
    teachers: [],
    allTeachers: [],
    disciplines: [],
    loading: false,
    slicer: 20,

  }),
  methods: {
    showDisciplineForm() {
      alert("Че смотришь, мем только строится еще")
    },
    search(search){
      this.teachers = this.allTeachers.filter(
          teacher => teacher.fio.toLowerCase().match(`^${search.toLowerCase()}.`)
      );
      if(!search) {
        this.teachers = this.allTeachers.slice(0,this.slicer);
      }
    },
    showNewTeacherForm() {
      this.$refs.aNewTeacher.showDialog();
    },
    showChangeTeacherForm() {
      this.$refs.aChangeTeacher.showDialog();
    },
    getAllTeacher() {
      this.loading = true;
      Api.getAllTeachers().then(value => {
            this.allTeachers = value.data;
            this.teachers = this.allTeachers.slice(0, this.slicer);
            console.log(this.teachers)
            this.loading = false;
          },
          (error) => {
            console.log(error);
            this.loading = false;
          });
    },
    scrollFunction() {
      //this.bottom = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
      this.bottom = document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight + 200;
    },


  },
  mounted() {
    window.onscroll = () => {
      this.scrollFunction()
    };
    this.getAllTeacher();
  },
  watch: {
    bottom: {
      handler() {
        if (this.bottom) {
          this.slicer += 10;
          this.teachers = this.allTeachers.slice(0, this.slicer);
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
