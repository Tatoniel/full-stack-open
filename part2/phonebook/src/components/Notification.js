import React from 'react'

const Notification = ({alertMessage, alert}) => {
    if(alertMessage === null){return null}

  return (
    <div className={alert}>
        {alertMessage}
    </div>
  )
}

export default Notification
