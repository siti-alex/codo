<template lang="pug">
  v-app
    v-app-bar(app='', color="#8b2639", dark='' clipped-left='' style="opacity: 0.8" )
      img(src='@/assets/logo2.png' align='left', tag='span', style='cursor: pointer' @click="home")
      v-spacer
      v-toolbar-title Центр организации довузовского образования при БГПУ
    router-view
</template>

<style lang="scss">

</style>
<script>
import AHome from "@/views/AHome/index";
export default {
  components: {AHome},
  data: () => ({

  }),
  methods: {
    home(){
      location.href = '/home/news';
    }
  }
}
</script>