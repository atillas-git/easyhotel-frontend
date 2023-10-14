import RestUtils from "@/utils/RestUtils"

export const getEmployees = async (payload = {})=>{
    return await RestUtils.post("/api/hr/employee/search",payload)
}

export const getDepartments = async (payload = {})=>{
    return await RestUtils.post("/api/hr/department/search",payload)
}

export const saveEmployee = async(payload) =>{
    return await RestUtils.post("/api/hr/employee",payload)
}

export const saveDepartment = async (payload = {})=>{
    return await RestUtils.post("/api/hr/department",payload)
}
