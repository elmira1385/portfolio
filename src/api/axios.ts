import axios from "axios";

const instance=axios.create({
    baseURL:"https://elmira-shokriyan.netlify.app/"
})
export default instance