import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
            {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <p>{this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
