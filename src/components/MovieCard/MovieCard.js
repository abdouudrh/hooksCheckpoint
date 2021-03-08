import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types'
import Rate from './Rate'

const MovieCard = ({movie : {title,posterUrl,description, rate}}) => {
  return (
    <div >
      <Card style ={{width :"300px",height:"700px",marginTop:"10px", marginRight:"30px"}} >
        <CardTitle tag="h5"> {title} </CardTitle>
        <CardImg top   src={posterUrl} alt="Card image cap" />
        <CardBody>
          <CardText> {description} </CardText>
          <div className ="row">
              <Rate rating ={rate}>

              </Rate>       
          </div>
        </CardBody>
      </Card>


    </div>
  );
};
MovieCard.propTypes ={
    movie : PropTypes.object.isRequired
}

export default MovieCard ;