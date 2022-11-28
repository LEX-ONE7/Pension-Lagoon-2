import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Activites from './pages/Activites';
import AvisClients from './pages/AvisClients';
import Bungalows from './pages/Bungalows';
import Evenements from './pages/Evenements';
import NousContacter from './pages/NousContacter';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/bungalows', element: <Bungalows /> },
  { path: '/activites', element: <Activites /> },
  { path: '/evenements', element: <Evenements /> },
  { path: '/nousContacter', element: <NousContacter /> },
  { path: '/avisClients', element: <AvisClients /> },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
