import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const CategoryList = () => {

  const categories = useSelector(getAllCategories)

  return (
    <>
      <div className="post_wrapper mx-auto" style={{ width: '50%' }}>
        <div className="d-flex justify-content-between">
          <h2 className="">All categories</h2>
        </div>

        <div className="categories-list d-flex flex-column">
          {categories.map(category => {
            return (
              <div className="category-box ">
                <Link to={`/categories/${category.name}`}>{category.name}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CategoryList;