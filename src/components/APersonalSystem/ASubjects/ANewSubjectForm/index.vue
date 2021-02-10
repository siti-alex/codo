<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="600px")
    v-card.noscroll
      v-card-title
        span.headline Новый предмет
      v-card-text
        v-container
          v-row
            v-col(cols='12')
              v-text-field(label='Название' v-model="newDiscipline.name")
            v-col(cols='12')
              v-text-field(label="Стоимость посещения" v-model="newDiscipline.cost")
            v-col(cols='12')
              v-text-field(label="Номер кабинета")
            v-col(cols='12')
              v-text-field(label="Учитель")



      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='' @click="AddNewDiscipline()") Сохранить
        v-btn(color='blue darken-1', text='' @click="showDialog") Отмена
</template>

<script>
    import Api from '@/service/apiService';
    export default {
        name: "ANewSubjectForm",
        data: () => ({
            mutableDialog: false,
            // teacher:
            //     {
            //         fio: "Андрей, пока я не получаю учителей, невозможно нормально создать предмет",
            //         login: "А это поле вообще ненадо мне получать в предметах",
            //         privilege: 0,
            //         sex: true,
            //     },
            newDiscipline: {
                teacher: 1,
                colorCode: null,
                cost: null,
                name: null,
            },
        }),
        methods: {
            showDialog() {
                this.mutableDialog = !this.mutableDialog;
            },
            AddNewDiscipline(){
                let formdata = new FormData();
                formdata.append("name", this.newDiscipline.name);
                formdata.append("cost", this.newDiscipline.cost);
                formdata.append("colorCode",this.newDiscipline.colorCode);
                //formdata.append("teacher", JSON.stringify(this.newDiscipline.teacher));
                formdata.append("teacherIDs", this.newDiscipline.teacher);
                // this.updRenter.room.renter = {id: this.renterSrc.id};
                Api.AddNewDiscipline(formdata).then((result) => {
                  console.log(result);
                });

            },

        },
    }
</script>

<style scoped>

</style>
