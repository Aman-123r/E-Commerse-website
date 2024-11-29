const router = require("express").Router()
const Regc = require("../controllers/regController")
const Foodc = require("../controllers/foodController")

 
const multer = require("multer")

const Storage = multer.diskStorage({
destination :(req , file , cb)=>{
cb(null, "./Public/upload"); 
},

filename : function(req,file,cb){
cb(null , Date.now()+file.originalname);

}
})


let upload = multer({

storage :Storage , 
limits :{
filesize : 1024*1024*4

}

})






router.post("/Register",Regc.Registration)
router.post('/Login',  Regc.Login)
router.post("/adminproductinsertform" ,upload.single("pimg") ,  Foodc.foodInsertform)
router.get("/adminshowdetails" , Foodc.showFoodproducts)
router.delete("/admindeleteproduct/:id",Foodc.DeleteFoodProduct)
router.get("/singleproductupdate/:id" , Foodc.singleProductUpdate )
router.put("/adminupdate/:id",Foodc.adminfinalupdate)
router.put("/adminupdateImage/:id",upload.single("pimg"),Foodc.adminfinalupdateImage)
router.get("/usershowlist",Foodc.usershowlist)
router.post("/cart",Foodc.addtocart)


module.exports = router
