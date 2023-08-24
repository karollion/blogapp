import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({title, shortDescription, content, publishedDate, author}));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('/');
  };
 
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs='12' md='6' lg='6' >
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPublished">
            <Form.Label>Published</Form.Label>
            <Form.Control type="text" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formShort">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" placeholder="Live a coment here." rows={3} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" placeholder="Live a coment here." rows={5} value={content} onChange={e => setContent(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
      Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;