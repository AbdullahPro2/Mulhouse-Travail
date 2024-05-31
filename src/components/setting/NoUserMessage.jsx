import React from 'react';
import { Link } from 'react-router-dom';

function NoUserMessage() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-xl font-medium">Veuillez vous connecter</h2>
      <p className="mb-4">
        Pour accéder à votre profil, vous devez d'abord vous connecter.
      </p>
      <Link to="/login" className="text-blue-500 underline">
        Aller à la page de connexion
      </Link>
    </div>
  );
}

export default NoUserMessage;
