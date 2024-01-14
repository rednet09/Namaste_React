import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello, World from React!"
); //the {} part is where you put attribute to the tags
// this print javascript object which is also an React Element that browser understand
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//-------- creating nested React Element --------//
// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("h1", {}, "I am an h1 tag"),
//       React.createElement("h2", {}, "I am an h2 tag"),
//     ] //you can pass more than one children by converting 3rd argument into an array
//   )
// );

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
