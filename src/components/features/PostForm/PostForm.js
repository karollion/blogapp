import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
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
            <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} placeholder="Enter date" value={publishedDate}/>
            
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formShort">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" placeholder="Live a coment here." rows={3} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" id="main-content" as="textarea" value={content} onChange={setContent} placeholder="Live a coment here." />;
      </Form.Group>
      <Button variant="primary" type="submit">
      {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;