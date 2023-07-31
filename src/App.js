import { Route, Routes } from "react-router-dom";
import SinglePost from "./components/pages/SinglePost/SinglePost";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Home from "./components/pages/Home/Home";
import CategoryList from "./components/pages/CategoriesList/CategoriesList";
import PostsByCategory from "./components/pages/PostsByCategory/PostsByCategory";


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:category" element={<PostsByCategory />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
