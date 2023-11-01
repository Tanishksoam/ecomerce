import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Home from "./pages/home";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
} from "react-router-dom";
import ProductData from "./api/Api";
import Carts from "./pages/Carts";
import Eproduct from "./components/Eproduct";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, loader: ProductData },
      {
        path: "/product/:id",
        element: <Eproduct />,
      },
      { path: "/cart", element: <Carts /> },
    ],
  },
]);

function App() {
  return (
    <div className=" font-bodyFont">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
