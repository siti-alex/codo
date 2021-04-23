<template lang="pug">
  div
    h1 Журнал
</template>

<script>
    import Api from "@/service/apiService";
    export default {
        name: "AJournal",
        data:() => ({
            dialog: false,
            eventId: 0,
            events: [],
            serverIp: Api.api,
            curEvent: {},
        }),
        methods: {
            getAllLessons(){
                Api.getAllLessons().then(value => {
                        console.log(value);
                    },
                    () => {
                        console.log('Ошибка');
                    });
            },
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
