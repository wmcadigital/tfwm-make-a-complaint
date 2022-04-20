/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { defaultRoute } from 'App/routes';
import React, { createContext, useReducer } from 'react';
import Data from '../../MakeComplaint/data.json';
// create context
export const FormDataContext = createContext();

export const FormProvider = (props) => {
  const { children } = props || {};
  // initial state
  const initialState = {
    page: 'COMPLAINT',
    stepNum: 0,
    formData: {},
    route: defaultRoute,
  };
  const ComplaintReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE-PAGE': {
        return {
          ...state,
          page: action.payload.page,
          stepNum: action.payload.stepNum,
        };
      }
      case 'ADD-DATA': {
        const cloneState = state;
        cloneState.formData[action.payload.name] = action.payload.value;
        return {
          ...state,
          formData: cloneState.formData,
        };
      }
      case 'CHANGE-ROUTE': {
        return {
          ...state,
          route: action.payload,
        };
      }
      case 'NEXT': {
        return {
          ...state,
          stepNum: state.stepNum + 1,
        };
      }
      case 'PREV': {
        return {
          ...state,
          stepNum: state.stepNum - 1,
        };
      }

      default:
        return state;
    }
  };

  const [formState, formDispatch] = useReducer(ComplaintReducer, initialState);

  return (
    <FormDataContext.Provider value={[formState, formDispatch]}>
      {children}
    </FormDataContext.Provider>
  );
  // };
};
