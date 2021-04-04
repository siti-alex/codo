<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="600px")
    v-card.noscroll
      v-card-title
        span.headline Новый учитель
      v-card-text
        v-container
          v-row
            v-col(cols='12')
              v-text-field(label='ФИО' v-model="newTeacher.fio")
            v-col(cols='12')
              v-text-field(label="Номер телефона" v-model="newTeacher.phoneNumber")
            v-col(cols='12')
              v-radio-group(v-model="newTeacher.sex" label="Пол")
                v-radio(value=true label="Мужской").mt-2
                v-radio(value=false label="Женский")
            v-col(cols='5')
              v-text-field(label="Логин" v-model="newTeacher.login")
            v-col(cols='7')
              v-text-field(label="Пароль" v-model="newTeacher.password" id='pass' @click="copy" append-outer-icon='mdi-brain' @click:append-outer="generatePassword")



      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='' @click="addTeacher()") Сохранить
        v-btn(color='blue darken-1', text='' @click="showDialog") Отмена
    .text-center.ma-2
      v-snackbar(v-model='snackbar' timeout='3000')
        | {{ snackbarText }}
        template(v-slot:action='{ attrs }')
          v-btn(color='pink' text='' v-bind='attrs' @click='snackbar = false')
            | Закрыть
</template>

<script>
import Api from "@/service/apiService";

export default {
name: "ANewTeacher",
  data: () => ({
    mutableDialog: false,
    newTeacher: {
      login: null,
      password: null,
      fio: null,
      phoneNumber: null,
      privilege: 2,
    },
    snackbar: false,
    snackbarText: `Пароль скопирован`,
  }),
  methods: {
    showDialog() {
      this.mutableDialog = !this.mutableDialog;
    },
    copy(){
      if(this.newTeacher.password) {
        let copyText = document.getElementById("pass");
        copyText.select();
        document.execCommand("copy");
        this.snackbar = true;
      }
    },
    generatePassword(){
      let text = '';
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 8; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      this.newStudent.password = text;
    },
    addTeacher(){
      Api.addTeacher(this.newTeacher).then(value => {
        console.log(value);
        this.$emit('update');
        this.showDialog();
      })
    },
  }
}
</script>

<style scoped>

</style>