import axios from "axios";

const axiosInstance = axios.create()
axiosInstance.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('ipss_access_token')
    window.location = "/"
  }
  return Promise.reject(error);
})

export default axiosInstance
