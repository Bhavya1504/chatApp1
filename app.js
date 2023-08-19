const express = require('express');
const path = require('path');
require('dotenv').config();

const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const messageRoutes = require('./routes/messageRoutes');
const sequelize = require('./utils/database');
const cors = require('cors');
const Message = require('./models/messageModel');
const User = require('./models/userModel');
const app=express();
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

app.use('/signup',signupRoutes)
app.use('/login',loginRoutes)
app.use('/message',messageRoutes);

User.hasMany(Message,{foreignKey:'senderId'});
Message.belongsTo(User,{foreignKey:'senderId'})

sequelize.sync({force:false})
.then(res=>console.log(`database connected`))
.catch(err=>console.log(`error while database connection`));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
  });
app.listen(3000,()=>console.log(`listing on port 3000`));