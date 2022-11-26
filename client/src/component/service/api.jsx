import axios from "axios";

const URL = 'http://localhost:8000';

export const adduser = async (data) =>{
    try{
       return await axios.post(`${URL}/adduser`,data);
    }
    catch(error){
        console.log("Error While Calling Add User Api ", error);
    }
}

export const getuser = async () =>{
    try{
       return await axios.get(`${URL}`);
    }
    catch(error){
        console.log("Error While Calling Add User Api ", error);
    }
}
export const getUserById = async (id) =>{
    try{
        return await axios.get(`${URL}/edit/${id}`);
     }
     catch(error){
         console.log("Error While Calling getUserById  Api ", error);
     }
}

export const editUser = async (FormData,id) =>{
    try{
        return await axios.put(`${URL}/edit/${id}`,FormData);
        
     }
     catch(error){
         console.log("Error While Calling editUser  Api ", error);
     }
}

export const deletesingle = async (id) =>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log("Error While Calling deletesingle  Api ", error);
    }
}