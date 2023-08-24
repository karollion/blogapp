import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import PostCard from '../../views/PostCard/PostCard';
import { Row } from 'react-bootstrap';

const AllPosts = () => {
  const posts = useSelector(getAllPosts);
    return (
      <Row className='py-4'>
        {posts.map(post => (
          <PostCard key={post.id} {...post}  />
        ))}
      </Row>
    );
};

export default AllPosts;