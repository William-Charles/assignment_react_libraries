import React, {PropTypes} from 'react'
import Button from './elements/Button'

const AdoptButton = ({available, onAdoptClick}) => {
  if (!available) {
    return <p className="text-muted">Adopted!</p>
  }

  return (
    <Button onClick={onAdoptClick} color="success">
      Adopt Me!
    </Button>
  )
}

AdoptButton.propTypes = {
  available: PropTypes.bool.isRequired,
  onAdoptClick: PropTypes.func.isRequired,
}

export default AdoptButton
