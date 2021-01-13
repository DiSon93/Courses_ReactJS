import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://elearning0706.cybersoft.edu.vn/api",

})
//Tự động thêm authorization vào headers nếu có accexxToken
axiosClient.interceptors.request.use((config) => {
    // const {accessToken} = JSON.parse(localStorage.getItem("user") || {});
    const user = localStorage.getItem("user");
    if(user){
        const { accessToken } =JSON.parse(user);
        config.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  

    return config;
})
export default axiosClient;