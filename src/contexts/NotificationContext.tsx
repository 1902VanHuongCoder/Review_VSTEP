import { useState, ReactNode, createContext, Dispatch, SetStateAction } from 'react';

interface NotificationProviderProps {
  children: ReactNode;
}

interface NotificationContextProps {
  notification: boolean;
  setNotification: Dispatch<SetStateAction<boolean>>;
  notify: () => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  notification: false,
  // Assigning empty function to avoid undefined error
  setNotification: () => {},
  // Assigning empty function to avoid undefined error
  notify: () => {},
});

export default function NotificationProvider({ children }: NotificationProviderProps) {
  const [notification, setNotification] = useState<boolean>(false);
  
  const notify = () => {
    setNotification(true);
    setTimeout(() => {
        setNotification(false);
    }, 3000); // Assuming a 3-second duration for the notification
  }

  return (
    <NotificationContext.Provider value={{ notification, setNotification, notify }}>
      {children}
    </NotificationContext.Provider>
  );
}