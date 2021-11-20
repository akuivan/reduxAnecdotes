
import React from 'react'
// import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

//const Notification = () => {
  const Notification = (props) => {
  //const notification = useSelector(state => state.notification)
  const notification = props.notification

  console.log(notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification === null) {
    return (
      <div></div>
    )
  } else {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
//export default Notification