<template lang="pug">
div
  v-card.mx-auto(height='100%' width='100%' elevation="6")
    v-card-title.justify-center Направления
    v-divider
    v-card(:loading='loading')
      v-tabs(vertical='' grow='' hide-slider='' v-model="tab")
        v-tab(v-for="item in directions" :key="item.id" @click="getInfo(item.dir)").subtitle-2
          div(v-html='item.head')
        //v-divider
        v-tabs-items(v-model="tab")
            v-tab-item(v-for="item in directions" :key="item.id")
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
            tab: null,
            info: null,
            loading: false,
            directions: [
                {
                    id: 1,
                    head: '<div>Школа иностранных языков</div>',
                    dir: 'https://cms.lit.bgpu.ru/public/get/public/codo-site/shiya/'
                },
                {
                    id: 2,
                    head: '<div>Школа программирования <br> и основ робототехники</div>',
                    dir: 'https://cms.lit.bgpu.ru/public/get/public/codo-site/shprogandrobot/'
                },
                {
                    id: 3,
                    head: '<div>Предметные курсы <br> (подготовка к ЕГЭ и ОГЭ)</div>',
                    dir: 'https://cms.lit.bgpu.ru/public/get/public/codo-site/exam-courses/'
                },
                {
                    id: 4,
                    head: '<div>Предметные кружки для учащихся <br> по проекту «Олимпийский старт»</div>',
                    dir: 'https://cms.lit.bgpu.ru/public/get/public/codo-site/olymp-courses/'
                },
                {
                    id: 5,
                    head: '<div>Комплексные программы для <br> старшеклассников «БГПУ для Школы»</div>',
                    dir: 'https://cms.lit.bgpu.ru/public/get/public/codo-site/for-high-school/'
                },
                {
                    id: 6,
                    head: '<div>Репетиционные экзамены (ЕГЭ и ОГЭ)</div>',
                    dir: 'https://cms.lit.bgpu.ru/public/get/public/codo-site/test-exam/'
                },

            ]
        }
    },
    methods: {
        getInfo(dir){
            this.info = null;
            this.loading = true;
            axios
                .get(dir)
                .then(response => {
                    //console.log(response);
                    this.info = response.data.htmlCode;
                    this.loading = false;
                })
        },
    },
    mounted() {
        this.loading = true;
        axios
            //.get('https://cms.lit.bgpu.ru/public/get/public/codo-site/exam-courses/')
            .get('https://cms.lit.bgpu.ru/public/get/public/codo-site/shiya/')
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
