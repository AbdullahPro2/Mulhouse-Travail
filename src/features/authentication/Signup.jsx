import React from 'react';
import FormRow from './FormRow';

function Signup() {
  return (
    <div className="m-10 bg-green-200 ">
      <form>
        <FormRow label="prénom">
          <input type="text" id="prenom" />
        </FormRow>
        <FormRow label="Nom">
          <input type="text" id="nom" />
        </FormRow>
        <FormRow label="Acte de naissance">
          <input type="date" id="naissance" />
        </FormRow>
        <FormRow label="Email">
          <input type="email" id="email" />
        </FormRow>
        <FormRow label="Confirmez Email">
          <input type="email" id="confirmEmail" />
        </FormRow>
        <FormRow label="le mot de passe">
          <input type="password" id="password" />
        </FormRow>
        <FormRow label="Confirmez le mot de passe">
          <input type="password" id="confirmPassword" />
        </FormRow>
        <FormRow label="Adress">
          <input type="text" id="adress" />
        </FormRow>
        <FormRow label="Code Postal">
          <input type="number" id="postal" />
        </FormRow>
        <FormRow label="Ville">
          <input type="text" id="ville" />
        </FormRow>
        <FormRow label="Nationalité">
          <input type="text" id="nationality" />
        </FormRow>
        <FormRow label="Numéro de téléphone">
          <input type="tel" id="phoneNumber" />
        </FormRow>
      </form>
    </div>
  );
}

export default Signup;
