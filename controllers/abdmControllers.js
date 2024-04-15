import { postRecords } from "../utiils/apiCalls.js";

const { ABDM_CLIENT_ID, ABDM_CLIENT_SECRET, ABDM_SESSION_URL, ABDM_URL } = process.env

export function getAbdm(req, res) {

}
export function postAbdm(req, res) {

    const url = req.originalUrl
    // const url = req.originalUrl.replace('/himsprovider', '')

    console.log('url:>>>>>>', ABDM_URL + url)
    const Idbody = {
        clientId: ABDM_CLIENT_ID,
        clientSecret: ABDM_CLIENT_SECRET,
    }

    postRecords(ABDM_SESSION_URL + "/sessions", Idbody)
        .then(response => {
            const token = response.data.accessToken
            const body = JSON.stringify(req.body)

            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
                'X-CM-ID': 'sbx'
            };
            // const abdmRes = axios.post(ABDM_URL + url, body, { headers })
            postRecords(ABDM_URL + url, body, headers)
            console.log('inside main api=================================================')
                .then(response => {
                    console.log('responseapi:>>>>>>', response)
                    res.status(200).json(response.data)
                })
                .catch(err => {
                    console.log('error of main part=============================')
                     res.status(500).json(err) })

            console.log('***********************')
        })
        .catch(err => { res.status(500).json(err) })
    console.log('finally:>>>>')

}