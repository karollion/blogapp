import AddPostForm from "../../features/AddPostForm/AddPostForm";
import { Row, Col } from "react-bootstrap";

const PostAdd = () => {
    return (
      <Row className='justify-content-center'>
        <Col xs='12' md='8' lg='8' className='mb-4 '>
          <h2>Add post</h2>
          <AddPostForm />
        </Col>
      </Row>
    );
};

export default PostAdd;