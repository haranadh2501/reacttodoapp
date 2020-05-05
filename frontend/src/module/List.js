import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import axios from 'axios';
const baseUrl = "http://localhost:3000"
class listComponent extends React.Component  {

constructor(props){
      super(props);
      this.state = {
        listTodo:[]
      }
    }
componentDidMount(){
    this.loadTodoList()
}
loadTodoList(){
      const url=baseUrl+"/todoList/list"
      axios.get(url)
      .then(res => {
          if(res.data.success){
        const data = res.data.data;
        this.setState({ listTodo:data });
          }
          else {
              alert("error web service")
          }
      })
      .catch(error => {
        alert(error)
      });

    }

  render()
  {
    return (
      <table className="table table-hover table-striped">
        <thead className="thead-dark text-white">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">TodoItem</th>
           <th scope="col">Edit</th> 
           <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }
  loadFillData(){

    return this.state.listTodo.map((data)=>{
      return(
        <tr>
          <th>{data.id}</th>
          <td>{data.todoItem}</td>
          <td>
            <Link className="btn text-white bg-success "  to={"/edit/"+data.id} >Edit</Link>
          </td>
          <td>
           <button class="btn text-white bg-danger" onClick={()=>this.sendDelete(data.id)}> Delete </button>
          </td>
        </tr>
      )
    });
  }
  sendDelete(Id)
  {
    // url backend
    const baseUrl = "http://localhost:3000/todoList/delete"  // parameter data post
    // network
    axios.post(baseUrl,{
      id:Id
    })
    .then(response =>{
      if (response.data.success) {
       alert(response.data.message);
       this.loadTodoList()
      }
      else {
          alert("Error");
      }
    })
     .catch ( error => {
      alert("Error 325 ")
    })
  }
}

export default listComponent;