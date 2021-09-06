import User from '../models/userSchema.js'

 export const userSignup = async(req,res)=>{
    try {

        const exist = await User.findOne({username: req.body.username});
        if(exist){
            return res.status(401).json('User alreadt Exist');
        }else{
        const user =req.body;
        const newUser=  new User(user);
       await  newUser.save();
       res.status(200).json('User registered successfully');
        }
        
    } catch (error) {
        console.log('Error',error.massage);
    }

} 

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}