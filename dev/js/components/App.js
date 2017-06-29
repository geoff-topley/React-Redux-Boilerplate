import React from 'react'
import ReactDOM from 'react-dom'
import style from '../../scss/style.scss'
import '../../scss/style.scss';
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'

export default class App extends React.Component{
  render() {
    return(
      <div>
        <h2>User List:</h2>
        <UserList />
        <hr/>
        <UserDetail />

      </div>
    )
  }
}
