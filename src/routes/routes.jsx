import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../components/products/Products";
import Services from "../pages/Services";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../components/products/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>, 
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`),
      },
      {
        path: "/aboutus",
        element: <About />
      },
      {
        path: "/products",
        element: <Products />
        
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/registration",
        element: <Registration/>
      }
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path: "all-products",
        element: <PrivateRoute><AllProducts/></PrivateRoute>
      },
      {
        path: "add-product",
        element: <PrivateRoute><AddProduct/></PrivateRoute>
      },
      ,
      {
        path: "update-product/:id",
        element: <PrivateRoute><EditProduct/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
      }
    ]
  }
]);