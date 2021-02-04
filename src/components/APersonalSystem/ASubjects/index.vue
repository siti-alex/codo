<template lang="pug">
    div
        v-card().mb-5
            v-subheader.subtitle-1 Предметы
              v-btn(icon='' color="#8b2639" @click="showNewSubjectForm").float-right
                v-icon mdi-plus
            v-expansion-panels(accordion='' focusable='')
                v-expansion-panel(v-for='subject in subjects' :key='subject.id' cols='12' link='')
                    v-expansion-panel-header {{subject.name}}
                    v-expansion-panel-content
                        v-card(flat='')
                            v-card-title.subtitle-2 Информация
                                v-card-text.pb-0 Учитель: {{subject.teacher}}
                                v-card-text.pb-0 Кабинет: №215
                                v-card-text.pb-0 Стоимость посещения: {{subject.cost}} руб.
                            v-btn(color='primary' fab='' x-small='').float-lg-right
                                v-icon mdi-pencil

        ANewSubjectForm(ref="aNewSubjectForm" )
</template>

<script>
    import Api from "@/service/apiService";
    import ANewSubjectForm from "./ANewSubjectForm/index";
    export default {
        name: "ASubjects",
        components: {ANewSubjectForm},
        data () {
            return {
                subjects: [],
            }
        },
        methods: {
            getAllSubjects(){
                Api.getAllSubjects().then(value => {
                        this.subjects = value.data;
                        console.log(value.data);
                    },
                    () => {
                    console.log("Ошибка");
                    });
            },
            showNewSubjectForm() {
                this.$refs.aNewSubjectForm.showDialog();
            },
        },
        mounted() {
            this.getAllSubjects();
        }
    }
</script>

<style scoped>

</style>
