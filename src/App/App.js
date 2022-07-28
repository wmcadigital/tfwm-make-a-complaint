import React from 'react';

import { FormProvider } from './globalState/ComplaintFormContext';
import Complaint from './MakeComplaint/components';

function App() {
  return (
    <FormProvider>
      <div className="wmnds-container wmnds-p-t-lg wmnds-p-b-lg">
        <div className="wmnds-bg-white wmnds-p-lg wmnds-p-l-md wmnds-col-1 wmnds-col-md-3-4">
          <Complaint />
        </div>
      </div>{' '}
    </FormProvider>
  );
}

export default App;
