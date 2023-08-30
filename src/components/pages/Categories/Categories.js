import { Row, Col, Button, ListGroup } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(getAllCategories);

    return (
      <div>
        <Row className='justify-content-center'>
          <Col xs='12' md='8' lg='8' className='mb-4 '>
            <div className='d-flex justify-content-between mt-4 mb-4'>
              <h2>All categories</h2>
              <div >
                <Button className='mx-2' variant="outline-info" as={Link} to={"/category/add"}>Add category</Button>
              </div>
            </div>
            <ListGroup>
              {categories.map((cat, index) => (
                <ListGroup.Item key={index} value={cat}>
                  <Link to={"/category/" + cat}>{cat}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
};

export default Categories;