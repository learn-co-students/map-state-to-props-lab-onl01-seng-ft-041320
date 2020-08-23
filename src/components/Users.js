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
        <h2>Total # of Users: {this.props.users.length}</h2>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);