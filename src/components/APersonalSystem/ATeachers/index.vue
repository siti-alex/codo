<template lang="pug">
  div
    v-row
      v-col
      v-col
        v-text-field(label='Поиск' prepend-icon='mdi-account-search')
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

            v-btn(color='primary' fab='' x-small='').float-right
              v-icon mdi-pencil
    ANewTeacher(ref="aNewTeacher" @update="getAllTeacher()")
</template>

<script>
import Api from "@/service/apiService";
import ANewTeacher from "@/components/APersonalSystem/ATeachers/ANewTeacher/index";

export default {
  name: "ATeachers",
  components: {ANewTeacher},
  data: () => ({

    selTeacher: null,
    teachers: [],
    disciplines: [],
    loading: false,

  }),
  methods: {
    showDisciplineForm(){
      alert("Че смотришь, мем только строится еще")
    },
    showNewTeacherForm() {
      this.$refs.aNewTeacher.showDialog();
    },
    getAllTeacher() {
      this.loading = true;
      Api.getAllTeachers().then(value => {
            this.teachers = value.data;
            console.log(this.teachers)
            this.loading = false;
          },
          (error) => {
            console.log(error);
            this.loading = false;
          });
    },


  },
  mounted() {
    this.getAllTeacher();
  }
}
</script>

<style scoped>

</style>
