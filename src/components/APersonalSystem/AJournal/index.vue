<template lang="pug">
  div
    v-row(justify='center').mt-6
      br
      h1() Журнал уроков
      v-btn(@click="test")
      v-date-picker.mt-4(v-model='date' locale="ru-ru" elevation='10' :allowed-dates='getAllowedDates' full-width='' color='#8b2639').ma-5

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

        }),
        methods: {
            test(){
              console.log(this.lessonDates);
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
                console.log(val);
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
