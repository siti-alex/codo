<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6" min-height='700px')
    v-card-title.justify-center Новости
    v-divider
    div(v-html="text")


  br
</template>

<script>
import Api from "@/service/apiService";
export default {
name: "ANews",
  data: () => ({
    text: null,
  }),
  methods: {
    getText(){
      Api.getFullTextNews(this.$route.params.id).then(result => {
        console.log(result);
        this.text= result.data;
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