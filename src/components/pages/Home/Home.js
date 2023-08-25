import AllPosts from '../../features/AllPosts/AllPosts';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div >
        <div className='d-flex justify-content-between mt-4 mb-4'>
          <h2>All posts</h2>
          <Button variant="outline-info" as={Link} to="/post/add">Add post</Button>
        </div>
        <AllPosts />
      </div>
    );
};

export default Home;