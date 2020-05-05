import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
const baseUrl = "http://localhost:3000"
class AddComponent extends React.Component{

constructor(props){
    super(props);
    this.state = {
      todoItem:""
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
 render(){
   //let userId = this.props.match.params.employeeId;
   return (
     <form>
       <div className="form-row justify-content-center">
         <div className="form-group col-md-6">
           <label for="todoItem"> Task</label>
           <input type="text" class="form-control"  placeholder="TodoItem"
           value={this.state.todoItem} onChange={(value)=> this.setState({todoItem:value.target.value})}/>
         </div>
      </div>
      <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
     </form>
   );
 }

 sendSave(){

   if (this.state.todoItem==="") {
      alert("Task should not be empty")
   }
   else {

     const baseUrl = "http://localhost:3000/todoList/create"
     const datapost = {
       todoItem : this.state.todoItem
     }
     axios.post(baseUrl,datapost)
     .then(response=>{
       if (response.data.success===true) {
         alert(response.data.message)
         this.loadTodoList()
       }
       else {
         alert(response.data.message)
       }
     }).catch(error=>{
       alert("Error 34 "+error)
     })

   }

 }
}


export default AddComponent;