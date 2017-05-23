import React, { PropTypes } from "react";
import Button from "./elements/Button";
import RaisedButton from "material-ui/RaisedButton";

const AdoptButton = ({ available, onAdoptClick }) => {
  if (!available) {
    return <p className="text-muted">Adopted!</p>;
  }

  return (
    <RaisedButton onClick={onAdoptClick} label={"Adopt Me!"} primary={true} />
  );
};

AdoptButton.propTypes = {
  available: PropTypes.bool.isRequired,
  onAdoptClick: PropTypes.func.isRequired
};

export default AdoptButton;
