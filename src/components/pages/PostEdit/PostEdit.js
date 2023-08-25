import { Row, Col } from "react-bootstrap";
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const PostEdit = () => {
  
    return (
      <Row className='justify-content-center'>
        <Col xs='12' md='8' lg='8' className='mb-4 '>
          <h2>Edit post</h2>
          <EditPostForm />
        </Col>
      </Row>
    );
};

export default PostEdit;