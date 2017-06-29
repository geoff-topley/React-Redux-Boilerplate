
// action creator
export const selectUser = (user)=> {

  return{
    // action
    type: 'USER_SELECTED',
    payload: user
  }
}
