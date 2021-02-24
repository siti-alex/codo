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
    v-btn(text="" @click = "showDisciplines()") Редактировать предметы
    div(v-if="showDiscipnines")
      v-toolbar(flat='' color='transparent' )
        v-toolbar-title Выбор предметов
      v-container.py-0
        v-row(align='center' justify='start')
          v-col.shrink(v-for='(selection, i) in selections' :key='selection.name')
            v-chip(:disabled='loading' close='' @click:close='selected.splice(i, 1)')
              v-icon(left='' v-text='selection.icon')
              |             {{ selection.name }}
      //v-divider(v-if='!allSelected')
      v-divider()
      v-list
        template(v-for='item in categories')
          v-list-item(v-if='!selected.includes(item)' :key='item.name' :disabled='loading' @click='selected.push(item)')
            v-list-item-avatar
            v-list-item-title(v-text='item.name')
    v-divider
    v-card-actions
      v-spacer
      v-btn(:disabled='!selected.length' :loading='loading' color='purple' text='' @click='next')
        | Next
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
              console.log(this.Student);
            },
            showDisciplines(){
                this.showDiscipnines = !this.showDiscipnines;
                this.getAllSubjects();
                this.items = this.subjects;
                this.selected = this.Student.disciplines;
            },
            getAllSubjects(){
                Api.getAllSubjects().then(value => {
                        this.subjects = value.data;
                        console.log(value.data);
                    },
                    (error) => {
                        console.log(error);
                    });
            },
            next () {
                this.loading = true

                setTimeout(() => {
                    this.search = ''
                    this.selected = []
                    this.loading = false
                }, 2000)
            },
            showDialog() {
                this.mutableDialog = !this.mutableDialog;
            },
        },
    }
</script>

<style scoped>

</style>
