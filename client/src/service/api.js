import axios from 'axios'

const url='';
export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}
export const authenticateSignup = async(user) =>{
    try {
        return await axios.post(`${url}/signup`,user)
        
    } catch (error) {
        console.log('Error while calling');
        
    } 
}

export  const payUsingPaytm = async (data) => {
    try {
        console.log('payment api');
        let response = await axios.post(`${url}/payment`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}