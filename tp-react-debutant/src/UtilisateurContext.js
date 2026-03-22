import { createContext, useState } from 'react';

export const ContexteCompte = createContext(null);

export function GestionCompte({ children }) {
  const [compte, mettreAJourCompte] = useState({
    nom: '',
    connecte: false
  });

  return (
    <ContexteCompte.Provider value={{ compte, mettreAJourCompte }}>
      {children}
    </ContexteCompte.Provider>
  );
}