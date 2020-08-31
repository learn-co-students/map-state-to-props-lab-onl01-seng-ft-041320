import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
           <ul>
            {users}
          </ul>
          No. of Users:
        <p>{this.props.numberOfUsers}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, numberOfUsers: state.users.length };
};

export default connect(mapStateToProps)(Users)
