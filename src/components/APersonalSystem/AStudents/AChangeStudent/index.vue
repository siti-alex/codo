<template lang="pug">
v-dialog(v-model="mutableDialog")

  v-card.mx-auto()
    v-toolbar(flat='' color='transparent')
      v-toolbar-title Выбор предметов
    v-container.py-0
      v-row(align='center' justify='start')
        v-col.shrink(v-for='(selection, i) in selections' :key='selection.text')
          v-chip(:disabled='loading' close='' @click:close='selected.splice(i, 1)')
            v-icon(left='' v-text='selection.icon')
            |             {{ selection.text }}
    v-divider(v-if='!allSelected')
    v-list
      template(v-for='item in categories')
        v-list-item(v-if='!selected.includes(item)' :key='item.text' :disabled='loading' @click='selected.push(item)')
          v-list-item-avatar
          v-list-item-title(v-text='item.text')
    v-divider
    v-card-actions
      v-spacer
      v-btn(:disabled='!selected.length' :loading='loading' color='purple' text='' @click='next')
        | Next
</template>

<script>
    export default {
        name: "AChangeStudent",
        props: {
            Student: {},
        },
        data: () => ({
            mutableDialog: false,
            items: [
                {
                    text: 'Русский язык',
                    icon: 'mdi-nature',
                },
                {
                    text: 'Математика',
                    icon: 'mdi-glass-wine',
                },
                {
                    text: 'Литература',
                    icon: 'mdi-calendar-range',
                },
                {
                    text: 'Экология',
                    icon: 'mdi-map-marker',
                },
                {
                    text: 'Геометрия',
                    icon: 'mdi-bike',
                },
            ],
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
                    const text = item.text.toLowerCase()

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
