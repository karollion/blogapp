import styles from './Post.module.scss'
import { useState } from 'react';
import { getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { removePost } from '../../../redux/postsRedux';

const Post = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  postId  = useParams();
  const postData = useSelector(state => getPostById(state, postId.id));
  if(!postData) return <Navigate to="/" />

  const deletePost = e => {
    e.preventDefault();
    dispatch(removePost(postId.id));
    handleClose();
    return <Navigate to="/" />
};

    return (
      <div>
        <Row className='justify-content-center'>
          <Col xs='12' md='8' lg='8' className='mb-4 '>
            <div className='d-flex justify-content-between mt-4 mb-4'>
              <h2>{ postData.title}</h2>
              <div >
                <Button className='mx-2' variant="outline-info" as={Link} to={"/post/edit/" + postData.id}>Edit</Button>
                <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
              </div>
            </div>
            <p><span className='fw-bold'>Author: </span>{postData.author}</p>
            <p><span className='fw-bold'>Published: </span>{postData.publishedDate}</p>
            <p>{postData.content}</p>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation completly remove this post from the app. Are you sure to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deletePost}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
};

export default Post;