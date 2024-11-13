import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

const LoginOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClose = () => setIsOpen(false);

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      handleClose();
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <LoginModal isOpen={isOpen} onClose={handleClose} onSubmit={handleLogin} />
  );
};

export default LoginOverlay;
