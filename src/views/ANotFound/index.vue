<template lang="pug">
  v-container(fluid='', fill-height='')
    v-layout(align-center='', justify-center='')
      v-flex(xs12='', sm8='', md6='')
          h1(align="center") Страница не найдена
            br
            v-btn(text='' block='' @click="home") вернуться на главную

</template>

<script>
export default {
name: "ANotFound",
  mounted() {
    setTimeout("location.href = '/home/news'", 5000);
  },
  methods: {
    home(){
      location.href = '/home/news';
    },
  },
}
</script>

<style scoped>

</style>