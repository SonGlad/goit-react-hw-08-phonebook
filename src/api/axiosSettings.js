import axios from "axios";


axios.defaults.baseURL = `https://phonebook-back-zx2p.onrender.com/`;


export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
};


export default axios;
















// export const userRegister = async (credentials) => {
//     const response = await axios.post('users/signup', credentials)
//     return response.data
// };


// export const userLogIn = async (credentials) => {
//     const response = await axios.post('users/login', credentials)
//     return response.data
// };


// export const userLogOut = async () => {
//     await axios.post('users/logout');
// };




