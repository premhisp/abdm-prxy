import axios from "axios"

export function postRecords(api, body, headers={}) {
    console.log('in axios   :>>>>>>', api, body, headers)
    return axios.post(api, body, { headers })

}