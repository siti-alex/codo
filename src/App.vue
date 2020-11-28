<template lang="pug">
  v-app
    v-app-bar(app='', color="#8b2639", dark='' clipped-left='' style="opacity: 0.8" )
      img(src='@/assets/logo2.png' align='left', tag='span', style='cursor: pointer' @click="home")
      v-spacer
      v-toolbar-title Центр организации довузовского образования при БГПУ
    router-view
    v-footer(dark='' padless='' style="opacity: 0.9")
      v-card.white--text.text-center(flat='' tile='' width='100%' color="#8b2639")
        v-card-text
          v-btn.mx-4.white--text(v-for='icon in icons' :key='icon' icon='' :href='icon.href')
            v-icon(size='24px')
              | {{ icon.icon }}
        v-divider
        v-card-text.white--text
          | {{ new Date().getFullYear() }} —
          strong  Ситиков Алексей
</template>

<style lang="scss">

</style>
<script>
import AHome from "@/views/AHome/index";
export default {
  components: {AHome},
  data: () => ({
    // icons: [
    //   'mdi-vk',
    //   'mdi-instagram',
    //   'mdi-school',
    // ],
      icons: [
        {
          icon: 'mdi-vk',
          href: null,
        },
        {
          icon: 'mdi-instagram',
          href: null,
        },
        {
          icon: 'mdi-school',
          href: 'https://bgpu.ru/func/educational/codo.html',
        },
      ],
  }),
  methods: {
    home(){
      location.href = '/home/news';
    }
  }
}
</script>