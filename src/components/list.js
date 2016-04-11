import _ from 'lodash';
import React from 'react';
import ListHeader from './list-header';
import ListItem from './list-item';

export default class List extends React.Component{
  renderItems(){
    //remove some of the things we don't want
    const props = _.omit(this.props, 'todos');
    //console.log(_.map(this.props.todos, (todo,index) => <ListItem key={index} {...todo}/>));
    // the ...{} function is the same as passing multiple arguments ex: task = {todo.task} isCompleted={todo.isCompleted}
    return (_.map(this.props.todos, (todo,index) => <ListItem key={index} {...todo} {...props}/>));
}
  render(){
          console.log(this.props);
    return (
      <table>
        <ListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
