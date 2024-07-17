import { useState, ReactNode, createContext, Dispatch, SetStateAction } from 'react';

interface NocompleteProviderProps {
  children: ReactNode;
}

interface NocompleteContextProps {
  nocomplete: boolean;
  setNocomplete: Dispatch<SetStateAction<boolean>>;
  notifyNocomplete: () => void;
}

export const NocompleteContext = createContext<NocompleteContextProps>({
  nocomplete: false,
  // Assigning empty function to avoid undefined error
  setNocomplete: () => {},
  // Assigning empty function to avoid undefined error
  notifyNocomplete: () => {},
});

export default function NocompleteProvider({ children }: NocompleteProviderProps) {
  const [nocomplete, setNocomplete] = useState<boolean>(false);
  
  const notifyNocomplete = () => {
    setNocomplete(true);
    setTimeout(() => {
        setNocomplete(false);
    }, 3000); // Assuming a 3-second duration for the nocomplete
  }

  return (
    <NocompleteContext.Provider value={{ nocomplete, setNocomplete, notifyNocomplete }}>
      {children}
    </NocompleteContext.Provider>
  );
}