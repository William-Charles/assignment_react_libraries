import React, { PropTypes } from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const AddPuppy = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Add A Puppy
      {" "}
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <TextField
      floatingLabelText="Floating Label Text"
      name="name"
      hintText="Name"
    />
    <br />
    <br />
    <TextField name="breed" hintText="Breed" /><br />
    <br />
    <TextField name="url" hintText="Image Url" /><br />
    <br />
    <RaisedButton type="submit" label={"Submit"} primary={true} />

  </form>
);

AddPuppy.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddPuppy;
