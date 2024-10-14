import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
    username: string;
    setUsername: (username: string) => void;
  }
  
  const UserContext = createContext<UserContextType | null>(null);
  
  export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState<string>('');
  
    return (
      <UserContext.Provider value={{ username, setUsername }}>
        {children}
      </UserContext.Provider>
    );
  };
  

  export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };

