import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions/actionIndex'

class UserList extends Component {

  createListItems() {
    return this.props.users.map((user, index) => {
      return(
        <li key={index} onClick={()=> this.props.selectUser(user)}>
          {user.first} {user.last}
        </li>
      )
    })
  }



  render() {
    return(
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

// CONTAINER
// map Store state to props that can be called in component
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

 // allows mapping of data to Store state
function mapDispatchToProps(dispatch) {
    // selectUser is set up as a prop
    return bindActionCreators ({selectUser: selectUser}, dispatch)
}


// connect the props to the component for use
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
