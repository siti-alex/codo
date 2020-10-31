<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6")
    v-card-title.justify-center Мероприятия
    v-divider
    v-card-title.justify-center.subtitle-2 Ближайшие события
    v-row
      v-col(v-for='n in 3' cols='4')
        v-card(tile='').mx-5
          v-img.white--text.align-end(height='200px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
            v-card-title Открытие ОКЦ
          v-card-subtitle.pb-0
          v-chip(color='deep-purple' dark='').ml-3
            | 2019-09-10
          v-card-text.text--primary
            div На ОКЦ пройдет открытие чего-то
    v-divider
    //v-card(width='45%').ml-5
    v-row.ml-3.mr-3
      v-col(cols='6')
        v-date-picker(v-model='dates' multiple='' :allowed-dates="getAllowedDates" full-width='' locale="ru-ru" color="#8b2639" elevation='10' @input="selectEvent")
      v-col(cols='6')
        v-card(tile='' v-if="cardEvent")
          v-img.white--text.align-end(height='278px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
            v-card-title Открытие ОКЦ
          v-card-subtitle.pb-0
          v-chip(color='deep-purple' dark='').ml-3
            | {{date[0]}}
          v-card-text.text--primary
            div На ОКЦ пройдет открытие чего-то
    br
  br
</template>

<script>
export default {
name: "AEvents",
  data: () => ({
    //date: new Date().toISOString().substr(0, 10),
    date: null,
    dates: ['2020-10-15', '2020-10-20', '2020-10-25'],
    curDate: ['2020-10-15', '2020-10-20', '2020-10-25'],
    cardEvent: false,
  }),
  methods: {
    //allowedDates: val => this.dates.indexOf(val) !== -1,
    getAllowedDates (val) {
      return this.dates.indexOf(val) !== -1;
    },
    selectEvent(){
      //console.log(this.dates);
      //console.log(this.curDate.filter(x => !this.dates.includes(x)));
      this.date = this.curDate.filter(x => !this.dates.includes(x));
      //console.log(this.date);
      this.dates = ['2020-10-15', '2020-10-20', '2020-10-25'];
      this.cardEvent = true;
    }
  }
}
</script>

<style scoped>

</style>