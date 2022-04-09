import React from 'react';
import FormValidaionPasswrdNtMatchng from './FormValidations/FormValidaionPasswrdNtMatchng';
import FormValidationOne from './FormValidations/FormValidationsOne';
import FrmValidationTwoWithError from './FormValidations/FrmValidationTwoWthError';

function App() {
  return (
    <div>

      {/* <FormValidationOne />     This is basic form validation */}
      {/* <FrmValidationTwoWithError /> This is form validation with some validation errors */}

      <FormValidaionPasswrdNtMatchng /> {/* this is password are not matching validation */}



    </div>
  );
}

export default App;