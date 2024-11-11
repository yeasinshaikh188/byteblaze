import { createBrowserRouter } from 'react-router-dom'
import Roote from '../Roote/Roote'
import Home from '../pages/Home'
import YeasinBlog from '../components/Blog'
import Blogs from '../pages/Blogs'
import Content from '../components/Content'
import Author from '../components/Author'
import Bookmarks from '../pages/Bookmarks'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Roote />,
    // errorElement: <YeasinError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blog/:id',
        element: <YeasinBlog />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params?.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.id}`),
          },
          {
            path: 'author',
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.id}`),
          },
        ],
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
])