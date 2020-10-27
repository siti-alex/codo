import axios from 'axios';
//import router from '@/router';


const api = 'http://213.87.96.9:6006';
//const api = 'http://192.168.202.104:8080';


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
        'Content-Type': 'multipart/form-data',
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
    // getFullPath(id) {
    //     return API.get(`/section/getFullRoute?id=${id}`);
    // },
    // getSections() {
    //     return API.get('/section/tree');
    // },
    // setHtml(html) {
    //     return API.post('/section/setHTML/', html)
    // },

    getAllStudents(){
        return API.get(`/student/getAllStudents`);
    },
    getAllNews(){
        return API.get(`/news/getAll`);
    },
    setNews(news){
        return API.post(`/news/upload`, news);
    },



}
