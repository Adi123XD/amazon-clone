import axios from 'axios'
const  instance = axios.create({
    baseURL : 'http://127.0.0.1:5001/clone-9295c/us-central1/api/' // this is the api url (cloud funcitons)
});
export default instance;