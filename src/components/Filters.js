import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'

const Filters = () => (
  <div className="Filters">
    <FilterLinkContainer filter="SHOW_ALL">
      Show all
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter="SHOW_AVAILABLE">
      Show available
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter="SHOW_ADOPTED">
      Show adopted
    </FilterLinkContainer>
  </div>
)

export default Filters
