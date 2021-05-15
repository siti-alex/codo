<template lang="pug">
  div
    v-btn(color='#8b2639' dark='' small='' @click="showNewLessonForm").float-right.mr-3
      v-icon(left='' small='') mdi-plus
      | Новый урок
    v-row(justify='center').mt-6
      br
      v-date-picker.mt-4(v-model='date' @input="selectedDay" locale="ru-ru" :allowed-dates='getAllowedDates' full-width='' landscape='' color='#8b2639').ma-5
      v-divider
      v-container(v-if="selectDay.length !==  0" )
            //v-card(width='600' flat='' v-for="lesson in selectDay" :key="lesson.id")
            v-card(width='600' flat='')
              v-card-text
                .font-weight-bold.ml-8.mb-2
                  | Предметы
                v-timeline(align-top='' dense='')
                  //v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                  v-timeline-item(v-for='lesson in selectDay' :key='lesson.id' :color='lesson.discipline.colorCode' small='')
                    div
                      div.font-weight-normal
                        strong {{ lesson.discipline.name }}
                        br
                        div.font-weight-bold {{ lesson.teacher.fio }}
                      div ДЗ: {{ lesson.homework }}
    a-new-lesson(ref="aNewLessonForm" )
</template>

<script>
    import Api from "@/service/apiService";
    import ANewLesson from "@/components/APersonalSystem/AJournal/ANewLesson/index";
    export default {
        name: "AJournal",
      components: {ANewLesson},
      data:() => ({
            dialog: false,
            lessons: [],
            lessonDates: [],
            date: new Date().toISOString().substr(0, 10),
            selectDay: [],


        }),
        methods: {
            test(){
              console.log(this.selectDay);
            },
            showNewLessonForm() {
              this.$refs.aNewLessonForm.showDialog();
            },
            selectedDay() {
                this.selectDay = [];
                if (this.selectDay.length === 0) {
                this.lessons.forEach((element) => {
                    if (this.date === element.date) {
                        //this.selectDay = element;
                        this.selectDay.push(element);
                        console.log(element);
                    }
                })
            }
            },
            getAllLessons(){
                Api.getAllLessons().then(value => {
                        console.log(value.data);
                        this.lessons = value.data;
                        this.lessons.forEach((element => {
                            this.lessonDates.push(element.date);
                        }))
                    },
                    () => {
                        console.log('Ошибка');
                    });
            },
            //allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
            //allowedDates: val => console.log(val),
            //allowedDates: val => this.lessonDates.indexOf(val) !== -1,
            getAllowedDates (val) {
                //console.log(JSON.stringify(val));
                //console.log(val);
                if (this.lessonDates.indexOf(val) !== -1) {
                    return true
                } else {
                    return false
                }
            },

        },

        mounted() {
          this.getAllLessons();
        }
    }
</script>

<style scoped>

</style>
