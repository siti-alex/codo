<template lang="pug">
  div
    v-carousel(cycle='' height='400' show-arrows-on-hover='')
      v-carousel-item(v-for='(item, i) in items' :key='i' :src="item.src")
    v-tabs(fixed-tabs='' background-color='indigo' dark='')
      v-tab(v-for='link in links' :key='link' :to="link.route")
        | {{ link.title }}
    div.grey.lighten-3

        v-card.mx-auto(height='100%' width='80%' elevation="6")
          v-card-title.justify-center О нас
          v-divider
          //v-content
            v-card-title.text-lg-h4 Контактная информация:
            v-list-item(v-for='(job, i) in jobs' :key='i' )
              v-list-item-content
                v-list-item-title {{job.name}}
                v-list-item-subtitle {{job.job}}
            p
            v-card-title.text-lg-h6.pa-0.ml-4 Время работы:
            p.ml-4 Понедельник-пятница с 8.00 до 18.00 без перерыва на обед
            v-card-title.text-lg-h6.pa-0.ml-4 Адрес:
            p.ml-4 Амурская область, г. Благовещенск, ул. Ленина, д. 104, Благовещенский государственный педагогический университет, аудитория 219 центрального корпуса.
            v-card-title.text-lg-h6.pa-0.ml-4 Телефоны:
            p.ml-4 (4162) 771-784 (в рабочее время)
            p.ml-4 89145552747 (в рабочее время) есть WhatsApp (можно писать сообщения)

            v-card-title.text-lg-h6.pa-0.ml-4 Адрес электронной почты:
            p.ml-4 codobgpu@yandex.ru
          v-content
            //div(style='position:relative;overflow:hidden;')
              a(href='https://yandex.ru/maps/77/blagoveshchensk/?utm_medium=mapframe&utm_source=maps' style='color:#eee;font-size:12px;position:absolute;top:0px;') Благовещенск
              a(href='https://yandex.ru/maps/77/blagoveshchensk/house/ulitsa_lenina_104/ZUsBaAJkSU0BWEJvY2JzdHprZAg=/?ll=127.541093%2C50.256657&utm_medium=mapframe&utm_source=maps&z=18.4' style='color:#eee;font-size:12px;position:absolute;top:14px;') Улица Ленина, 104 — Яндекс.Карты
              iframe(src='https://yandex.ru/map-widget/v1/-/CCQ~eThH2B' width='560' height='400' frameborder='1' allowfullscreen='true' style='position:relative;')

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
  name: "AAbout",
  data: () => ({
    links: [
      {
        title: 'Новости',
        route: '/news'
      },
      {
        title: 'Направления',
        route: '/directions'
      },
      {
        title: 'Документы',
        route: '/docs'
      },
      {
        title: 'О нас',
        route: '/about'
      },
    ],
    items: [
      {
        //src: 'https://i1.photo.2gis.com/images/branch/52/7318349406952696_1d15.jpg',
        src: '/slides/slide1.jpg',
      },
      {
        //src: 'https://bgpu.ru/newsfiles/5986_i1597193373016.jpg',
        src: '/slides/slide4.jpg',
      },
      {
        //src: 'https://bgpu.ru/newsfiles/5986_i1597193364793.jpg',
        src: '/slides/slide3.jpg',
      },
    ],
    jobs: [
      {
        name: 'Лукина Елена Юрьевна',
        job: 'директор ЦОДО.'
      },
      {
        name: 'Иванова Екатерина Владимировна',
        job: 'главный специалист по учебно-методической работе ЦОДО.'
      },
      {
        name: 'Ширяева Софья Олеговна',
        job: 'специалист по учебно-методической работе ЦОДО.'
      },
      {
        name: 'Антропова Алина Владимировна',
        job: 'специалист по учебно-методической работе ЦОДО.'
      }
    ]
  }),
}
</script>

<style scoped>

</style>