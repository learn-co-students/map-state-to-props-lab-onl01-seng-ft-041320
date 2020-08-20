import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {


userInfo = () => {
  this.props.users.map( user => (
    <li>
      <h2>{user.username}</h2>
      <h3>{user.hometown}</h3>
    </li>
  ))
}
  render() {
    return (
      <div>
        <h2>Total # of Users: {this.props.usersAdded}</h2>
        <ul>
          Users!
          {this.props.users.map( user => (
            <li>
              <h2>{user.username}</h2>
              <h3>{user.hometown}</h3>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return { users: state.users, usersAdded: state.users.length }
}

export default connect(mapStateToProps)(Users);
