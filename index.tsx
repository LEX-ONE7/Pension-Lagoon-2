import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Activites from './pages/Activites';
import Bungalows from './pages/Bungalows';
import Evenements from './pages/Evenements';
import Contacts from './pages/Contacts';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/bungalows', element: <Bungalows /> },
  { path: '/activites', element: <Activites /> },
  { path: '/evenements', element: <Evenements /> },
  { path: '/contacts', element: <Contacts /> },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
