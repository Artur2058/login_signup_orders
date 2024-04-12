const Sequelize=require("sequelize");
const sequelize=new Sequelize("Orders", "root", "", {
    dialect:"mysql",
    host:"127.0.0.1",
    logging:false
});
const orders=require("./orders")(sequelize);
module.exports={
    orders:orders,
    sequelize:sequelize
}