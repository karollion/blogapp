import { editPost } from "../../../redux/postsRedux";
import { useNavigate, Navigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const EditPostForm = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  {id}  = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const handleSubmit = post => {
    dispatch(editPost({...post, id}));
    navigate('/');
  };
  if (!postData) return <Navigate to="/" />;
  return (
    <PostForm 
      action={handleSubmit} 
      actionText='Edit post' 
      title={postData.title}
      shortDescription={postData.shortDescription}
      content={postData.content}
      publishedDate={postData.publishedDate}
      author={postData.author}
    />
  );
};

export default EditPostForm;