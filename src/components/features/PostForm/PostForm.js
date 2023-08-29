import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';
import { useForm } from "react-hook-form";
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

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };
 
  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row>
        <Col xs='12' md='6' lg='6' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" placeholder="Enter title"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control 
              {...register("author", { required: true, minLength: 3 })}
              type="text" placeholder="Enter author" 
              value={author} 
              onChange={e => setAuthor(e.target.value)} />
              {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPublished">
            <Form.Label>Published</Form.Label>
            <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} placeholder="Enter date" value={publishedDate}/>
            {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formShort">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register("description", { required: true, minLength: 20 })}
          as="textarea" placeholder="Live a coment here." rows={3} 
          value={shortDescription} 
          onChange={e => setShortDescription(e.target.value)} />
          {errors.description && <small className="d-block form-text text-danger mt-2">Title is too short (min is 20)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" id="main-content" as="textarea" value={content} onChange={setContent} placeholder="Live a coment here." />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>
      <Button variant="primary" type="submit">
      {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;