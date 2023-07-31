import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Link } from "react-router-dom";


const CategoryList = () => {

  const categories = useSelector(getAllCategories);

  return (
    <>
      <div className="post_wrapper mx-auto" style={{ width: '50%' }}>
        <div className="d-flex justify-content-between">
          <h2 className="">All categories</h2>
        </div>
        <div className="categories-list d-flex flex-column mt-4">
          {categories.map(category => {
            return (
              <div key={category.name} className="category-box mt-1 p-3 border border-secondary-subtle rounded">
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