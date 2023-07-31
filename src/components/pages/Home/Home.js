import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostList from "../../features/PostList/PostList";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";

const Home = () => {
  const Allposts = useSelector(getAllPosts);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="">All posts</h2>
        <Link to="/post/add"><Button variant="outline-info" className="">Add post</Button></Link>
      </div>
      <PostList posts={Allposts} />
    </>
  )
}

export default Home;