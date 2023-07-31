import { useSelector } from "react-redux";
import PostList from "../../features/PostList/PostList";
import { useParams } from "react-router-dom";
import { getPostsByCategory } from "../../../redux/postsRedux";


const PostsByCategory = () => {
  const { category } = useParams();
  const postsByCat = useSelector(state => getPostsByCategory(state, category))

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="">Category: {category}</h2>
      </div>
      <PostList posts={postsByCat} />
    </>
  )
}

export default PostsByCategory;