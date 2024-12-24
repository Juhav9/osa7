import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getCountryByName = (name) => {
    const url = baseUrl + name
    const request = axios.get(url)
    return request.then(response => response)
}

export default {getCountryByName}