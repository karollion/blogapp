import styles from './Post.module.scss'
import { getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { removePost } from '../../../redux/postsRedux';

const Post = () => {
  const dispatch = useDispatch();

  const  postId  = useParams();
  const postData = useSelector(state => getPostById(state, postId.id));
  if(!postData) return <Navigate to="/" />

  const deletePost = e => {
    e.preventDefault();
    dispatch(removePost(postId.id));
};

    return (
      <Row className='justify-content-center'>
        <Col xs='12' md='8' lg='8' className='mb-4 '>
          <div className='d-flex justify-content-between mt-4 mb-4'>
            <h2>{ postData.title}</h2>
            <div >
              <Button className='mx-2' variant="outline-info" as={Link} to={"/post/edit/" + postData.id}>Edit</Button>
              <Button variant="outline-danger" onClick={deletePost}>Delete</Button>
            </div>
          </div>
          <p><span className='fw-bold'>Author: </span>{postData.author}</p>
          <p><span className='fw-bold'>Published: </span>{postData.publishedDate}</p>
          <p>{postData.content}</p>
        </Col>
      </Row>
    );
};

export default Post;