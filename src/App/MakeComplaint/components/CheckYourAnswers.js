import React, { useContext, useState } from 'react';

import { FormDataContext } from '../../globalState';

import classes from '../../App.module.scss';

const CheckYourAnswers = () => {
  const [{ formData, stepNum }, formDispatch] = useContext(FormDataContext);
  const [errorMsg, setErrorMsg] = useState('');
  const prevStep = () => {
    formDispatch({
      type: 'CHANGE-PAGE',
      payload: { page: 'COMPLAINT', stepNum, pageType: '' },
    });
  };
  const changeForm = (stepNumber) => {
    formDispatch({
      type: 'CHANGE-PAGE',
      payload: { page: 'COMPLAINT', stepNum: stepNumber, pageType: 'change' },
    });
  };
  // const email = 'devtest13213@gmail.com';
  // const sendEmailHandler = async () => {
  //   const fetchsendEmail = await fetch(
  //     `http://api.createsend.com/api/v3.3/transactional/classicEmail/send?clientID=fc0cb0bd83aa54599f3f1e0080d2f9c3`,
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         Subject: 'Password reset request for ABC Widgets',
  //         From: `John Smith <${email}>`,
  //         ReplyTo: email,

  //         To: ['Joe Smith <joesmith@example.com>', 'jamesmith@example.com'],
  //         CC: ['Joe Smith <joesmith@example.com>'],
  //         Text: 'plain text content goes here',
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );
  //   const sendEmailRes = await fetchsendEmail.json();
  //   console.log(sendEmailRes);
  // };
  const checkCheckboxes = () => {
    const findCheckedBoxes = [...document.querySelectorAll(`input:checked`)];
    if (findCheckedBoxes.length < 2) {
      setErrorMsg('Please select both options');
    } else {
      formDispatch({
        type: 'CHANGE-PAGE',
        payload: { page: 'SUCCESS', stepNum },
      });
      setErrorMsg('');
      // sendEmailHandler();
    }
  };
  return (
    <>
      <div className="wmnds-col-1 wmnds-m-b-md">
        <button type="button" className="wmnds-btn wmnds-btn--link" onClick={prevStep}>
          &lt; Back
        </button>
      </div>
      <div className="bg-white wmnds-p-lg" style={{ width: '40rem' }}>
        <h2 className=" wmnds-m-t-lg">Check your answers</h2>
        <h3>About your complaint</h3>
        <table className="wmnds-table wmnds-table--without-header">
          <tbody>
            {formData['complaint-dropdown'] && (
              <tr>
                <th scope="row" data-header="Header 1">
                  Reason
                </th>
                <td data-header="Header 2">{formData['complaint-dropdown']}</td>
                <td data-header="Header 2">
                  <button
                    type="button"
                    className={`wmnds-btn wmnds-btn--link ${classes.floatRight}`}
                    onClick={() => changeForm(0)}
                  >
                    Change
                  </button>
                </td>
              </tr>
            )}
            {formData['what-happend'] && (
              <tr>
                <th scope="row" data-header="Header 1">
                  Details
                </th>
                <td data-header="Header 2">{formData['what-happend']}</td>
                <td data-header="Header 2">
                  <button
                    type="button"
                    className={`wmnds-btn wmnds-btn--link ${classes.floatRight}`}
                    onClick={() => changeForm(0)}
                  >
                    Change
                  </button>
                </td>
              </tr>
            )}

            {formData.location && (
              <tr>
                <th scope="row" data-header="Header 1">
                  Where
                </th>
                <td data-header="Header 2">{formData.location}</td>
                <td data-header="Header 2">
                  <button
                    type="button"
                    className={`wmnds-btn wmnds-btn--link ${classes.floatRight}`}
                    onClick={() => changeForm(1)}
                  >
                    Change
                  </button>
                </td>
              </tr>
            )}
            {formData.swift && (
              <tr>
                <th scope="row" data-header="Header 1">
                  Swift
                </th>
                <td data-header="Header 2">{formData.swift}</td>
                <td data-header="Header 2">
                  <button
                    type="button"
                    className={`wmnds-btn wmnds-btn--link ${classes.floatRight}`}
                    onClick={() => changeForm(1)}
                  >
                    Change
                  </button>
                </td>{' '}
              </tr>
            )}
            {formData.day && formData.month && formData.year && (
              <tr>
                <th scope="row" data-header="Header 1">
                  When
                </th>
                <td data-header="Header 2">
                  {formData.day}-{formData.month}-{formData.year}
                </td>
                <td data-header="Header 2">
                  <button
                    type="button"
                    className={`wmnds-btn wmnds-btn--link ${classes.floatRight}`}
                    onClick={() => changeForm(2)}
                  >
                    Change
                  </button>
                </td>{' '}
              </tr>
            )}
          </tbody>
        </table>
        <h3>About you</h3>
        <table className="wmnds-table wmnds-table--without-header">
          <tbody>
            <tr>
              <th scope="row" data-header="Header 1">
                Name
              </th>
              <td data-header="Header 2">
                {formData['first-name']} {formData['last-name']}
              </td>
              <td data-header="Header 2">
                <button
                  type="button"
                  className={`wmnds-btn wmnds-btn--link ${classes.floatRight}`}
                  onClick={() => changeForm(3)}
                >
                  Change
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row" data-header="Header 1">
                How would you like to be contacted?
              </th>
              <td data-header="Header 2">
                {formData.email && (
                  <>
                    <span>
                      Email <br /> {formData.email}
                    </span>
                  </>
                )}
                {formData.email && formData.phone && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                {formData.phone && (
                  <span>
                    Phone <br /> {formData.phone}
                  </span>
                )}
              </td>
              <td data-header="Header 2">
                <button
                  type="button"
                  className={`wmnds-btn wmnds-btn--link ${classes.floatRight}`}
                  onClick={() => changeForm(4)}
                >
                  Change
                </button>
              </td>
            </tr>{' '}
          </tbody>
        </table>
        <h3>Now send your complaint</h3>
        <p>
          By submitting this complaint you are confirming that, to the best of your knowledge, the
          details you are providing are correct.
        </p>

        <div className="wmnds-fe-group">
          <div className={`wmnds-fe-checkboxes ${errorMsg && 'wmnds-fe-group--error'}`}>
            {errorMsg && <span className="wmnds-fe-error-message">{errorMsg}</span>}
            <label className="wmnds-fe-checkboxes__container">
              Agree to the{' '}
              <a href="https://www.tfwm.org.uk/terms-and-conditions/transport-for-west-midlands-website/">
                terms and conditions
              </a>
              <input
                id="checkboxes_option1"
                className="wmnds-fe-checkboxes__input"
                value="terms-and-conditions"
                name="checkbox-example"
                type="checkbox"
              />
              <span className="wmnds-fe-checkboxes__checkmark">
                <svg className="wmnds-fe-checkboxes__icon">
                  <use xlinkHref="#wmnds-general-checkmark" href="#wmnds-general-checkmark" />
                </svg>
              </span>
            </label>
            <label className="wmnds-fe-checkboxes__container">
              Agree to the{' '}
              <a href="https://www.tfwm.org.uk/policies/privacy-and-cookies-policy/">
                privacy policy
              </a>
              <input
                id="checkboxes_option1"
                className="wmnds-fe-checkboxes__input"
                value="privacy-policy"
                name="checkbox-example"
                type="checkbox"
              />
              <span className="wmnds-fe-checkboxes__checkmark">
                <svg className="wmnds-fe-checkboxes__icon">
                  <use xlinkHref="#wmnds-general-checkmark" href="#wmnds-general-checkmark" />
                </svg>
              </span>
            </label>
          </div>
        </div>
        <button className="wmnds-btn wmnds-btn--start" type="button" onClick={checkCheckboxes}>
          Accept and send
          <svg className="wmnds-btn__icon wmnds-btn__icon--right ">
            <use xlinkHref="#wmnds-general-chevron-right" href="#wmnds-general-chevron-right" />
          </svg>
        </button>
      </div>
    </>
  );
};
export default CheckYourAnswers;
