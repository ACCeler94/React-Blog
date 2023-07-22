const AddPostForm = () => {

  return (
    <div className="post_add">
      <form>
        <div className="form-group short-inputs col-lg-6">
          <label for="title"  >Title</label><br />
          <input type="text" id="title" name="title" placeholder="Enter title" className="form-control" required /><br />
          <label for="author" >Author</label><br />
          <input type="name" id="author" name="author" placeholder="Enter author" className="form-control" required /> <br />
          <label for="published-date" >Published</label><br />
          <input type="date" id="published-date" name="published-date" placeholder="dd-mm-yyyy" className="form-control" required /><br />
        </div>
        <label for="description" >Short description</label><br />
        <textarea id="description" name="description" placeholder="Enter short description" className="form-control" required ></textarea><br />
        <label for="content" >Main content</label><br />
        <textarea id="content" name="content" placeholder="Enter the main content of the post" className="form-control" style={{ height: "200px" }} required></textarea><br />
        <button type="submit" className="btn btn-primary">Add post</button>
      </form>
    </div>
  )
}


export default AddPostForm;