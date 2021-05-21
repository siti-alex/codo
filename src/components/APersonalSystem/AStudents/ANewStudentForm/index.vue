<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="600px")
    v-card.noscroll
      v-card-title
        span.headline Новый школьник
      v-card-text
        v-container
          v-row
            v-col(cols='12')
              v-text-field(label='ФИО' v-model="newStudent.fio")
            v-col(cols='12')
              v-text-field(label="ФИО родителя" v-model="newStudent.parentFio")
            v-col(cols='12')
              v-text-field(label="Номер телефона родителя" v-model="newStudent.phoneNumber")
            v-col(cols='5')
              v-radio-group(v-model="newStudent.sex" label="Пол")
                v-radio(value=true label="Мужской").mt-2
                v-radio(value=false label="Женский")
            v-col(cols='7')
              v-text-field(label="Курс" v-model="newStudent.course.id")
              v-text-field(label="Уплачено за месяц" v-model="newStudent.balance")
            v-col(cols='5')
              v-text-field(label="Логин" v-model="newStudent.login" @click:append-outer="test" )
            v-col(cols='7')
              v-text-field(label="Пароль" v-model="newStudent.password" id='pass' @click="copy" append-outer-icon='mdi-brain' @click:append-outer="generatePassword")



      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='' @click="addStudent()") Сохранить
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
name: "ANewStudentForm",
  data: () => ({
    mutableDialog: false,
    newStudent: {
      login: null,
      password: null,
      fio: null,
      balance: null,
      course: {id: null},
      debtor: false,
      parentFio: null,
      phoneNumber: null,
      privilege: 0,
      sex: false,
    },
    snackbar: false,
    snackbarText: `Пароль скопирован`,
  }),
  methods: {
    showDialog() {
      this.mutableDialog = !this.mutableDialog;
    },
    test(){
      console.log("Хеллов");
    },
    addStudent(){
        Api.addStudent(this.newStudent).then(value => {
            console.log(value);
            this.$emit('update');
            this.showDialog();
        })
    },
    copy(){
      if(this.newStudent.password) {
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
    }
  },
}
</script>

<style scoped>

</style>
