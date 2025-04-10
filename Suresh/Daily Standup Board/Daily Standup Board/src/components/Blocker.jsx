import React from 'react'

const Blocker = (props) => {
  return (
    <div>
      <p>Blockers: {props.isBlocked ? "Blocked" : "All Clear"}</p>
    </div>
  )
}

export default Blocker
