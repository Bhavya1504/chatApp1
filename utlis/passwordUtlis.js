const bcrypt = require('bcrypt');

// var encryptPasswordValue;
module.exports.encryptPassword = async (myPlaintextPassword) => {
    try {
        const hash = await bcrypt.hash(myPlaintextPassword, Number(process.env.SALT_ROUND))
        return hash;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports.checkPassword=async(loginPassword,userPassword)=>{
    const match = await bcrypt.compare(loginPassword, userPassword);
    return match?true:false;
}