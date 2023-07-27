import { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const PostForm = (props) => {


  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const id = props.id || nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title, author, publishedDate, shortDescription, content, id })
  }


  return (
    <div className="post_add">
      <form onSubmit={handleSubmit}>
        <div className="form-group short-inputs col-lg-6">
          <label for="title" className="mb-1"  >Title</label><br />
          <input type="text" id="title" name="title" placeholder="Enter title" className="form-control" required onChange={e => setTitle(e.target.value)} value={title} />
          <br />
          <label for="author" className="mb-1" >Author</label><br />
          <input type="name" id="author" name="author" placeholder="Enter author" className="form-control" required onChange={e => setAuthor(e.target.value)} value={author} />
          <br />
          <label for="published-date" className="mb-1" >Published</label><br />
          <input type="text" id="published-date" name="published-date" placeholder="dd-mm-yyyy" className="form-control" required onChange={e => setPublishedDate(e.target.value)} value={publishedDate} />
          <br />
        </div>
        <label for="description" className="mb-1" >Short description</label><br />
        <textarea id="description" name="description" placeholder="Enter short description" className="form-control" required onChange={e => setShortDescription(e.target.value)} value={shortDescription}></textarea>
        <br />
        <label for="content" className="mb-1" >Main content</label><br />
        <ReactQuill id="content" name="content" placeholder="Enter the main content of the post" required onChange={setContent} value={content} />
        <br />
        <button type="submit" className="btn btn-primary">{props.actionText}</button>
      </form>
    </div>
  )
}

PostForm.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
  actionText: PropTypes.string,
  id: PropTypes.string
}

export default PostForm;