import axios from 'axios'
export const baseUrl = 'https://babyappbackend02.pythonanywhere.com/api/v1'
const client = axios.create({
    baseUrl: baseUrl,
})
export default client