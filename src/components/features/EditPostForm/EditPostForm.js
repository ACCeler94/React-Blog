import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { editPost, getPostById } from "../../../redux/postsRedux";

const EditPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));

  const handleSubmit = changedPost => {
    dispatch(editPost(changedPost));
    navigate('/')
  }

  if (!post) return <Navigate to="/" />;

  return <PostForm
    actionText={'Save changes'}
    action={handleSubmit}
    id={id}
    title={post.title}
    author={post.author}
    publishedDate={post.publishedDate}
    shortDescription={post.shortDescription}
    content={post.content}
    category={post.category}
  />
}


export default EditPostForm;