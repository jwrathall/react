import React from 'react';

export default class ListHeader extends React.Component{
  render(){
    return (
        <thead>
          <tr>
            <th>task</th>
            <th>actions</th>
          </tr>
        </thead>
    );
  }
}
