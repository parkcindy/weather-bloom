import Home from '../../pages/Home/Home';
import Layout from '../../layout/layout';
import { createBrowserRouter } from 'react-router-dom';
import Articles from '@/src/pages/articles/articles';
import Contacts from '@/src/pages/contacts/contacts';
import Article from '@/src/pages/articles/article/article';
import About from '@/src/pages/about-us/about';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'tentang-kami', element: <About /> },
      { path: 'artikel', element: <Articles /> },
      { path: 'artikel/:id', element: <Article /> },
      { path: 'Kontak', element: <Contacts /> },
    ],
  },
]);
