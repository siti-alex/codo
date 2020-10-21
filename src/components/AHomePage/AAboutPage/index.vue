<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6")
    v-card-title.justify-center Контактная информация
    v-divider

    v-card.mx-auto(max-width='100%')
      div(style='position:relative;overflow:hidden;')
        a(href='https://yandex.ru/maps/77/blagoveshchensk/?utm_medium=mapframe&utm_source=maps' style='color:#eee;font-size:12px;position:absolute;top:0px;') Благовещенск
        a(href='https://yandex.ru/maps/77/blagoveshchensk/house/ulitsa_lenina_104/ZUsBaAJkSU0BWEJvY2JzdHprZAg=/?ll=127.541093%2C50.256657&utm_medium=mapframe&utm_source=maps&z=18.4' style='color:#eee;font-size:12px;position:absolute;top:14px;') Улица Ленина, 104 — Яндекс.Карты
        iframe(src='https://yandex.ru/map-widget/v1/-/CCQ~eThH2B' width='100%' height='300px' frameborder='1' allowfullscreen='true' style='position:relative;')

      v-list(two-line='')
        v-list-item
          v-list-item-icon
            v-icon(color='indigo')
              | mdi-map-marker
          v-list-item-content
            v-list-item-title Амурская область, г. Благовещенск, ул. Ленина, д. 104, БГПУ
            v-list-item-subtitle аудитория 219 центрального корпуса.

        v-divider(inset='')
        v-list-item
          v-list-item-icon
            v-icon(color='indigo')
              | mdi-newspaper
          v-list-item-content
            v-list-item-title Режим работы
            v-list-item-subtitle Понедельник-пятница с 8.00 до 18.00 без перерыва на обед
            v-list-item-subtitle Суббота: с 9.00 до 12.00 дежурный сотрудник по предварительной записи.

        v-divider(inset='')
        v-list-item
          v-list-item-icon
            v-icon(color='indigo')
              | mdi-phone
          v-list-item-content
            v-list-item-title 89145552747 (в рабочее время)
            v-list-item-subtitle Мобильный телефон (есть WhatsApp)

        v-list-item
          v-list-item-action
          v-list-item-content
            v-list-item-title (4162) 771-784 (в рабочее время)
            v-list-item-subtitle Рабочий телефон

        v-divider(inset='')
        v-list-item
          v-list-item-icon
            v-icon(color='indigo')
              | mdi-email
          v-list-item-content
            v-list-item-title codobgpu@yandex.ru
            v-list-item-subtitle Адрес электронной почты




  br

</template>

<script>
export default {
name: "AAboutPage"
}
</script>

<style scoped>

</style>