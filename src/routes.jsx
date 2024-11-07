import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Example from './pages/Example';
import Home from './pages/Home';
import Price from './pages/Price';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // 추가 라우팅
      {
        path: 'example',
        element: <Example />,
      },
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'price',
        element: <Price />,
      },
    ],
  },
]);

export default router;
