import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Error from "./lib/components/Error";
import Login from "./lib/components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './source/style/Cards.css'
import './source/style/Form.css'
import Registration from "./lib/components/Registration";
import ShowAll from "./lib/requests/GetAll";
import GetOne from "./lib/requests/GetOne";
import GetUpdate from './lib/requests/GetUpdate'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Registration />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/showAll",
    element: <ShowAll />,
    errorElement: <Error />,
  },
  {
    path: "/getOne",
    element: <GetOne />,
    errorElement: <Error />,
  },
  {
    path: "/GetUpdate",
    element: <GetUpdate />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
