import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext(); // Agregando la definición del contexto

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // Agregar estado para el usuario

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            // Aquí puedes agregar lógica para decodificar el token y establecer el usuario
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        // Lógica para establecer el usuario tras el login (decodificación del token)
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null); // Limpiar el estado del usuario al cerrar sesión
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
