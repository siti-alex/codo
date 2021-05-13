<template lang="pug">
  div
    v-row(justify='center').mt-6
      br
      //v-btn(@click="test") test
      v-date-picker.mt-4(v-model='date' @input="selectedDay" locale="ru-ru" :allowed-dates='getAllowedDates' full-width='' landscape='' color='#8b2639').ma-5
      v-divider
      v-container(v-if="selectDay")
        v-row()
          v-col(cols='4')
            v-card(width='600' flat='')
                v-card-title
                  p.ml-3
                    | {{selectDay.teacher.fio}}
                v-card-text
                  .font-weight-bold.ml-8.mb-2
                    | Предметы
                  v-timeline(align-top='' dense='')
                    //v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                    v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                      div
                        div.font-weight-normal
                          strong {{ selectDay.discipline.name }}
                          br
                          |  {{ selectDay.homework }}
                        div {{ selectDay.date }}

          v-col(cols='4')
            v-card(width='600' flat='')
              v-card-title
                p.ml-3
                  | {{selectDay.teacher.fio}}
              v-card-text
                .font-weight-bold.ml-8.mb-2
                  | Предметы
                v-timeline(align-top='' dense='')
                  //v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                  v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                    div
                      div.font-weight-normal
                        strong {{ selectDay.discipline.name }}
                        br
                        |  {{ selectDay.homework }}
                      div {{ selectDay.date }}

          v-col(cols='4')
            v-card(width='600' flat='')
              v-card-title
                p.ml-3
                  | {{selectDay.teacher.fio}}
              v-card-text
                .font-weight-bold.ml-8.mb-2
                  | Предметы
                v-timeline(align-top='' dense='')
                  //v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                  v-timeline-item(v-for='discipline in selectDay.discipline' :key='discipline.id' :color='discipline.colorCode' small='')
                    div
                      div.font-weight-normal
                        strong {{ selectDay.discipline.name }}
                        br
                        |  {{ selectDay.homework }}
                      div {{ selectDay.date }}

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
            selectDay: null,

            messages: [
                {
                    from: 'You',
                    message: `Sure, I'll see you later.`,
                    time: '10:42am',
                    color: 'deep-purple lighten-1',
                },
                {
                    from: 'John Doe',
                    message: 'Yeah, sure. Does 1:00pm work?',
                    time: '10:37am',
                    color: 'green',
                },
                {
                    from: 'You',
                    message: 'Did you still want to grab lunch today?',
                    time: '9:47am',
                    color: 'deep-purple lighten-1',
                },
            ],
        }),
        methods: {
            test(){
              console.log(this.date);
            },
            selectedDay(){
              this.lessons.forEach((element) => {
                  if (this.date === element.date) {
                      this.selectDay = element;
                      console.log(this.selectDay);
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
