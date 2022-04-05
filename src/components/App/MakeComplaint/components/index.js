import React, { useContext } from 'react';

import ComplaintForm from './ComplaintForm';

import { FormDataContext } from '../../globalState';

import CheckYourAnswers from './CheckYourAnswers';

const Complaint = () => {
  const [{ page }] = useContext(FormDataContext);

  return (
    <>
      {page === 'COMPLAINT' && <ComplaintForm />}

      {page === 'ANSWERS' && <CheckYourAnswers />}
    </>
  );
};
export default Complaint;
