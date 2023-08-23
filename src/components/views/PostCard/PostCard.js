import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PostCard = (props) => {
    return (
      <div className='border border-secondary-subtle p-4 mb-4 rounded'>
        <h3>{props.title}</h3>
        <p><span className='fw-bold'>Author: </span>{props.author}</p>
        <p><span className='fw-bold'>Published: </span>{props.publishedDate}</p>
        <p>{props.shortDescription}</p>
        <Button variant="primary" as={Link} to={"/post/" + props.id}>Read more</Button>
      </div>
    );
};

export default PostCard;