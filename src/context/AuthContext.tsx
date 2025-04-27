import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  darDeBaja: () => void;
  showMessage: (message: string, type: "success" | "error") => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const showMessage = (message: string, type: "success" | "error") => {
    // Aquí podríamos usar un sistema de notificaciones más sofisticado
    alert(message);
  };

  const login = () => {
    setIsAuthenticated(true);
    showMessage("¡Bienvenido! Has iniciado sesión correctamente.", "success");
  };

  const logout = () => {
    setIsAuthenticated(false);
    showMessage("Has cerrado sesión correctamente. ¡Hasta pronto!", "success");
  };

  const darDeBaja = () => {
    setIsAuthenticated(false);
    showMessage("Tu cuenta ha sido dada de baja correctamente.", "success");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, darDeBaja, showMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
