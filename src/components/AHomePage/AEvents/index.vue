<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6").text
    v-card-title.justify-center Мероприятия
    v-divider
    v-card-title.justify-center.subtitle-2 Ближайшие события
    v-row
      v-col(v-for='item in cards.slice(0, 3)' cols='4')
        v-card(tile='' height='100%' hover='' @click="").mx-5
          v-img.white--text.align-end(height='150px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
            v-card-title {{item.head}}
          v-card-subtitle.pb-0
            v-chip(color='deep-purple' dark='' small='').mb-1
              | {{item.date}}
          v-card-text()
            | {{item.text}}
    v-divider
    //v-card(width='45%').ml-5
    v-card-title.justify-center.subtitle-2 Календарь мероприятий
    v-row
      v-col(cols='1')
      v-col(cols='4')
        //v-date-picker(v-model='dates' multiple='' no-title='' :allowed-dates="getAllowedDates" full-width='' locale="ru-ru" color="#8b2639" elevation='10' @input="selectEvent")
        v-date-picker(v-model='dates' multiple='' no-title='' :allowed-dates="getAllowedDates" full-width='' locale="ru-ru" color="#8b2639" elevation='10' @input="selectEvent")
      v-col(cols='6')
        v-card
          v-card(tile='' v-if="cardEvent" @click="")
            v-img.white--text.align-end(height='200px' src='https://www.amurobl.ru/upload/iblock/5e2/image_21_08_20_02_41_5.jpeg')
              v-card-title(style="background-color:#000000; opacity: 0.8; height: 50px").pa-2
                p.ml-3 {{cardEvent.head}}
            v-card-subtitle.pb-0
            v-chip(color='deep-purple' dark='').ml-3
              | {{cardEvent.date}}
            v-card-text.text--primary
              div {{cardEvent.text}}
      v-col(cols='1')
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
        text: '12-13 ноября состоится главное национальное деловое событие в мире качества - онлайн-форум «Всемирный день качества - 2020». Мероприятие форума будет бесплатным для участников и соберет аудиторию более 30 000 человек.',
        date: '2020-11-15',
      },
      {
        head: 'Масленица',
        text: 'Городской молодежный медиафорум «Медиаskills» пройдет 3 декабря 2020 года. Он предназначен для представителей молодежи в возрасте от 14 до 30 лет уже имеющих базовые навыки и знания в сфере медиа, а также минимальный опыт работы в рамках своей специализации. Заявки принимаются до 11 ноября 2020 года.',
        date: '2020-11-20',
      },
      {
        head: 'Поход в музей',
        text: 'До 12 ноября принимаются заявки на проведение всероссийского отбора лучших педагогических практик "Учительская онлайн-лаборатория Рыбаков фонда". В рамках конкурса участникам предстоит создать интерактивный онлайн-урок. Участие в конкурсе бесплатное',
        date: '2020-11-25',
      },
      {
        head: 'Тестовый хеад',
        text: 'Текстовый текст',
        date: '2020-11-26',
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
.text {

}

</style>