import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostList = () => {
  const posts = useSelector(getAllPosts);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-2 mt-3">
      {posts.map(post => {
        return (
          <div key={post.id} className="col">
            <div className="p-3 border border-secondary-subtle rounded">
              <h4>{post.title}</h4>
              <p>
                <strong>Author:</strong> {post.author}
                <br />
                <strong>Published:</strong> {post.publishedDate}
              </p>
              <p>{post.shortDescription}</p>
              <Link to={`/post/${post.id}`} ><Button className="primary">Read More</Button></Link>
            </div>
          </div>
        )
      })}
    </div >
  )
};

export default PostList;