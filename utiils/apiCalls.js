import axios from "axios"

export async function postRecords(api, body, headers = {}) {
    console.log('api before :>> ', api);
    const res= await axios.post(api, body, { headers })
    console.log('api :>> ', api);
    console.log('res :>> ', res.data);
    return res
}
export async function getRecords(api, headers = {}) {
    return await axios.get(api, { headers })
}