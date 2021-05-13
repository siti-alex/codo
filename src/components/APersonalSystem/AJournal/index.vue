<template lang="pug">
  div
    v-btn(@click="test") test
    v-row(justify='center').mt-6
      br
      v-date-picker.mt-4(v-model='date' @input="selectedDay" locale="ru-ru" :allowed-dates='getAllowedDates' full-width='' landscape='' color='#8b2639').ma-5
      v-divider
      v-container(v-if="selectDay.length !==  0" )
        v-row()
          v-col(cols='4')
            v-card(width='600' flat='' v-for="lesson in selectDay" :key="lesson.id")
              v-card-title
                p.ml-3
                  | {{lesson.teacher.fio}}
              v-card-text
                .font-weight-bold.ml-8.mb-2
                  | Предметы
                v-timeline(align-top='' dense='')
                  //v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                  v-timeline-item(v-for='discipline in lesson.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                    div
                      div.font-weight-normal
                        strong {{ discipline.name }}
                        br
                        |  {{ lesson.homework }}
                      div {{ lesson.date }}

</template>

<script>
    import Api from "@/service/apiService";
    export default {
        name: "AJournal",
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
            selectedDay(){
              this.lessons.forEach((element) => {
                  if (this.date === element.date) {
                      //this.selectDay = element;
                      this.selectDay.push(element);
                  }
              })
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
