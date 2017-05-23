import React, {PropTypes} from 'react'
import Input from './elements/Input'
import InputGroup from './elements/InputGroup'
import Button from './elements/Button'

const AddPuppy = ({onSubmit}) => (
  <form className="container" onSubmit={onSubmit} >
    <h1>Add A Puppy <span className="glyphicon glyphicon-search" aria-hidden="true"></span></h1>
    <InputGroup name="name" labelText="Name">
      <Input name="name" />
    </InputGroup>
    <InputGroup name="breed" labelText="Breed">
      <Input name="breed" />
    </InputGroup>
    <InputGroup name="avatar" labelText="Photo Link">
      <Input name="avatar" />
    </InputGroup>
    <Button type="submit" color="primary">Save Puppy</Button>
  </form>
)

AddPuppy.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default AddPuppy
