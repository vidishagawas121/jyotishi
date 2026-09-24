import { createContext, useContext, useState, type ReactNode } from 'react';

export interface WhatsAppModalOptions {
  defaultQuestion?: string;
  source?: string;
  defaultName?: string;
  defaultMobile?: string;
}

interface WhatsAppModalContextType {
  isOpen: boolean;
  options: WhatsAppModalOptions;
  openWhatsAppModal: (options?: WhatsAppModalOptions) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<WhatsAppModalOptions>({});

  const openWhatsAppModal = (newOptions: WhatsAppModalOptions = {}) => {
    setOptions(newOptions);
    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
    setOptions({});
  };

  return (
    <WhatsAppModalContext.Provider
      value={{
        isOpen,
        options,
        openWhatsAppModal,
        closeWhatsAppModal,
      }}
    >
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
}
