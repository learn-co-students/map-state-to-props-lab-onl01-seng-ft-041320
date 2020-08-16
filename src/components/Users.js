import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        Users!
        <ul>
          {users}
        </ul>
        Number of Users
        <p>{this.props.numberOfUsers}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, numberOfUsers: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
