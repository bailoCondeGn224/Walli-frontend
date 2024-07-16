import React from "react";
import { RouteProps, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Assurez-vous que ce chemin est correct

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Utilisez le contexte pour obtenir l'état de connexion
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/connexion');
    return null; // Return null to prevent rendering of the original element
  }

  return element;
};

export default PrivateRoute;
