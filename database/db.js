import mongoose from 'mongoose'

const Connection = async  (URL)=>{
    
    try {
        await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log('Database connected successfully');
        
    } catch (error) {
        console.log("Error:",error.massage);
    }
}
export default Connection;