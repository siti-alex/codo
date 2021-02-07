<template lang="pug">
    div
        v-card(:loading='loading').mb-5
            v-subheader.subtitle-1 Предметы
              v-btn(icon='' color="#8b2639" @click="showNewSubjectForm").float-right
                v-icon mdi-plus
            v-expansion-panels(accordion='' focusable='')
                v-expansion-panel(v-for='subject in subjects' :key='subject.id' cols='12' link='' v-if="!loading")
                    v-expansion-panel-header {{subject.name}}
                    v-expansion-panel-content
                        v-card(flat='')
                            v-card-title.subtitle-2 Информация
                            v-spacer
                            v-card-text.pb-0 Учитель:
                              v-chip-group(column='')
                                v-chip(v-for="teacher in subject.teacher" label='' outlined='' color='#800024') {{teacher.fio}}
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
                loading: false,
            }
        },
        methods: {
            getAllSubjects(){
                this.loading = true;
                Api.getAllSubjects().then(value => {
                        this.subjects = value.data;
                        console.log(value.data);
                        this.loading = false;
                    },
                    (error) => {
                        console.log(error);
                        this.loading = false;
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
