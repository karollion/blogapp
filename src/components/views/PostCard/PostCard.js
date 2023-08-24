import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card, Col } from 'react-bootstrap';

const PostCard = (props) => {
    return (
      <Col xs='12' md='6' lg='4' className='mb-4'>
        <Card className='p-3'>
          <h3>{props.title}</h3>
          <p><span className='fw-bold'>Author: </span>{props.author}</p>
          <p><span className='fw-bold'>Published: </span>{props.publishedDate}</p>
          <p>{props.shortDescription}</p>
          <Button variant="primary" as={Link} to={"/post/" + props.id}>Read more</Button>
        </Card>
      </Col>
    );
};

export default PostCard;