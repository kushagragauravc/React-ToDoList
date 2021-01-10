import React from 'react'
import logo from './todolist.png'
import Test from './Test'
import './App.css' 

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(val){
    this.setState({
      newItem:val
    });
  }

  addItem(todoValue){
    if(todoValue!==""){
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      }
      const list = [...this.state.list];
      list.push(newItem)
      this.setState({
        list:list, 
        newItem:""
      })
      console.log(this.state);
      
    }
  }


  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id != id)
    this.setState({list:updateList})
  }




  render(){
    return(
      <div>
        <img src={logo} width={100} height={100} className="logo"/>
        <h1 className="app-title">React ToDo List </h1>
        <div className="container">
          Add an Item..
          <input 
          type="text"  
          className="input-text"
          placeholder="Enter your task"
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          />
          <button
          className="add-btn"
          onClick = {()=> this.addItem(this.state.newItem)}
          >
            Add Item
          </button>
          <div className="list">
            <ul> 
              {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                    <input type="checkbox" name="" id="" disabled/>
                    {item.value}
                    <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                  </li>
                )
              })}
              <li><input type="checkbox" name="" id="" checked/>
              Learn JS 
              <button className="btn">Delete</button>

              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}
