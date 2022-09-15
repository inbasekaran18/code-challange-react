import React, {memo} from 'react'
import {Progress} from 'reactstrap'
import './progressBar.css'
const ProgressBar = () => {
  return (
    <div className="ProgressCenter">
      <Progress
        animated
        className="progress-w"
        color="dark"
        striped
        value={100}
      />
    </div>
  )
}

export default memo(ProgressBar)