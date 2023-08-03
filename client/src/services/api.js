import axios from "axios"

export const UploadFile = async(data)=>{
    const API_URL = 'http://localhost:8000'
    try {
        let response = await axios.post(`${API_URL}/upload` , data)
        return response.data
    } catch (error) {
        console.log(error.message)
        
    }
}