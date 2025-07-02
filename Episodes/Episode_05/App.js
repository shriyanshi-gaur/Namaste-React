import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";   
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact"; 
import Error from "./Components/Error"; 
import RestaurantMenu from "./Components/RestaurantMenu";
// Assuming you have a styles.css file for styling
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children: [
      {
            path: "/",
            element:<Body/>,
            errorElement: <Error/>
        },
        {
            path: "/about",
            element:<About/>,
            errorElement: <Error/>
        },
       {
           path: "/contact",
            element:<Contact/>,
            errorElement: <Error/>
       },
       {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
          errorElement: <Error />
      }


    ]
    ,
    errorElement: <Error/>
  }

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);