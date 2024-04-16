import { getRecords, postRecords } from "../utiils/apiCalls.js";

const { ABDM_CLIENT_ID, ABDM_CLIENT_SECRET, ABDM_SESSION_URL, ABDM_URL } = process.env

const Idbody = {
    clientId: ABDM_CLIENT_ID,
    clientSecret: ABDM_CLIENT_SECRET,
}

export function getAbdm(req, res) {
    const url = req.originalUrl.replace('/himsprovider', '')

    postRecords(ABDM_SESSION_URL + "/sessions", Idbody)
        .then(response => {
            const token = response.data.accessToken
            var headers = req.headers
            headers.Authorization = "Bearer " + token,
            headers['X-CM-ID'] = 'sbx'
            console.log('headers:>>>>>>', headers)

            getRecords(ABDM_URL + url, headers)
                .then(response => res.status(200).json(response.data))
                .catch(err => res.status(500).json(err.response.data))
        })
        .catch(err => res.status(500).json(err.response.data))
}

export function postAbdm(req, res) {
    const url = req.originalUrl.replace('/himsprovider', '')

    postRecords(ABDM_SESSION_URL + "/sessions", Idbody)
        .then(response => {
            const token = response.data.accessToken
            const body = JSON.stringify(req.body)

            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
                'X-CM-ID': 'sbx'
            };
            postRecords(ABDM_URL + url, body, headers)
                .then(response => res.status(200).json(response.data))
                .catch(err => res.status(500).json(err.response.data))
        })
        .catch(err => res.status(500).json(err.response.data))
}