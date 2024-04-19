import { getRecords, postRecords } from "../utiils/apiCalls.js";

const { ABDM_CLIENT_ID, ABDM_CLIENT_SECRET, ABDM_SESSION_URL, ABDM_URL } = process.env

const exception_url = ['/patients/sms/notify2']

const Idbody = {
    clientId: ABDM_CLIENT_ID,
    clientSecret: ABDM_CLIENT_SECRET,
}

export function getAbdm(req, res) {
    const url = req.originalUrl.replace('/himsprovider', '')

    postRecords(ABDM_SESSION_URL + "/sessions", Idbody)
        .then(response => {
            const token = response.data.accessToken
            let headers = {
                Authorization: "Bearer " + token,
                'X-CM-ID': 'sbx'
            };
            headers["Content-Type"]=req.headers['content-type']

            if (req.headers['x-token']) headers['x-token'] = req.headers['x-token']

            getRecords(ABDM_URL + url, headers)
                .then(response => res.status(200).json(response.data))
                .catch(err => res.status(500).json(err.response?.data))
        })
        .catch(err => res.status(500).json(err.response?.data))
}

export function postAbdm(req, res) {
    const url = req.originalUrl.replace('/himsprovider', '')
    const BASE_URL = exception_url.includes(url) ? ABDM_SESSION_URL + url : ABDM_URL + url

    postRecords(ABDM_SESSION_URL + "/sessions", Idbody)
        .then(response => {
            const token = response.data.accessToken
            const body = JSON.stringify(req.body)

            let headers = {
                Authorization: "Bearer " + token,
                'X-CM-ID': 'sbx'
            };
            headers["Content-Type"]=req.headers['content-type']

            if (req.headers['x-token']) headers['x-token'] = req.headers['x-token']
            if (req.headers['Accept']) headers['Accept'] = req.headers['Accept']


            postRecords(BASE_URL, body, headers)
                .then(response => res.status(200).json(response.data))
                .catch(err => res.status(500).json(err.response?.data))
        })
        .catch(err => res.status(500).json(err.response?.data))
}