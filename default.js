import { products } from "./constants/product.js";
import Products from "./models/productSchema.js";


const defaultData= async()=>{
    try {

        await Products.deleteMany({});
        await Products.insertMany(products);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error:',error.massage);
    }


}



export default defaultData;
