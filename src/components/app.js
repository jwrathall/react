import React from 'react';
import CreateItem from './create-item'
import List from './list';


const todos = [
  {
    task:'make react tutorial',
    isCompleted: false
  },
  {
    task:'eat dinner',
    isCompleted:true
  }
];

export default class App extends React.Component{
  //to rerender when props change
  //creates the state of the app
  constructor(props){
      super(props);//connects to parent it inherits from
      this.state = {
        todos
      }
  }
  render(){
    //matching the method names are really important createItem
    //since it comes from
    return (
      <div>
        <h1>App title</h1>
        <CreateItem createNewItem = {this.createNewItem.bind(this)} todos={this.state.todos}/>
        <List
          todos={this.state.todos}
          toggleItem = {this.toggleItem.bind(this)}
          saveItem = {this.saveItem.bind(this)}
          deleteItem = {this.deleteItem.bind(this)}
          />
      </div>
    )
  }

//these functions are passed into the child components

  toggleItem(task){
      //toggle the state of the todo, tied into the isCompleted variable/property
      const foundItem = _.find(this.state.todos, todo => todo.task === task);
      foundItem.isCompleted = !foundItem.isCompleted;
      this.setState({todos:this.state.todos});
  }
  createNewItem(task){
    console.log(task);
    this.state.todos.push({
      task,
      isCompleted: false
    });
    //this rerenders the page, the line below
    this.setState ({ todos: this.state.todos});
  }
  saveItem(oldItem, newItem){
    const foundItem = _.find(this.state.todos, todo => todo.task === oldItem);
    foundItem.task = newItem;
    this.setState({todos:this.state.todos});
  }
  deleteItem(item){
    _.remove(this.state.todos, todo => todo.task === item);
    this.setState({todos:this.state.todos});
  }
}
