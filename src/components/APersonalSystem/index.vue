<template lang="pug">
div
  h1 Ну привет
</template>

<script>
import Api from '@/service/apiService';
export default {
name: "APersonalSystem",
  data() {

  },
  methods: {
    getAllStudents() {
      Api.getAllStudents().then(value => {
            console.log(value);
          },
          () => {
            console.log('Ошибка');
          });
    },
  },
  mounted() {
  this.getAllStudents();
  }

}
</script>

<style scoped>

</style>