import React, { memo } from 'react'
import { Button } from 'reactstrap'
import { PropTypes } from 'prop-types'
import './button.css'
const ButtonComponent = ({ data, id=0 }) => {
  const { label, action,color } = data
  return (
    <div className="button-w">
      <Button color={color} size="sm" onClick={() => action(id)}>
        {label}
      </Button>
    </div>
  )
}

export default memo(ButtonComponent)

ButtonComponent.propTypes = {
  data: PropTypes.shape({
      action: PropTypes.func,
      label: PropTypes.string,
      color: PropTypes.string
    }).isRequired,
  id: PropTypes.number
}

