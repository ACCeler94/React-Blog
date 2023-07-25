import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/')
  }

  return <PostForm
    actionText={'Add post'}
    action={handleSubmit}
  />
}


export default AddPostForm;