import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostList from "../../features/PostList/PostList";

const Home = () => {

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="">All posts</h2>
        <Link to="/post/add"><Button variant="outline-info" className="">Add post</Button></Link>
      </div>
      <PostList />
    </>
  )
}

export default Home;