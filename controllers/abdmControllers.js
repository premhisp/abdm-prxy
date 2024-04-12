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
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBbFJiNVdDbThUbTlFSl9JZk85ejA2ajlvQ3Y1MXBLS0ZrbkdiX1RCdkswIn0.eyJleHAiOjE3MTI5NDEyODIsImlhdCI6MTcxMjk0MDA4MiwianRpIjoiYzJhYTUyZWYtZTQ1NS00MDQxLTkyNjQtZjkyOTc0MmFmYWI0IiwiaXNzIjoiaHR0cHM6Ly9kZXYubmRobS5nb3YuaW4vYXV0aC9yZWFsbXMvY2VudHJhbC1yZWdpc3RyeSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIxZDYyNWUyMC1iNDkzLTQzOTctYmUzMC0zYjlkMWU4MTE5ODkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJTQlhfMDAxNTMwIiwic2Vzc2lvbl9zdGF0ZSI6ImZiZjgyZGY1LTE4ZmEtNDhmZi04MjU1LTZjYTdiZjg3NTk2MCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo5MDA3Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJoaXUiLCJvZmZsaW5lX2FjY2VzcyIsImhlYWx0aElkIiwiT0lEQyIsImhpcCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7IlNCWF8wMDE1MzAiOnsicm9sZXMiOlsidW1hX3Byb3RlY3Rpb24iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJjbGllbnRJZCI6IlNCWF8wMDE1MzAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudEhvc3QiOiIxMDAuNjUuMjAzLjI0NCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1zYnhfMDAxNTMwIiwiY2xpZW50QWRkcmVzcyI6IjEwMC42NS4yMDMuMjQ0In0.h38shflbS__6_y_cxQY4vUl-IVBy5XAlZoJs5iSzVsQycCKfhBw-KgnqjefKjMqDP5RpUr1RLctl9cXJYN-_1yh0HoFWMI0g6LH2-nQmLZTNu_aBZyYD65Cqv2WLoewXw0Hko2Q2cZ9F9YQwTpOapLDyLvKmbbfwIddVKG4jhju5W2ZMuUO-P1bNGPW10WQTVOFoUDnb5Er1euAxsLU9wd5HTIzb7rL_gbXe4fAND63IwQ8S-vRJgy0Pvo4h0FYmlMLjX9XlSJgI28B3qG61_dqutM-90ZwXRz1cckxgUu-Cnm_3sqL8Ikrw-I1CV7H9L95Syb1OrT6J8ug6TAuYfw'
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