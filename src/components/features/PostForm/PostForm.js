import { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";

const PostForm = (props) => {


  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [selectedCategory, setSelectedCategory] = useState(props.category || '')
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const categories = useSelector(getAllCategories);

  const id = props.id || nanoid();
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    // only fields that were not checked by validate() are checked here
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate && selectedCategory) {
      props.action({ title, author, publishedDate, shortDescription, content, id, category: selectedCategory });
    }
  };


  return (
    <div className="post_add">
      <form onSubmit={validate(handleSubmit)}>
        <div className="form-group short-inputs col-lg-6">
          <label for="title" className="mb-1"  >Title</label><br />
          <input {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" placeholder="Enter title"
            className="form-control"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}

          <label for="author" className="mb-1" >Author</label><br />
          <input {...register("author", { required: true, minLength: 3 })}
            value={author}
            onChange={e => setAuthor(e.target.value)}
            type="text" placeholder="Enter author"
            className="form-control" />
          {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
          <br />
          <label for="published-date" className="mb-1" >Published</label><br />
          <DatePicker id="published-date" name="published-date" required onChange={date => setPublishedDate(date)} selected={publishedDate} />
          {dateError && <small className="d-block form-text text-danger mt-2">Date is required</small>}
          <br />
          <label for="category" className="mb-1">Category</label><br />
          <select name="category" id="category" required onChange={e => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value={''}>Select category...</option>
            {categories.map(category => <option value={category.name} key={category.name}  >{category.name}</option>)}
          </select>
          <br />
          {!selectedCategory ? <small className="d-block form-text text-danger mt-2">Category must be selected</small> : ''}
        </div>
        <label for="description" className="mb-1" >Short description</label><br />
        <textarea {...register("description", { required: true, minLength: 20 })}
          id="description" name="description" placeholder="Enter short description" className="form-control" required onChange={e => setShortDescription(e.target.value)} value={shortDescription}></textarea>
        {errors.description && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20)</small>}
        <br />
        <label for="content" className="mb-1" >Main content</label><br />
        <ReactQuill id="content" name="content" placeholder="Enter the main content of the post" required onChange={setContent} value={content} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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
  publishedDate: PropTypes.object,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
  actionText: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string
}

export default PostForm;