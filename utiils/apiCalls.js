import axios from "axios"

export async function postRecords(api, body, headers={}) {
    console.log('in axios   :>>>>>>', api, body, headers)
    return await axios.post(api, body, { headers })

}