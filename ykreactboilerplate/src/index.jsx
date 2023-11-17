import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/error-page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />
      },
    ])} />
  </React.StrictMode>
);

reportWebVitals();