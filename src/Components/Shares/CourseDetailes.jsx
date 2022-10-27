import React from 'react';
import Card from 'react-bootstrap/Card';

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
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default CourseDetailes;