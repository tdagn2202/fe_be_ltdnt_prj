import { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu cho context
interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
}

// Tạo context với kiểu dữ liệu UserContextType, và giá trị mặc định là null
const UserContext = createContext<UserContextType | null>(null);

// Tạo provider để bao bọc các component con
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook để dễ sử dụng context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
