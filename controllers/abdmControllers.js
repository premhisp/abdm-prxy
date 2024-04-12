import { postRecords } from "../utiils/apiCalls.js";
import axios from "axios"

const { ABDM_CLIENT_ID, ABDM_CLIENT_SECRET, ABDM_SESSION_URL, ABDM_URL } = process.env

export function getAbdm(req, res) {

}
export async function postAbdm(req, res) {


    let data = JSON.stringify({
      "healthId": "yaragunta19890610@sbx"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://healthidsbx.abdm.gov.in/api/v2/search/searchByHealthId',
      headers: { 
        'X-CM-ID': 'sbx', 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBbFJiNVdDbThUbTlFSl9JZk85ejA2ajlvQ3Y1MXBLS0ZrbkdiX1RCdkswIn0.eyJleHAiOjE3MTI5NDIwNDIsImlhdCI6MTcxMjk0MDg0MiwianRpIjoiZWIyYjNkZTUtODUwYS00ZmZlLWIyYWUtNjcwNjIxN2VjNTRmIiwiaXNzIjoiaHR0cHM6Ly9kZXYubmRobS5nb3YuaW4vYXV0aC9yZWFsbXMvY2VudHJhbC1yZWdpc3RyeSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIxZDYyNWUyMC1iNDkzLTQzOTctYmUzMC0zYjlkMWU4MTE5ODkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJTQlhfMDAxNTMwIiwic2Vzc2lvbl9zdGF0ZSI6IjU2MzE3ZDc3LTgxOGMtNGQwNS1hODA5LTkzMDJjYjZmOGNkMiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo5MDA3Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJoaXUiLCJvZmZsaW5lX2FjY2VzcyIsImhlYWx0aElkIiwiT0lEQyIsImhpcCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7IlNCWF8wMDE1MzAiOnsicm9sZXMiOlsidW1hX3Byb3RlY3Rpb24iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJjbGllbnRJZCI6IlNCWF8wMDE1MzAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudEhvc3QiOiIxMDAuNjUuMjAzLjI0NCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1zYnhfMDAxNTMwIiwiY2xpZW50QWRkcmVzcyI6IjEwMC42NS4yMDMuMjQ0In0.etZbnVU11ZV6_SEFPL2U0XzEjiok8268ju2dgOeufBAhE_fGBRufaz0CYeuxIAp1d4Rx5CiRqXVBIOUw3Ams9nM8Z0wAOdYIxIgs_SsDOeEiBIo3_oCXYILkc6D6eCMLB25EmgNFGVLIr-d4HTnmqCQaBCisUjHxRhXduDe5uavoQdJ1XYnXDH6PCe3bjg_AxKyCxAw_eIrsuCiFYPKpQI_2bE4ITDjQdaQztH5JsxckAU2KJlqaHjspeX0jW7ix5IbwIOlmW1-FKiLXnBII8yUWjGszow4kmufbwhuv9g24fmjVfhhARGDnz1TcBPFBPrXYIks7NGb3zREZX6BQ5Q'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log('responce founded*****************:       ',JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log('error founded********************:   ',error);
    });
    





































    // const url = req.originalUrl.replace('/himsprovider', '')

    // console.log('url:>>>>>>', ABDM_URL + url)
    // const Idbody = {
    //     clientId: ABDM_CLIENT_ID,
    //     clientSecret: ABDM_CLIENT_SECRET,
    // }



    // const body = req.body
    

    // const tokanRes = await postRecords(ABDM_SESSION_URL + "/sessions", Idbody)
    // const token = tokanRes.data.accessToken

    // const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + token,
    //     'X-CM-ID': 'sbx'
    // };

    // console.log('tokanRes :>> ', tokanRes);
    // const dataRes = await postRecords(ABDM_URL + url, body, headers)
    // console.log('dataRes :>> ', dataRes);

    //     .then(response => {
    //         const token = response.data.accessToken
    //         const body = JSON.stringify(req.body)

    //         const headers = {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + token,
    //             'X-CM-ID': 'sbx'
    //         };
    //         postRecords(ABDM_URL + url, body, headers)
    //             .then(response => {
    //                 console.log('responseapi:>>>>>>', response)
    //                 res.status(200).json(response.data)
    //             })
    //             .catch(err => { res.status(500).json(err) })

    //         console.log('***********************')
    //     })
    //     .catch(err => { res.status(500).json(err) })
    console.log('finally:>>>>')

}