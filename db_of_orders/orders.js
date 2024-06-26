const Sequelize=require("sequelize");
module.exports=function(sequelize){
     return sequelize.define("orders", {
    userId:{
        type:Sequelize.STRING(255),
        primaryKey: true,
    },
    email:{
        type:Sequelize.STRING(50),
    },
    name:{
        type:Sequelize.STRING(20),
    },
    quantity:{
        type:Sequelize.INTEGER(11),
    },
    price:{
        type:Sequelize.INTEGER(11)
    },
},
{
timestamps:false,
tableName:"orders"
});
}