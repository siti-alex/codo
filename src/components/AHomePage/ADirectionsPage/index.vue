<template lang="pug">
div
  v-card.mx-auto(height='100%' width='100%' elevation="6")
    v-card-title.justify-center Направления
    v-divider
    v-card
      v-tabs(vertical='' grow='')
        v-tab.subtitle-2
          |         Школа иностранных языков
        v-divider
        v-tab.subtitle-2
          |         Школа программирования
          br
          |         и основ робототехники
        v-divider
        v-tab.subtitle-2
          |         Предметные курсы
          br
          |         (подготовка к ЕГЭ и ОГЭ)
        v-divider
        v-tab.subtitle-2
          |         Научные предметные кружки для учащихся
          br
          |         по проекту «Олимпийский старт»
        v-divider
        v-tab.subtitle-2
          |         Комплексные программы для старшеклассников
          br
          |         «БГПУ для Школы»
        v-divider
        v-tab.subtitle-2
          |         Репетиционные экзамены (ЕГЭ, ОГЭ)
        v-tab-item
          v-card(flat='')
            v-card-text
              h3 ШКОЛА ИНОСТРАННЫХ ЯЗЫКОВ
              h5 (1-11 классы)
              p
                |Школа иностранных языков (ШИЯ) приглашает детей 1-11 классов в группы для изучения английского, китайского, французского, немецкого языка.
              h4 Английский язык
              p.mb-0
                |Многоуровневая программа обучения по английскому языку учитывает базовую подготовку школьников и цель обучения:
              li системное изучение иностранного языка с 1 по 11 класс;
              li подготовка к экзаменам (ОГЭ, ЕГЭ, международный).
              h4 Программа обучения проводится в течение 8,5 месяцев и рассчитана на 136 часов занятий и внеклассных языковых мероприятий, праздников. В конце учебного года учащийся сдает внутренний экзамен, подтверждает новый уровень обучения, переводится на следующий.
              h3 Занятия проводятся 2 раза в неделю по 80 минут.
              h3 Стоимость обучения в 2020-2021 учебном году в группе (8-12 человек) – 3800 рублей в месяц.

              v-divider
              br
              h3 КИТАЙСКИЙ ЯЗЫК
              p Занятия по китайскому языку проводятся для учащихся с 1 по 11 класс и взрослых.
              p
                | При обучении китайскому языку учитываются особенности наших учеников, сформированность у них желания изучить язык, их готовность к самостоятельной работе, поэтому на занятии совместно работают русский преподаватель и учитель-носитель китайского языка. Русский преподаватель выстраивает структуру занятия, подбирает методику обучения, объясняет, китайский педагог отрабатывает коммуникативную часть занятия, работает в диалоге с учениками. Эффективность такого сотрудничества очень высокая и результаты наших учеников растут.
              p
                | Программа одного года обучения рассчитана на 136 аудиторных часов.  обучения рассчитана на ступени:
              p 1 год обучения «Китайский язык»;
              p 2 год обучения «Китайский язык»;
              p 3 год обучения «Китайский язык»;
              p 4 год обучения «Китайский язык»;
              p 5, 6, 7 годы обучения «Китайский язык для туристов».
              h4 Подготовка к ЕГЭ по китайскому языку.
              p В первую и последнюю неделю лета для наших новых учеников проводятся смены летнего языкового лагеря «Panda school». Основная задача программы в игровой форме познакомить учащихся 2-5 классов с китайским языком и китайской культурой.
              h3 Занятия проводятся 2 раза в неделю по 80 минут.
              h3 Стоимость обучения в одновозрастной группе (8-10 человек) – 4500 рублей в месяц.

        v-tab-item
          v-card(flat='')
            v-card-text
              p
                | Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              p
                | Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
              p
                | Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
              p
                | Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
              p.mb-0
                | Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        v-tab-item
          v-card(flat='')
            v-card-text
              p
                | Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              p.mb-0
                | Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.

  br
</template>

<script>
export default {
name: "ADirectionsPage"
}
</script>

<style scoped>

</style>