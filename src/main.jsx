import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './Pages/Blogs';
import Bookmarks from './Pages/Bookmarks';
import Home from './Pages/Home'
import Roote from './Roote/Roote'
import Blog from './Components/Blog';



  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Roote></Roote>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/blogs",
          element:<Blogs></Blogs>,
          loader:() =>fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path:"/blog/:id",
          element:<Blog></Blog>,
          loader:({params}) =>fetch(`https://dev.to/api/articles/${params?.id}`)
        },
        {
          path:"bookmarks",
          element:<Bookmarks></Bookmarks>
        }
      ]
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
