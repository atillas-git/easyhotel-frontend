import axios from "axios"

export const register = async (payload)=>{
    return await axios.post("/api/auth/register",payload)
}
export const login = async (payload)=>{
    return await axios.post("/api/auth/login",payload)
}