import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({
      id: nanoid(),
      title,
      author,
      publishedDate,
      shortDescription,
      content
    }));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('/')
  }

  return (
    <div className="post_add">
      <form onSubmit={handleSubmit}>
        <div className="form-group short-inputs col-lg-6">
          <label for="title" className="mb-1"  >Title</label><br />
          <input type="text" id="title" name="title" placeholder="Enter title" className="form-control" required onChange={e => setTitle(e.target.value)} />
          <br />
          <label for="author" className="mb-1" >Author</label><br />
          <input type="name" id="author" name="author" placeholder="Enter author" className="form-control" required onChange={e => setAuthor(e.target.value)} />
          <br />
          <label for="published-date" className="mb-1" >Published</label><br />
          <input type="date" id="published-date" name="published-date" placeholder="dd-mm-yyyy" className="form-control" required onChange={e => setPublishedDate(e.target.value)} />
          <br />
        </div>
        <label for="description" className="mb-1" >Short description</label><br />
        <textarea id="description" name="description" placeholder="Enter short description" className="form-control" required onChange={e => setShortDescription(e.target.value)}></textarea>
        <br />
        <label for="content" className="mb-1" >Main content</label><br />
        <textarea id="content" name="content" placeholder="Enter the main content of the post" className="form-control" style={{ height: "200px" }} required onChange={e => setContent(e.target.value)}></textarea>
        <br />
        <button type="submit" className="btn btn-primary">Add post</button>
      </form>
    </div>
  )
}


export default AddPostForm;