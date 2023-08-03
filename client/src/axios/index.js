import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'localhost:8080',
    timeout: 1000,
  });

export async function getAllProductNames(){
    try{
        axiosInstance.get('')
    }catch{

    }
}