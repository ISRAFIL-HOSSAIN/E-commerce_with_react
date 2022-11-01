import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import './index.css';
import store from './redux/store';
import App from './App';
import { BrowserRouter } from "react-router-dom"; 
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        theme="light"
        />
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  ,

  document.getElementById('root')
);