import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 1000
})

// api.get("records").then((response) => {
//     return response.data
// }).catch(error => {
//     console.log(error)
// })



export default api