import { useState } from 'react';
import { sidebarContext } from './context';

export const SidebarContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <sidebarContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </sidebarContext.Provider>
  );
};
