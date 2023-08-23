import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import PostCard from '../../views/PostCard/PostCard';

const AllPosts = () => {
  const posts = useSelector(getAllPosts);
    return (
      <section className='d-flex justify-content-between  flex-wrap'>
        {posts.map(post => (
          <PostCard key={post.id} {...post}  />
        ))}
      </section>
    );
};

export default AllPosts;