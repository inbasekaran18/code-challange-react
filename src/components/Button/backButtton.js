import React, { memo } from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './button.css'
const BackButton = ({ path, label, ...rest }) => {
  const history = useHistory()
  const pathDetails = () => {
    history.push(path)
  }
  return (
    <div className="button-w">
      <Button {...rest} size="sm" onClick={pathDetails}>
        {label}
      </Button>
    </div>
  )
}

export default memo(BackButton)

BackButton.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}



