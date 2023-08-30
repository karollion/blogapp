import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { addCategory } from "../../../redux/categoriesRedux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const PostAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState('');
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    dispatch(addCategory( categoryName ));
    navigate('/');
  };

  return (
    <Row className='justify-content-center'>
      <Col xs='12' md='8' lg='8' className='mb-4 '>
        <h2>Add category</h2>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Category name</Form.Label>
          <Form.Control
            {...register("categoryName", { required: true, minLength: 3 })}
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
            type="text" placeholder="Enter category"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">Name is too short (min is 3)</small>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default PostAdd;