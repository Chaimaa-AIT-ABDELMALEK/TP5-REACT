import { useState } from 'react';

function ControlledForm() {
  const [donnees, setDonnees] = useState({
    nom: '',
    email: ''
  });

  const mettreAJourChamp = (event) => {
    const { name, value } = event.target;

    setDonnees((ancienEtat) => {
      return {
        ...ancienEtat,
        [name]: value
      };
    });
  };

  const envoyerFormulaire = (event) => {
    event.preventDefault();
    alert(`Nom : ${donnees.nom}, Email : ${donnees.email}`);
  };

  return (
    <form className="form" onSubmit={envoyerFormulaire}>
      <h2>Formulaire contrôlé</h2>

      <input
        type="text"
        name="nom"
        value={donnees.nom}
        onChange={mettreAJourChamp}
        placeholder="Nom"
      />

      <input
        type="email"
        name="email"
        value={donnees.email}
        onChange={mettreAJourChamp}
        placeholder="Email"
      />

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ControlledForm;