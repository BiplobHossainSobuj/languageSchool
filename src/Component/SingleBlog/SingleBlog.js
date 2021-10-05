import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBlog = (props) => {
    console.log(props.blog)
    const{key,name,body} = props.blog;
    return (
        <Card  className= "m-5">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {body}
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {key} mins ago</small>
            </Card.Footer>
        </Card>
    );
};

export default SingleBlog;