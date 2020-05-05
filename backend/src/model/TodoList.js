//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../model/database');
var tablename='todolist';
var TodoList = sequelize.define(tablename, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  todoItem: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = TodoList
