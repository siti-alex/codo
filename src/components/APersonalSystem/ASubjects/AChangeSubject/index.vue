<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="600px")
    v-card.noscroll
      v-card-title
        span.headline Новый предмет
      v-card-text
        v-container
          v-row
            v-col(cols='12')
              v-text-field(label='Название' v-model="Discipline.name")
            v-col(cols='12')
              v-text-field(label="Стоимость посещения" v-model="Discipline.cost")
            v-col(cols='12')
              v-text-field(label="Учитель")


      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='' @click="dialog = true").ml-3 Удалить
        v-spacer
        v-btn(color='blue darken-1', text='' @click="AddNewDiscipline()") Сохранить
        v-btn(color='blue darken-1', text='' @click="showDialog") Отмена

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
              v-btn(color="red darken-4" text='' @click='deleteDiscipline(Discipline.id); dialog = false')
                | Удалить
</template>

<script>
    import Api from "@/service/apiService";
    export default {
        name: "AChangeSubject",
        props: {
            Discipline: {},
        },
        data: () => ({
            mutableDialog: false,
            dialog: false,
        }),
        methods: {
            deleteDiscipline(id){
                Api.deleteDiscipline(id).then(() => {
                        this.$emit('update');
                        this.showDialog();
                    },
                    () => {
                        console.log('Ошибка');
                    });

            },
            showDialog(){
                this.mutableDialog = ! this.mutableDialog;
            }
        },

    }
</script>

<style scoped>

</style>
