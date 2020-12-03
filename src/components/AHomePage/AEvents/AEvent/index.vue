<template lang="pug">
  div
    v-card.mx-auto(height='100%' width='80%' elevation="6" min-height='700px')
      v-card-title.justify-center {{title}}
      v-divider
      v-btn(tile='', small='' dark='' color="#8b2639" to="/home/events")
        v-icon mdi-keyboard-backspace
        | Вернуться
      v-sheet(width='90%' height='100%' v-html="text").mx-auto.mt-5.mb-5

      v-divider
      br
      //div(v-html="text")


    br
</template>

<script>
import Api from "@/service/apiService";
export default {
  name: "AEvent",
  data: () => ({
    text: null,
    title: null,
  }),
  methods: {
    getText(){
      Api.getEventById(this.$route.params.id).then(result => {
        console.log(result);
        this.text= result.data.fullText;
        this.title= result.data.head;
      })
    },
  },
  mounted() {
    //console.log(this.$route.params.id);
    this.getText();
  }
}
</script>

<style scoped>

</style>
