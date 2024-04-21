import axios from "axios";
const BACKEND_URL = "http://localhost:9001/api";

export const registerUser = async ({username , password}) => {
    try{
        const reqUrl = `${BACKEND_URL}/register`;
        const response = await axios.post(reqUrl , {username , password});
        return response.data;

    }catch(error){
        console.log(error);
    }
}

export const loginUser = async (username , password) => {
    try{
        const reqUrl = `${BACKEND_URL}/login`;
        const response = await axios.post(reqUrl , {username , password});
        return response.data;

    }catch(error){
        console.log(error);
    }
}
