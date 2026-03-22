import { useState } from 'react';
import { ContexteCompte } from './UtilisateurContext';
import ControlledForm from './FormulaireControle';
import UncontrolledForm from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import './App.css';

function App() {
  const [compte, mettreAJourCompte] = useState({
    nom: 'Chaimaa',
    connecte: true
  });

  return (
    <ContexteCompte.Provider value={{ compte, mettreAJourCompte }}>
      <main className="app-container">
        <h1 className="title">Exercices React sur les formulaires</h1>

        <section className="forms-wrapper">
          <ControlledForm />
          <UncontrolledForm />

          <h2>Valeur de température</h2>
          <TemperatureConvertor />

          <h2>Espace utilisateur</h2>
          <Profil />
        </section>
      </main>
    </ContexteCompte.Provider>
  );
}

export default App;