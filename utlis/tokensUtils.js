const jwt = require("jsonwebtoken");

module.exports.generateToken=(id,email)=>{
    console.log(id);
    console.log(email);
    return jwt.sign({id:id,email:email},process.env.JWT_SECRET_KEY)
}
module.exports.verifyToken=(req,res,next)=>{
    const token=req.headers?.authorization;
    req.body.tokenObj=jwt.verify(token,process.env.JWT_SECRET_KEY)
    next();
}