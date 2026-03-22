import { useRef } from 'react';

function UncontrolledForm() {
  const referenceFormulaire = useRef(null);

  const traiterSoumission = (event) => {
    event.preventDefault();

    const donneesFormulaire = new FormData(referenceFormulaire.current);
    const nomUtilisateur = donneesFormulaire.get('nom');
    const emailUtilisateur = donneesFormulaire.get('email');

    alert(`Nom : ${nomUtilisateur}, Email : ${emailUtilisateur}`);
  };

  return (
    <form
      ref={referenceFormulaire}
      className="form"
      onSubmit={traiterSoumission}
    >
      <h2>Formulaire non contrôlé</h2>

      <input type="text" name="nom" placeholder="Nom" />
      <input type="email" name="email" placeholder="Email" />

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default UncontrolledForm;