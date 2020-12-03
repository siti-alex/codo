<template lang="pug">
div
  v-card.mx-auto(height='100%' width='80%' elevation="6" min-height='700px')
    v-card-title.justify-center Документы
    v-divider
    v-card(:loading='loading' v-html='info' min-height='700px' flat='').mx-5
  br
</template>

<script>
    import axios from 'axios'
export default {
name: "ADocsPage",
    data () {
        return {
            top: false,
            tab: null,
            info: null,
            loading: false,
        }
    },
    mounted() {
        this.loading = true;
        axios
            //.get('https://cms.lit.bgpu.ru/public/get/public/codo-site/exam-courses/')
            .get('https://cms.lit.bgpu.ru/public/get/public/docs/')
            .then(response => {
                //console.log(response);
                this.info = response.data.htmlCode
                this.loading = false;
            })
    }
}
</script>

<style scoped>

</style>
