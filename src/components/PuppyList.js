import React, {PropTypes} from 'react'
import PuppyCard from './PuppyCard'
import Filters from './Filters'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AdoptButton from './AdoptButton'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};



const PuppyList = ({puppies, adoptPuppy}) => {
  // Generate the puppy card for each puppy
  const puppyList = puppies.map(({id, name, breed, avatar, available}) => (
    <GridTile>
        <Card>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"
            />
            <CardMedia
              overlay={<CardTitle title={name} subtitle={breed} />}
            >
              <img src={avatar} />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
                <AdoptButton onAdoptClick={() => adoptPuppy(id)} available={available}/>
            </CardActions>
      </Card>

    </GridTile>
  ))
  const noPuppies = (
    <p className="text-muted">Oops no puppies...</p>
  )

  // Using Bootstrap 4 card layout
  return (
    <div className="PuppyList">
      <h1>Our Puppies</h1>
      <Filters />
      <div style={styles.root}>
          <GridList style={styles.gridList} cellHeight={880}>
            {puppies.length > 0 ? puppyList : noPuppies}
          </GridList>
      </div>
    </div>
  )
}

PuppyList.propTypes = {
  puppies: PropTypes.array.isRequired,
  adoptPuppy: PropTypes.func.isRequired,
}

export default PuppyList
