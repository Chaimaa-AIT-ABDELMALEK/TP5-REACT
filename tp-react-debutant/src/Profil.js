import { useContext, useState } from 'react';
import { ContexteCompte } from './UtilisateurContext';

function Profil() {
  const { compte, mettreAJourCompte } = useContext(ContexteCompte);
  const [saisieNom, setSaisieNom] = useState('');

  const connecterUtilisateur = () => {
    const nomNettoye = saisieNom.trim();

    if (nomNettoye !== '') {
      mettreAJourCompte({
        nom: nomNettoye,
        connecte: true
      });
      setSaisieNom('');
    }
  };

  const deconnecterUtilisateur = () => {
    mettreAJourCompte({
      nom: '',
      connecte: false
    });
  };

  return (
    <div className="profile-section">
      {compte.connecte ? (
        <div>
          <p>Bienvenue, {compte.nom} !</p>
          <button onClick={deconnecterUtilisateur}>Se déconnecter</button>
        </div>
      ) : (
        <div>
          <p>Veuillez vous connecter.</p>

          <div className="login-form">
            <input
              type="text"
              value={saisieNom}
              onChange={(event) => setSaisieNom(event.target.value)}
              placeholder="Entrez votre nom"
            />
            <button onClick={connecterUtilisateur}>Se connecter</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profil;