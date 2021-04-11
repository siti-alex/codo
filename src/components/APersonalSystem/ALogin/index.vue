<template lang="pug">
  v-container(fluid='', fill-height='')
    v-layout(align-center='', justify-center='')
      v-flex(xs12='', sm8='', md6='')
        v-card.elevation-12
          v-toolbar(dark='', color='#8b2639')
            v-toolbar-title Вход
          v-card-text
            v-form
              div(align="center")
                v-chip.ma-2.subtitle-1(color='error', outlined='' v-if="wrong")
                  v-icon(left='') mdi-cancel
                  |       Неверный логин или пароль
              v-text-field(name='login', label='Логин', prepend-icon="mdi-account", type='text', required='', v-model='login')
              v-text-field#password(name='password', label='Пароль', prepend-icon="mdi-lock", type='password', required='', v-model='password' v-on:keyup.enter="auth")
          v-card-actions
            v-spacer
            //v-btn(color='#8b2639' dark @click='auth' width="30%" to="/personal") Войти
            v-btn(color='#8b2639' dark @click='auth' width="30%") Войти
</template>

<script>
import Api from "@/service/apiService";
export default {
name: "ALogin",
  data() {
    return {
      login: '',
      password: '',
      wrong: false
    }
  },
  methods: {
    auth() {
      let user = {
        username: this.login,
        password: this.password,
      };
      console.log(user);
      Api.auth(user).then(value => {
            console.log(value);
            //this.imgSrc = `http://192.168.202.104:8080/news/getImage?id=${value.data.id}`
            this.$router.push('/personal/students');

          },
          () => {
            console.log('Ошибка');
          });
      //console.log(auth);
    }
  }
}
</script>

<style scoped>

</style>
