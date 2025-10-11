"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

interface RightSidebarContextType {
  isRightSidebarOpen: boolean;
  setIsRightSidebarOpen: (isOpen: boolean) => void;
  toggleRightSidebar: () => void;
}

const RightSidebarContext = createContext<RightSidebarContextType | undefined>(
  undefined
);

export function RightSidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <RightSidebarContext.Provider
      value={{
        isRightSidebarOpen: isOpen,
        setIsRightSidebarOpen: setIsOpen,
        toggleRightSidebar: toggle,
      }}
    >
      {children}
    </RightSidebarContext.Provider>
  );
}

export function useTOC() {
  const context = useContext(RightSidebarContext);
  if (context === undefined) {
    throw new Error("useTOC must be used within a TOCProvider");
  }
  return context;
}
