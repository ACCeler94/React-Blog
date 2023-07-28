import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import { Button } from "react-bootstrap";
import React from "react";
import DeletePostModal from "../../features/DeletePostModal/DeletePostModal";
import { dateToStr } from "../../../utils/dateToStr";

const SinglePost = () => {

  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const [modalShow, setModalShow] = React.useState(false);
  const formattedDate = dateToStr(post.publishedDate)

  if (!post) return <Navigate to="/" />;

  return (
    <>
      <div className="post_wrapper mx-auto" style={{ width: '50%' }}>
        <div className="post_wrapper-header d-flex justify-content-between">
          <h2>{post.title}</h2>
          <div className="post_wrapper-button-container">
            <Link to={`/post/edit/${id}`}><Button variant="outline-info" className="m-1">Edit</Button></Link>
            <Button variant="outline-danger" className="m-1" onClick={() => setModalShow(true)} >Delete</Button>
          </div>
        </div>
        <div className="post_main-info">
          <p>
            <strong>Author:</strong> {post.author}
            <br />
            <strong>Published:</strong> {formattedDate}
          </p>
        </div>
        <div className="post_main-content">
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <DeletePostModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        postid={id}
      />
    </>
  )
}

export default SinglePost;