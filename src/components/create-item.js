
import React from 'react';


export default class CreateItem extends React.Component{
  constructor (props){
    super(props);

    this.state ={
      error:null
    };
  }
  renderError(){
    if(!this.state.error){return null;}
    return <div style={{color:'red'}}>{this.state.error}</div>
  }
  render(){
        return(
          <form onSubmit={this.handleCreate.bind(this)}>
          <input type="text" placeholder="Add new item" ref="create"/>
          <button>Create</button>
          {this.renderError()}
          </form>
        );
  }
  handleCreate(event){
    event.preventDefault();

    const createInput = this.refs.create;
    const item = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput){
      this.setState({error: validateInput});

    }
    this.setState({error:null});
    this.props.createNewItem(task);
    this.refs.create.value='';
  }

  validateInput(item){
    if(!item){
      return 'Enter an item';
    }else if(_.find(this.props.todos, todo => task.todo === item)){
      return 'Please enter unique item';
    }else{
      return null;
    }
  }
}
