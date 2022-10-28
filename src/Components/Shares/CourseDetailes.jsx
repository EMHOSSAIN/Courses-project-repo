import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetailes = ({course}) => {
    const {title,image_url,details} = course

    return (
        <Card className="text-center mb-3">
       <Card.Title> <h2>{title}</h2> </Card.Title>
        <Card.Body>
        <Card.Img variant="top" src= {image_url} />
          <Card.Text>
           {details}
          </Card.Text>
        </Card.Body>
        <Link  to = '/prenium'> <Button style={{width:'100%'}}> Get Premium </Button> </Link> 
      </Card>
    );
};

export default CourseDetailes;