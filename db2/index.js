const Sequelize=require("sequelize");
const sequelize=new Sequelize("Login", "root", "", {
    dialect:"mysql",
    host:"127.0.0.1",
    logging:false
});
const login_page=require("./login_page")(sequelize);
module.exports={
    login_page:login_page,
    sequelize:sequelize
}