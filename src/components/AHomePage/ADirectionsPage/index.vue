<template lang="pug">
div
  v-card.mx-auto(height='100%' width='100%' elevation="6")
    v-card-title.justify-center Направления
    v-divider
    v-card
      v-tabs(vertical='' grow='')
        v-tab(@click="getSchoolIns").subtitle-2
          |         Школа иностранных языков
        v-divider
        v-tab(@click="getSchoolProg").subtitle-2
          |         Школа программирования
          br
          |         и основ робототехники
        v-divider
        v-tab(@click="getPredmCours").subtitle-2
          |         Предметные курсы
          br
          |         (подготовка к ЕГЭ и ОГЭ)
        v-divider
        v-tab(@click="getCrujki").subtitle-2
          |         Научные предметные кружки для учащихся
          br
          |         по проекту «Олимпийский старт»
        v-divider
        v-tab(@click="getProgrmStarsh").subtitle-2
          |         Комплексные программы для старшеклассников
          br
          |         «БГПУ для Школы»
        v-divider
        v-tab(@click="getRepetic").subtitle-2
          |         Репетиционные экзамены (ЕГЭ, ОГЭ)
        v-tab-item
          v-card(flat='')
            v-card-text
                div(v-html="info") {{info}}
        v-tab-item
          v-card(flat='')
            v-card-text
                div(v-html="info") {{info}}
        v-tab-item
          v-card(flat='')
            v-card-text
                div(v-html="info") {{info}}
  br
</template>

<script>
    import axios from 'axios'
export default {
name: "ADirectionsPage",
    data () {
        return {
           info: null,
        }
    },
    methods: {
        getSchoolIns(){
            axios
                .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/shiya/')
                .then(response => {
                    console.log(response);
                    this.info = response.data.htmlCode
                })
        },
        getSchoolProg(){
            axios
                .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/shprogandrobot/')
                .then(response => {
                    console.log(response);
                    this.info = response.data.htmlCode
                })
        },
        getPredmCours(){
            axios
                .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/exam-courses/')
                .then(response => {
                    console.log(response);
                    this.info = response.data.htmlCode
                })
        },
        getCrujki(){
            axios
                .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/olymp-courses/')
                .then(response => {
                    console.log(response);
                    this.info = response.data.htmlCode
                })
        },
        getProgrmStarsh(){
            axios
                .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/for-high-school/')
                .then(response => {
                    console.log(response);
                    this.info = response.data.htmlCode
                })
        },
        getRepetic(){
            axios
                .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/test-exam/')
                .then(response => {
                    console.log(response);
                    this.info = response.data.htmlCode
                })
        },
    },
    mounted() {
        this.getSchoolIns();
        // axios
        //     //.get('https://cms.lit.bgpu.ru/public/get/public/codo-site/exam-courses/')
        //     .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/shprogandrobot/')
        //     .then(response => {
        //         console.log(response);
        //         this.info = response.data.htmlCode
        //     })
    }
}
</script>

<style scoped>

</style>
