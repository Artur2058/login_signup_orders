const Sequelize=require("sequelize");
module.exports=function(sequelize){
     return sequelize.define("login_page", {
    id:{
        type:Sequelize.INTEGER(11),
        primaryKey:true
    },
    Email:{
        type:Sequelize.STRING(20),
    },
    Password:{
        type:Sequelize.STRING(20),
    }  
},
{
timestamps:false,
tableName:"login_page"
});
}
