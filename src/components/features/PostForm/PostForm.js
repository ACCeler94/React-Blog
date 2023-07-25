import { nanoid } from "nanoid";
import { useState } from "react";
import PropTypes from 'prop-types';

const PostForm = (props) => {


  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ id: nanoid(), title, author, publishedDate, shortDescription, content })
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
          <input type="date" id="published-date" name="published-date" placeholder="dd-mm-yyyy" className="form-control" required onChange={e => setPublishedDate(e.target.value)} value={publishedDate} />
          <br />
        </div>
        <label for="description" className="mb-1" >Short description</label><br />
        <textarea id="description" name="description" placeholder="Enter short description" className="form-control" required onChange={e => setShortDescription(e.target.value)} value={shortDescription}></textarea>
        <br />
        <label for="content" className="mb-1" >Main content</label><br />
        <textarea id="content" name="content" placeholder="Enter the main content of the post" className="form-control" style={{ height: "200px" }} required onChange={e => setContent(e.target.value)} value={content}></textarea>
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
  actionText: PropTypes.string
}

export default PostForm;