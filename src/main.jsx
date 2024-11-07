import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './config/routes/routes';
import { SidebarContextProvider } from './config/context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarContextProvider>
      <RouterProvider router={routes} />
    </SidebarContextProvider>
  </StrictMode>
);
