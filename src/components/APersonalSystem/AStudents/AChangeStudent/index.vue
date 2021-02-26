<template lang="pug">
v-dialog(v-model="mutableDialog")

  v-card.mx-auto()
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
        v-container.py-0
          v-row(align='center' justify='start')
            v-col.shrink(v-for='(selection, i) in Student.disciplines' :key='selection.name')
              v-chip(:disabled='loading')
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
      v-container.py-0
        v-row(align='center' justify='start')
          v-col.shrink(v-for='(selection, i) in selections' :key='selection.name')
            v-chip(:disabled='loading' close='' @click:close='selected.splice(i, 1)')
              v-icon(left='' v-text='selection.icon')
              |             {{ selection.name }}
      //v-divider(v-if='!allSelected')
      v-divider()
      v-list
        template(v-for='item in subjects')
          v-list-item(:key='item.name' :disabled='Student.disciplines.some(elem => elem.name === item.name)' @click='selected.push(item)')
            v-list-item-avatar
            v-list-item-title(v-text='item.name')
    v-divider
    v-card-actions
      v-spacer
      v-btn(:disabled='!selected.length' :loading='loading' color='purple' text='' @click='test')
        | Test
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
        }),

        computed: {
            calculate(){
                let value = null;
                this.selected.forEach(element => value += element.cost)
                return value;
            },
            allSelected () {
                return this.selected.length === this.items.length
            },
            categories () {
                const search = this.search.toLowerCase()

                if (!search) return this.items

                return this.items.filter(item => {
                    const text = item.name.toLowerCase()

                    return text.indexOf(search) > -1
                })
            },
            est(){
              const test = [];
              this.Student.disciplines.forEach(discipline => test.push(discipline.name))
              //test.some(elem => elem == this.subjects.name)
              console.log(test.some(elem => { elem === this.subjects.name }))
              return test.some(elem => { elem === this.subjects.name })


            },
            noAllDicsiplines (){
              const disciplines = []
              this.subjects.forEach(element => {
                  this.Student.disciplines.forEach(discipline => {
                      if(element.name !== discipline.name) {
                          disciplines.push(element);
                      }
                  })
                  //if(element.name !== this.Student.disciplines.name) {
                      //disciplines.push(element);
                      //console.log(element.name);
                      //console.log(this.Student.disciplines.name);

              })
                return disciplines;
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
              console.log("Анти хайп");
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

            showDialog() {
                this.mutableDialog = !this.mutableDialog;
            },
        },
    }
</script>

<style scoped>

</style>
