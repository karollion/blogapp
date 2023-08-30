import { getPostByCategory } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { useSelector} from 'react-redux';
import { Row } from 'react-bootstrap';
import PostCard from '../../views/PostCard/PostCard';

const Category = () => {
  const  {id}  = useParams();
  const postData = useSelector(state => getPostByCategory(state, id));
  
  if(!postData) 
    return <Row className='py-4'>
              <h2>Category: {id}</h2>
              <p>No posts in this category.</p>
            </Row>
  else return (
    <Row className='py-4'>
      <h2>Category: {id}</h2>
      {postData.map(post => (
        <PostCard key={post.id} {...post}  />
      ))}
    </Row>
  );
};

export default Category;