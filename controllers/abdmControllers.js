import { genrateABDMsessionToken } from "../utiils/utils.js";
import axios from "axios"

const { ABDM_URL } = process.env

export function getAbdm(req, res) {

}
export function postAbdm(req, res) {

    const url = req.originalUrl.replace('/himsprovider', '')

    console.log('url:>>>>>>', ABDM_URL + url)
    genrateABDMsessionToken()
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

            axios.post(ABDM_URL + url, body, { headers })
                .then(response => {
                    console.log('responseapi:>>>>>>', response)
                    res.status(200).json(response.data)
                })
                .catch(err => { res.status(500).json(err) })
        })
        .catch(err => { res.status(500).json(err) })

}