import { useContext } from 'react';
import { sidebarContext } from './context';

export const useSidebarContext = () => {
  const context = useContext(sidebarContext);

  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarContextProvider');
  }

  return context;
};
