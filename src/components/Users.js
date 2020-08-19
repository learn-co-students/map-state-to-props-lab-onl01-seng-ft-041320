import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li key={user.username}>{user.username}</li>)}
        </ul>
        <p>Number of Users: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps (state) {
  return { users: state.users, userCount: state.users.length };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
