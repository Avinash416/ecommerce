import axios from "axios";
import * as action from '../constants/ProductConstant'

 
export const getProducts = () =>async(dispatch)=>{
    try {
        console.log('Hiiiiii')
        const {data} = await axios.get(`/products`);
        console.log(data);
        dispatch({type:action.GET_PRODUCT_SUCCESS ,payload:data})
        
        
    } catch (error) {
        dispatch({type:action.GET_PRODUCT_FAIL ,payload:error.response})
       
        
    }

}

export const getProductDetail=(id)=> async(dispatch)=>{
    try {
        console.log('Hiiiiii in byid')
        const {data} = await axios.get(`/product/${id}`);
        console.log(data);
        dispatch({type:action.GET_PRODUCT_DETAIL_SUCCESS ,payload:data})
        
    } catch (error) {
        dispatch({type:action.GET_PRODUCT_DETAIL_FAIL ,payload:error.response})
        
    }
}