import axios from "axios";

const instance=axios.create({
    baseURL:"https://elmirashokriyan.ir/"
})
export default instance