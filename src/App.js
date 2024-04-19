import { Suspense, lazy } from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Layout from "./components/layout";


const HomePage = lazy(() => import("./pages/home/homePage")) ;
const ProductPage =  lazy(()=> import("./pages/products/ProductPage")) ;
const AboutPage = lazy(() => import("./pages/aboutPage")) ;
const BlogPage = lazy(() => import("./pages/blogPage")) ;
const ContactPage = lazy(() => import("./pages/contactPage")) ;
const NotFoundPage = lazy(() => import("./pages/not-found/notFoundPage")) ;

function App() {
  return (
    <Suspense>
      <BrowserRouter>
           <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/:productId" element={<ProductPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="blog" element={<BlogPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
              </Route>
              <Route path="*" element={<NotFoundPage/>}/>
           </Routes>
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
