const Sequelize=require("sequelize");
module.exports=function(sequelize){
     return sequelize.define("sign_up", {
    id:{
        type:Sequelize.INTEGER(11),
        primaryKey:true
    },
    Name:{
        type:Sequelize.STRING(20),
    },
    Surname:{
        type:Sequelize.STRING(20),
    },
    Email:{
        type:Sequelize.STRING(20),
    },
    Password:{
        type:Sequelize.TEXT,
    }  
},
{
timestamps:false,
tableName:"sign_up"
});
}
