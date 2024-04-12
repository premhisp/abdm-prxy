import { postRecords } from "../utiils/apiCalls.js";

const { ABDM_CLIENT_ID, ABDM_CLIENT_SECRET, ABDM_SESSION_URL, ABDM_URL } = process.env

export function getAbdm(req, res) {

}
export function postAbdm(req, res) {

    const url = req.originalUrl.replace('/himsprovider', '')

    console.log('url:>>>>>>', ABDM_URL + url)
    var Idbody = {
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
            console.log('token:>>>>>>', token)


            console.log('body:>>>>>>', body)
            console.log('headers:>>>>>>', headers)

            // const abdmRes = axios.post(ABDM_URL + url, body, { headers })
            postRecords(ABDM_URL + url, body, headers)
                .then(response => {
                    console.log('responseapi:>>>>>>', response)
                    res.status(200).json(response.data)
                })
                .catch(err => { res.status(500).json(err) })

            console.log('***********************')
        })
        .catch(err => { res.status(500).json(err) })
    console.log('finally:>>>>')

}