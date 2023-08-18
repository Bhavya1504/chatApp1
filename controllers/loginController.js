const User = require("../models/userModel");
const {checkPassword} = require("../utils/passwordUtlis");
const { generateToken } = require("../utils/tokensUtils");

module.exports.postLoginController = async (req, res) => {
    console.log(req);
    const result = await User.findOne({
        where: {
            email: req.body.email,
        }
    })
    if (result) {
        const varify = await checkPassword(req.body.password, result.password);
        if (varify){
            const token=generateToken(result.id,result.email)
            console.log(token);
            res.json({message:"User login successfully",status:201,token});
        }
        else
            res.json({ message: "Incorrect password", status: 401 })
    }
    else {
        res.json({ message: 'User not found', status: 404 });
    }
}