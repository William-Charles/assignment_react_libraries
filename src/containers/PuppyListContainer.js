import {connect} from 'react-redux'
import PuppyList from '../components/PuppyList'
import {adoptPuppy} from '../actions'

// Helper function to return correct set of puppies
const getVisiblePuppies = (puppies, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return puppies
    case 'SHOW_AVAILABLE':
      return puppies.filter(puppy => puppy.available)
    case 'SHOW_ADOPTED':
      return puppies.filter(puppy => !puppy.available)
    default:
      return puppies
  }
}

// Add puppies prop mapped from state.puppies
const mapStateToProps = (state) => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    puppies: getVisiblePuppies(state.puppies, state.puppyFilters)
  }
}

// Add the adopt puppy dispatch action to props
const mapDispatchToProps = (dispatch) => {
  return {
    adoptPuppy: (id) => {
      dispatch(adoptPuppy(id))
    }
  }
}

// Generate the puppy list container which renders
// PuppyList with all the new props
const PuppyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PuppyList)

export default PuppyListContainer
