import axios from "axios"

export function postRecords(api, body, headers = {}) {
    console.log('in axios   :>>>>>>', 'https://cors-anywhere.herokuapp.com/' + api, body, headers)
    return axios.post('https://cors-anywhere.herokuapp.com/' + api, body, { headers })

}