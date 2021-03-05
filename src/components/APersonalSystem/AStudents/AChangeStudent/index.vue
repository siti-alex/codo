<template lang="pug">
v-dialog(v-model="mutableDialog" persistent='' max-width='800' @keydown.esc="showDialog")

  v-card()
    v-card-title
      span.headline Редактировать информацию
    v-card-text
      v-container
        v-row
          v-col(cols='12')
            v-text-field(label='ФИО' v-model="Student.fio")
          v-col(cols='12')
            v-text-field(label="ФИО родителя" v-model="Student.parentFio")
          v-col(cols='12')
            v-text-field(label="Номер телефона родителя" v-model="Student.phoneNumber")
          v-col(cols='12')
            v-text-field(label="Уплачено за месяц" v-model="Student.balance")
      div(v-if="!showDiscipnines")
        v-toolbar(flat='' color='transparent' )
          v-toolbar-title Подписанные предметы
        v-container.py-0.ml-0
          v-row(align='center' justify='start')
            v-col.shrink(v-for='(selection, i) in Student.disciplines' :key='selection.name')
              v-chip(:disabled='loading' :color="selection.colorCode" outlined='')
                v-icon(left='' v-text='selection.icon')
                |             {{ selection.name }}
    //v-btn(text="" @click = "showDiscipnines = !showDiscipnines; getAllSubjects()") Редактировать предметы
    v-btn(text="" @click = "getAllSubjects()" v-if="!showDiscipnines").ml-5 Редактировать предметы
    v-btn(text="" @click = "getAllSubjects()" v-if="showDiscipnines" color='brown lighten-1').ml-5 Редактировать предметы
    div(v-if="showDiscipnines").ml-5
      v-divider
      v-toolbar(flat='' color='transparent' )
        v-toolbar-title Подписанные предметы
        v-spacer
        code(style="color: #33691E" v-if="calculate <= Student.balance").mt-5 На сумму {{calculate}} рублей
        code(v-else='').mt-5 На сумму {{calculate}} рублей
      v-container.py-0.ml-0
        v-row(justify='start')
          v-col.shrink(v-for='(selection, i) in selections' :key='selection.name')
            v-chip(:disabled='loading' close='' @click:close='selected.splice(i, 1)' outlined='' :color="selection.colorCode")
              |{{ selection.name }}
      //v-divider(v-if='!allSelected')
      v-divider()
      v-list
        template(v-for='item in subjects')
          v-list-item(:key='item.name' :disabled='Student.disciplines.some(elem => elem.name === item.name)' @click='selected.push(item)')
            v-list-item-avatar
            v-list-item-title(v-text='item.name')
    v-divider
    v-card-actions
      v-btn(color='red' text='' @click='dialog = true').ml-3 Удалить
      v-spacer
      v-btn(color='purple' text='' @click='showDialog') Отмена
      v-btn(color='purple' text='' @click='updateStudent') Сохранить

    v-row(justify='center')
      v-dialog(v-model='dialog' persistent='' max-width='40%')
        template(v-slot:activator='{ on, attrs }')
        v-card
          v-card-title.headline
            | Предмет будет удален
          v-card-text
            | Вы уверены?
          v-card-actions
            v-spacer
            v-btn(color='primary' text='' @click='dialog = false')
              | Отмена
            v-btn(color="red darken-4" text='' @click='deleteStudent(); dialog = false')
              | Удалить
</template>

<script>
    import Api from "@/service/apiService";
    export default {
        name: "AChangeStudent",
        props: {
            Student: {},
        },
        data: () => ({
            showDiscipnines: false,
            mutableDialog: false,
            subjects: [],
            items: [],
            loading: false,
            search: '',
            selected: [],
            dialog: false,

            // updStudent: {
            //     login: null,
            //     password: 'test',
            //     fio: null,
            //     sex: null,
            //     balance: null,
            //     course: null,
            //     parenFio: null,
            //     phoneNumber: null,
            //     disciplines: null,
            //     debtor: null
            // },
        }),

        computed: {
            calculate(){
                let value = null;
                this.selected.forEach(element => value += element.cost)
                return value;
            },

            selections () {
                const selections = []

                for (const selection of this.selected) {
                    selections.push(selection)
                }

                return selections
            },
        },

        watch: {
            selected () {
                this.search = ''
            },
        },

        methods: {
            test(){
              console.log();
            },
            deleteStudent(){
                Api.deleteStudent(this.Student.id).then(() => {
                        this.$emit('update');
                        this.showDialog();
                    },
                    () => {
                        console.log('Ошибка');
                    });

            },
            showDisciplines(){
                this.showDiscipnines = !this.showDiscipnines;
                //this.getAllSubjects();
                this.items = this.subjects;
                this.selected = this.Student.disciplines;
            },
            getAllSubjects(){
                Api.getAllSubjects().then(value => {
                        this.subjects = value.data;
                        console.log(value.data);
                        this.showDisciplines();
                    },
                    (error) => {
                        console.log(error);
                    });
            },
            updateStudent(){
                let updStudent = {};
                updStudent.login = this.Student.login;
                updStudent.password = '123';
                updStudent.fio = this.Student.fio;
                updStudent.sex = this.Student.sex;
                updStudent.balance = this.Student.balance;
                updStudent.course = this.Student.course;
                updStudent.parenFio = this.Student.parentFio;
                updStudent.phoneNumber = this.Student.phoneNumber;
                updStudent.disciplines = this.selected;
                updStudent.debtor = false;
                console.log(updStudent);
              Api.updateStudent(updStudent,this.Student.id).then(value => {
                  console.log(value);
                  this.$emit('update');
                  })
            },

            showDialog() {
                this.mutableDialog = !this.mutableDialog;
            },
        },
    }
</script>

<style scoped>

</style>
