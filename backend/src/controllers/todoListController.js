const controllers = {}
var sequelize = require('../model/database');
var TodoList = require('../model/TodoList');

sequelize.sync()
controllers.get = async (req,res) => {
  const { id } = req.params;
  const data = await TodoList.findAll({
      where: { id: id }
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({ success: true, data: data });
}
sequelize.sync()

controllers.list = async (req, res) => {

  const data = await TodoList.findAll()
  .then(function(data){
    return data;
  })
  .catch(error => {
    return error;
  }); 

  res.json({success : true, data : data});

}

controllers.create =async (req,res) => {
  const {todoItem}= req.body;
  const data= await TodoList.create({
    todoItem:todoItem
  })
  .then(function(data){
    return data;
  })
  .catch(error=>{
    console.log(error);
    return error;
  })

  res.status(200).json({
    success:true,
    message: "item created",
    data: data
  });
}

controllers.update = async (req,res) => {
  // parameter get id
  const { id } = req.params;
  // parameter POST
  const {todoItem} = req.body;
  // Update data
  const data = await TodoList.update({
    todoItem:todoItem
  },
  {
    where: { id: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"Updated successful"});
}
controllers.delete = async (req, res) => {
  // parameter post
  const { id } = req.body;
  // delete sequelize
  const del = await TodoList.destroy({
    where: { id: id}
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
}

/* controllers.testdata = async ( req, res) => {
  
  const response = await sequelize.sync().then(function() {

    // create todolist
TodoList.create({
     todoItem: 'practice react and nodejs'
 });
     const data =  TodoList.findAll()
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json({success : response});

}

controllers.list = async ( req, res) => {

    const data = await TodoList.findAll();
    res.json(data)

}
controllers.test = (req,res) => {

  const data = {
   todoItem: "Learn react-js"
  }

  console.log("Send data from controller todoList");
  res.json(data);

};
 */
module.exports = controllers;