import axios from "axios"

export function postRecords(api, body, headers = {}) {
    return axios.post(api, body, { headers })
}
export function getRecords(api, headers = {}) {
    return axios.get(api, { headers })
}