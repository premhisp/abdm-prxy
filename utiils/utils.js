import axios from "axios"

export function genrateABDMsessionToken() {
    const { ABDM_CLIENT_ID, ABDM_CLIENT_SECRET, ABDM_SESSION_URL } = process.env

    var initialBodyPostDataJson = {
        clientId: ABDM_CLIENT_ID,
        clientSecret: ABDM_CLIENT_SECRET,
    }

    return axios.post(ABDM_SESSION_URL + "/sessions", initialBodyPostDataJson)

}