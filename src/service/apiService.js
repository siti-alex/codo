import axios from 'axios';
//import router from '@/router';


//const api = 'http://213.87.96.9:6006';
const api = 'http://192.168.202.104:8080';


const baseURL = `${api}`;

const API = axios.create({
    withCredentials: true,
    baseURL,

    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        'Content-Type': 'application/json',
        "Set-Cookie": "SameSite=None;"
        //"Set-Cookie": "cross-site-cookie=name; SameSite=None; Secure"
    }
});

/*API.interceptors.response.use(({data}) => data
    , (error) => {
        if (error.response && error.response.status === 403 || (error.response && error.response.status === 401)) {
            router.replace({
                name: 'auth',
                query: {redirect: router.currentRoute.fullPath},
            })
        }
    }); */


export default {
    api,

    auth(user){
      return API.post(`/login`,user);
    },
    getAllStudents(){
        return API.get(`/student/getAll`);
    },
    getDisciplinesByUser(id){
        return API.get(`/student/${id}/getDisciplines`);
    },
    getAllSubjects(){
        return API.get(`/discipline/getAll`);
    },
    getAllCourses(){
        return API.get(`/course/getAll`);
    },
    getAllStudentsByCourse(id){
        return API.get(`/student/getAllByCourse/${id}`);
    },
    getAllTeachers(){
        return API.get(`/teacher/getAll`);
    },
    deleteNewsById(id){
        return API.get(`/news/${id}/delete`);
    },
    getAllNews(){
        return API.get(`/news/public/getAll`);
    },
    setNews(news){
        return API.post(`/news/upload`, news);
    },
    getNewsById(id){
        return API.get(`/news/public/${id}`);
    },
    getEventById(id){
        return API.get(`/event/public/${id}`);
    },
    ChangeNews(news, id){
        return API.post(`/news/${id}/update`, news);
    },
    UploadImage(img){
        return API.post(`/image/upload`, img);
    },
    getEvents(){
        return API.get(`/event/public/getActual`);
    },
    uploadEvent(event){
        return API.post(`/event/upload`, event);
    },
    deleteEventById(id){
        return API.get(`/event/${id}/delete`);
    },
    ChangeEvent(event, id){
        return API.post(`/event/${id}/update`, event);
    },
    AddNewDiscipline(discipline){
        return API.post(`/discipline/add`, discipline);
    },
    deleteDiscipline(id){
        return API.get(`discipline/${id}/delete`)
    },
    deleteStudent(id){
        return API.get(`student/${id}/delete`)
    },
    updateStudent(upd,id){
        return API.post(`student/${id}/update`,upd)
    },
    addStudent(student){
      return API.post(`/student/addStudent`, student)
    },
    addTeacher(teacher){
        return API.post(`/teacher/add`, teacher)
    },
    updateTeacher(upd,id){
        return API.post(`teacher/${id}/update`,upd)
    },
    deleteTeacher(id){
        return API.get(`teacher/${id}/delete`)
    }

//http://адрес:порт/news/{id}/delete
    //return API.get(`/news/delete?id=${id}`);

}
