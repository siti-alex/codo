<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="800px")
    v-card.noscroll
      v-card-title
        span.headline Новый урок
      v-card-text
        v-container
          v-row
            v-col(cols='5')
              v-date-picker(v-model='date' no-title='' locale='ru-ru')
            v-col(cols='3')
              v-text-field(label='Кабинет' v-model="newLesson.classroom")
              //v-text-field(label="Учитель")
              //v-select(:options="teachers.map(g => ({label: g.fio, value: g.id}))")
              v-select(v-model="newLesson.teacher.id" item-value="id" item-text="fio" label='Учитель' :items="teachers")
            v-col(cols='4')
              v-text-field(label="Номер пары" v-model="newLesson.lessonNumber")
              v-select(v-model="newLesson.discipline.id" item-value="id" item-text="name" label='Предмет' :items="subjects")


      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='' @click="AddNewLesson()") Сохранить
        v-btn(color='blue darken-1', text='' @click="showDialog()") Отмена
</template>

<script>
//import Api from '@/service/apiService';
import Api from "@/service/apiService";

export default {
name: "ANewLesson",
  data: () => ({
    mutableDialog: false,
    date: new Date().toISOString().substr(0, 10),
    teachers: [],
    subjects: [],
    newLesson: {
      date: null,
      classroom: null,
      lessonNumber: null,
      discipline: {
          id: null
      },
      teacher: {
          id: null
      },
      homework: null,
    }
  }),
  methods: {
    test() {
      this.newLesson.date = this.date;
      console.log(this.newLesson);
    },
    AddNewLesson(){
      this.newLesson.date = this.date;
      Api.addLesson(this.newLesson).then(() => {
        this.$emit('update');
        this.$emit('updateDate');
        this.showDialog();
      });
      console.log(this.newLesson);

    },
    showDialog() {
      this.mutableDialog = !this.mutableDialog;
      this.newLesson.classroom = null,
      this.newLesson.date = null,
      this.newLesson.discipline.id = null,
      this.newLesson.teacher.id = null,
      this.newLesson.homework = null,
      this.newLesson.lessonNumber = null
    },
    getAllTeacher() {
      Api.getAllTeachers().then(value => {
            this.teachers = value.data;
            console.log(this.teachers)
          },
          (error) => {
            console.log(error);
          });
    },
    getAllSubjects(){
      Api.getAllSubjects().then(value => {
            this.subjects = value.data;
          },
          (error) => {
            console.log(error);
          });
    },
  },
  created() {
    this.getAllTeacher();
    this.getAllSubjects();
  }
}
</script>

<style scoped>

</style>
