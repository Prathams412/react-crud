import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Table from './components/Table.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import AddUser from './components/AddUser.jsx'
import EditUser from './components/EditUser.jsx'
import SingleUserData from './components/SingleUserData.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/Home",element: <Table/> },
      {path:"/About",element: <About/> },
      {path:"/Contact",element: <Contact/> },
      {path:"/AddUser",element: <AddUser/>},
      {path:"/EditUser/:idfetch",element: <EditUser/>},
      {path:"/SingleUser/:idfetch",element: <SingleUserData/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
