import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Example from './pages/Example';

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
    ],
  },
]);

export default router;
