import axios from "axios";
import { API_BASE_URL, API_URLS, getHeaders } from "./constant"


export const fetchCategories = async()=> {
    const url = API_BASE_URL + API_URLS.GET_CATEGORIES;

    try{
        const result = await axios(url,{
            method:'GET'
        });
        return result?.data;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchCategoryByID = async(id)=> {
    const url = API_BASE_URL + API_URLS.GET_CATEGORY(id);
    const header = getHeaders()
    try{
        const result = await axios(url,{
            method:'GET',
            headers: header
        });
        
        return result?.data;
    }
    catch(e){
        console.log(e);
    }
}