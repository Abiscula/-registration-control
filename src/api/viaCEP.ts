import axios from "axios";


export async function searchZipCode(zipCode: string) {
   
    try {
        const res = await axios.request({
            method: 'GET',
            baseURL: `https://viacep.com.br/ws/${zipCode}/json/`
        })
        return res.data
    }catch(err) {
        console.log(err)
    }
}