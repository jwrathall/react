import React from 'react';

export default class ListItem extends React.Component{
  constructor (props){
    super(props);

    this.state = {
      isEditing: false
    };
  }
  renderTaskSection(){
    //dynamic styles
    //ES6 now can use these as variables
    const{task, isCompleted} = this.props;
    const taskStyle = {
      color: isCompleted ? 'green':'red',
      cusrsor:'pointer'
    };
    if(this.state.isEditing){
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput"/>
          </form>
        </td>

      );
    }
    return(

      <td style={taskStyle}
        onClick={this.props.toggleItem.bind(this,task)}
        >
        {task}
      </td>
    );
  }
  renderActionSection(){
    if(this.state.isEditing){
      return(
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    return(
      //elements need to be wrapped by something
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteItem.bind(this, this.props.task)}>Delete</button>
      </td>
      //the deleteItem has the function passed directly to the onClick event
    );
  }
  render(){
    return (
        <tr>
          {this.renderTaskSection()}
          {this.renderActionSection()}
        </tr>
    );
  }
  onEditClick(){
    this.setState({isEditing:true});
  }
  onCancelClick(){
    this.setState({isEditing:false});
  }
  onSaveClick(event){
    event.preventDefault();
    const oldItem = this.props.task;
    const newItem = this.refs.editInput.value;
    this.props.saveItem(oldItem,newItem);
    this.setState({isEditing: false});

  }
}
