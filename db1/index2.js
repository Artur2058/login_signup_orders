const Sequelize=require("sequelize");
const sequelize=new Sequelize("Sign_up", "root", "", {
    dialect:"mysql",
    host:"127.0.0.1",
    logging:false
});
const sign_up=require("./sign_up")(sequelize);
module.exports={
    sign_up:sign_up,
    sequelize:sequelize
}