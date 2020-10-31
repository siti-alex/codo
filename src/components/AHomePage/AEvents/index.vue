<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6")
    v-card-title.justify-center Мероприятия
    v-divider
    v-card-title.justify-center.subtitle-2 Ближайшие события
    v-row
      v-col(v-for='item in cards.slice(0, 3)' cols='4')
        v-card(tile='').mx-5
          v-img.white--text.align-end(height='150px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
            v-card-title {{item.head}}
          v-card-subtitle.pb-0
          v-chip(color='deep-purple' dark='').ml-3
            | {{item.date}}
          v-card-text.text--primary
            div {{item.text}}
    v-divider
    //v-card(width='45%').ml-5
    v-row.ml-3.mr-3
      v-col(cols='6')
        //v-date-picker(v-model='dates' multiple='' no-title='' :allowed-dates="getAllowedDates" full-width='' locale="ru-ru" color="#8b2639" elevation='10' @input="selectEvent")
        v-date-picker(v-model='dates' multiple='' no-title='' :allowed-dates="getAllowedDates" full-width='' locale="ru-ru" color="#8b2639" elevation='10' @input="selectEvent")
      v-col(cols='6')
        v-card(tile='' v-if="cardEvent")
          v-img.white--text.align-end(height='278px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
            v-card-title {{cardEvent.head}}
          v-card-subtitle.pb-0
          v-chip(color='deep-purple' dark='').ml-3
            | {{cardEvent.date}}
          v-card-text.text--primary
            div {{cardEvent.text}}
    br
  br
</template>

<script>
export default {
name: "AEvents",
  data: () => ({
    date: null,
    dates: [],
    curDate: [],
    cardEvent: null,


    cards: [
      {
        head: 'Открытие ОКЦ',
        text: 'Открытие ОКЦ пройдет в Усть-Ивановке',
        date: '2020-10-15',
      },
      {
        head: 'Масленица',
        text: 'Празднование масленицы пройдет на ОКЦ',
        date: '2020-10-20',
      },
      {
        head: 'Поход в музей',
        text: 'В 15:00 все идем в музей',
        date: '2020-10-25',
      },
      {
        head: 'Тестовый хеад',
        text: 'Текстовый текст',
        date: '2020-10-26',
      }
    ]
  }),
  methods: {
    getAllowedDates (val) {
      return this.dates.indexOf(val) !== -1;
    },
    selectEvent(){
      this.date = this.curDate.filter(x => !this.dates.includes(x));
      this.cards.forEach(element => {
        if(element.date === this.date[0]) {
          this.cardEvent = element;
        }
      })
      this.dates = this.curDate;
    },
    sampleDates() {
      this.cards.forEach(element => {
        this.dates.push(element.date)
        this.curDate.push(element.date)
      });
    },
  },
  created() {
    this.sampleDates();
  }
}
</script>

<style scoped>

</style>