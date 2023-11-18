import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Userpage/Homepage/HomePage';
import DefaultLayout from '../layouts/DefaultLayout';
import AboutPage from '../pages/Userpage/AboutPage/AboutPage';
import ContactPage from '../pages/Userpage/ContactPage/ContactPage';
import AdminLayout from '../layouts/Adminlayout';
import Dashboard from '../pages/AdminPages/Dashboard';
import NotFoundPage from '../pages/Userpage/NotFoundPage/NotFoundPage';
import AddCategory from '../pages/AdminPages/Category/AddCategory';
import AddProduct from '../pages/AdminPages/Product/AddProduct';
import SignUpPage from '../pages/Userpage/SignUpPage/SignUpPage';
import LoginPage from '../pages/Userpage/LoginPage/LoginPage';
import UpdateCategory from '../pages/AdminPages/Category/UpdateCategory';
import CategoryAdmin from '../pages/AdminPages/Category/CategoryAdmin';
import ProductAdmin from '../pages/AdminPages/Product/ProductAdmin';
import UpdateProduct from '../pages/AdminPages/Product/UpdateProduct';
import ProductDetailPage from '../pages/Userpage/ProductDetailPage/ProductDetailPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <DefaultLayout />,
      children: [
         {
            path: '/',
            element: <HomePage />   
         },
         {
            path: '/about',
            element: <AboutPage />
         },
         {
            path: '/contact',
            element: <ContactPage />
         },
         {
            path: '/login',
            element: <LoginPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/signup',
            element: <SignUpPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'detail/:id',
            element: <ProductDetailPage/>,
            errorElement: <NotFoundPage />
         },
        
      ]
   },
   {
      path: '*',
      element: <NotFoundPage />,
      errorElement: <NotFoundPage />
   },
   {
      path: '/admin',
      element: <AdminLayout/>,
      errorElement: <NotFoundPage />,
      children: [
         {
            path: 'dashboard',
            element: <Dashboard />,
         },
         {
            path: 'productadmin',
            element: <ProductAdmin/>,
            errorElement: <NotFoundPage />
         },
         {
            path: 'addproduct',
            element: <AddProduct/>,
            errorElement: <NotFoundPage />
         },
         {
            path: 'updateproduct/:id',
            element: <UpdateProduct/>,
            errorElement: <NotFoundPage />
         },
         {
            path: 'categoryadmin',
            element: <CategoryAdmin/>,
            errorElement: <NotFoundPage />
         },
         {
            path: 'addcategory',
            element: <AddCategory/>,
            errorElement: <NotFoundPage />
         },
         {
            path: 'updatecategory/:id',
            element: <UpdateCategory/>,
            errorElement: <NotFoundPage />
         },
      ]
      }

]);

export default router;
