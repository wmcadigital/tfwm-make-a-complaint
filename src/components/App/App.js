import React from 'react';

import { FormProvider } from './globalState/ComplaintFormContext';
import Complaint from './MakeComplaint/components';

function App() {
  return (
    <FormProvider>
      <div className="wmnds-container wmnds-p-t-lg wmnds-p-b-lg">
        <Complaint />
      </div>{' '}
    </FormProvider>
  );
}

export default App;
