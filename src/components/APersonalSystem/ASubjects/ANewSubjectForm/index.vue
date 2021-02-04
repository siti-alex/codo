<template lang="pug">
  v-dialog(v-model="mutableDialog" max-width="600px")
    v-card.noscroll
      v-card-title
        span.headline Новый предмет
      v-card-text
        v-container
          v-row
            v-col(cols='12')
              v-text-field(label='ФИО')
            v-col(cols='12')
              v-text-field(label="Стоимость посещения")
            v-col(cols='12')
              v-text-field(label="Номер кабинета")
            v-col(cols='12')
              v-text-field(label="Учитель")
            v-row(justify='space-around')
              v-color-picker.ma-2(hide-inputs='' hide-sliders='' swatches-max-height="200")



      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', text='' @click="showDialog") Сохранить
        v-btn(color='blue darken-1', text='' @click="showDialog") Отмена
</template>

<script>
    export default {
        name: "ANewSubjectForm",
        data: () => ({
            mutableDialog: false,
        }),
        methods: {
            showDialog() {
                this.mutableDialog = !this.mutableDialog;
            },
        },
    }
</script>

<style scoped>

</style>
