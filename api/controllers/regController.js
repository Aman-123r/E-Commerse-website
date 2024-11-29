const Reg = require("../models/reg")
const bcrypt = require("bcrypt")


exports.Registration = async(req, res) => {
    const { username, password, email } = req.body
    const checkpass = await bcrypt.hash(password  , 10)
    const usercheck = await Reg.findOne({Username : username})
    
  try{
    if(usercheck == null){
    const record =  new Reg({ Username: username, Password: checkpass, Email: email })
    record.save()
    res.json({
        status : 201 , 
        apiData : record , 
        message : "successfully Registered"
        
    })
}else{
    res.json({
        status : 401 , 
        message : "username is already taken"
    })
}
    
  }catch(error){
        res.json({
            status : 400 , 
            message : error.message
        })
  }
   

}



exports.Login = async(req,res)=>{
    // console.log(req.body)
    const {username , password} = req.body
    const record = await Reg.findOne({Username : username})
    try{
   if(record !== null){
        const userpasscheck = await bcrypt.compare( password ,  record.Password )
        // console.log(userpasscheck)
            if(userpasscheck){

            
    res.json({
        status : 200 , 
        apiData : record.Username , 
        message  : `${username} successfully login`
    })
}else{
    res.json({
        status : 400 , 
        message : 'oops somthing went wrong..'

   })
}
   }else{
    res.json({
        status : 400 , 
        message : 'oops somthing went wrong..'

   })
   }
}catch(error){
    res.json({
        status : 401 , 
        message : "wrong credientials"
    })
}
}



