import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
const baseUrl = "http://localhost:3000"
class EditComponent extends React.Component{
     constructor(props){
    super(props);
    this.state = {
      listTodo:{},
      todoItem:""
     }
  }

  componentDidMount(){
    let itemId = this.props.match.params.Id;
    const url = baseUrl+"/todoList/get/"+itemId
    axios.get(url)
    .then(res=>{
        if(res.data.success){
        const data = res.data.data[0];
        console.log(data);
        this.setState({
          listTodo:data,
          todoItem:data.todoItem
        })
    }
    else {
        alert("error webservice")
    }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  }
 render(){
   return (
     <form>
       <div className="form-row justify-content-center">
         <div className="form-group col-md-12">
           <label for="todoItem">Task</label>
           <input type="text" class="form-control"  placeholder="todoItem"
           value={this.state.todoItem} onChange={(value)=> this.setState({todoItem:value.target.value})}/>
         </div>
      </div>
       <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Update</button>
     </form>
   );
 }
 sendUpdate(){
    //  get parameter id
    let Id = this.props.match.params.Id;
    // urlbackend
    const baseUrl = "http://localhost:3000/todoList/update/"+Id
    // parameters post
    const datapost = {
      todoItem : this.state.todoItem
    }

    axios.post(baseUrl,datapost)
    .then(response=>{
      if (response.data.success===true) {
        alert(response.data.message)
      }
      else {
        alert("Error")
      }
    }).catch(error=>{
      alert("Error 34 "+error)
    })

   }
}


export default EditComponent;;