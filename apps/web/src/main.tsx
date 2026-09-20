import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { HomeControlScreen } from './feature/hogar/HomeControlScreen.tsx';
import { TasksScreen } from './feature/tareas/TasksScreen.tsx';
import { MemoryScreen } from './feature/memoria/MemoryScreen.tsx';
import { NotFoundScreen } from './feature/shared/NotFoundScreen.tsx';
import { HomeScreen } from './feature/home/HomeScreen.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: 'home', element: <HomeScreen /> },
      { path: 'hogar', element: <HomeControlScreen /> },
      { path: 'tareas', element: <TasksScreen /> },
      { path: 'memoria', element: <MemoryScreen /> },
      { path: '*', element: <NotFoundScreen /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
