import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const authURL = `https://brainly-server.vercel.app/auth/api`;
    // const authURL = `http://localhost:8097/auth/api`
    return (
        <AuthContext.Provider value={{ authURL }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}