const { Op } = require("sequelize");
const Message = require("../models/messageModel");
const User = require("../models/userModel");

module.exports.postSendMessageController=async(req,res)=>{
    console.log(req.body);
    const {message,tokenObj}=req.body;
    const result=await User.findOne({where:{
        id:tokenObj.id
    }})
    let data;
    if(result){
        data=await Message.create({message,senderId:tokenObj.id})
        res.json({message:'message receive',data})
    }
    else
        res.json({message:"User does not exist",status:401})
}

module.exports.getMessageController=async(req,res)=>{
    let id=req.params.id;
    if(id===undefined)
        id=0;
    const data = await Message.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ],
        attributes: ['id','message', ],
        order: [['createdAt', 'ASC']],
        where:{
            id: {
                [Op.gt]: id,
              }
        }
    });
    res.json({message:"all chats send",data});
}

// const user = await User.findAll({
//     include: [
//         {
//             model: Expense,
//             attributes: []
//         }
//     ],
//     attributes: ['name', [sequelize.fn('sum', sequelize.col(`expenses.expenseInput`)), 'totalcost']],
//     group: ['id'],
//     order: [['totalcost', 'DESC']]
// });