import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  
  render() {
    debugger;
    return (
      <div>
        <ul>
          Users!
          <br></br>
         {(!!this.props.users)
          ? this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
          : <li> "None yet"</li>}
  <br></br>
          {(this.props.users !== undefined) 
          ? <p>{this.props.users["length"]} </p>
          : <p>0</p> }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  debugger;
  return { users: state.users }
  
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
//1. Connect the Users component similar to how it is connected in UserInput.[x]
//use `connect` export default connect()(User); 
// Write a function in `Users.js`, but outside of the Users class, called [x]
//`mapStateToProps`. `mapStateToProps` accepts one argument, `state`, the [x]
//current version of your store's state.
//Your `mapStateToProps` function should return an object with keys. [x]
//Each key will become a prop in your component, allowing you to assign values
//based on the provided `state`.
//The Users component should display the username of a user submitted to the store[x]
//To pass the final test, it should also display a total count of current users [x]
//Try to use `mapStateToProps` to solve both, returning two keys, one for 
// `users` and one for the `userCount`.[x]