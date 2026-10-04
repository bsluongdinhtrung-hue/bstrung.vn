'use client';

import React, { createContext, useContext, useState } from 'react';
import ZaloConsultModal from './ZaloConsultModal';

interface ZaloConsultContextType {
  openZaloModal: () => void;
  closeZaloModal: () => void;
}

const ZaloConsultContext = createContext<ZaloConsultContextType>({
  openZaloModal: () => {},
  closeZaloModal: () => {},
});

export const useZaloConsult = () => useContext(ZaloConsultContext);

export function ZaloConsultProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ZaloConsultContext.Provider
      value={{
        openZaloModal: () => setIsOpen(true),
        closeZaloModal: () => setIsOpen(false),
      }}
    >
      {children}
      <ZaloConsultModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ZaloConsultContext.Provider>
  );
}
