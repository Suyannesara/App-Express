import axios from "axios"

const instance = axios.create({
    baseURL: 'https://localhost:8081',
    timeout: 1000,
    proxy: {
        protocol: 'https'
    }
})

instance.get("users").then((response) => {
    console.log(response.data)
}).catch(error => {
    console.log(error.response)
})


export default {instance}