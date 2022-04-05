import React, { useContext, useState, useEffect } from 'react';

import Dropdown from 'components/shared/Dropdown';

import InsetText from 'components/shared/InsetText';

import Textarea from 'components/shared/Textarea';

import Calendar from 'components/shared/Calendar';

import Checkbox from 'components/shared/Checkbox';

import Input from 'components/shared/Input';

import { defaultRoute, ticketsAndPassesRoute } from 'components/App/routes';

import { FormDataContext } from '../../globalState';

import Data from '../data.json';

const ComplaintForm = () => {
  const [{ stepNum, route, formData }, formDispatch] = useContext(FormDataContext);

  const [dynamicComponents, setDynamicComponents] = useState({ type: '', components: [] });
  const activeRoute = route[stepNum];

  const data = Data.pages.find((page) => page.type === activeRoute);

  const dropdownChangeHandler = (event) => {
    const findDynamicComponent = data.dynamicComponents.find(
      (component) => component.type === event.target.value
    );
    setDynamicComponents(findDynamicComponent || data.dynamicComponents[0]);
  };

  useEffect(() => {
    if (formData['complaint-dropdown'] && stepNum === 0) {
      const findDynamicComponent = data.dynamicComponents.find(
        (component) => component.type === formData['complaint-dropdown']
      );
      setDynamicComponents(findDynamicComponent || data.dynamicComponents[0]);
    }
  }, [stepNum]);
  console.log(formData);
  const nextStep = (event) => {
    event.preventDefault();

    const answers = [];
    event.target.forEach((target) => {
      if (target.name) {
        answers.push({ name: target.name, value: target.value });
        formDispatch({
          type: 'ADD-DATA',
          payload: { name: target.name, value: target.value },
        });
      }
    });

    const hasEmptyField = answers.some((target) => !target.value);

    // exit func if there is a field with an empty value or if there are no answers
    if (hasEmptyField || answers.length === 0) return;

    // when last complaint form is reached
    if (stepNum === route.length - 1) {
      formDispatch({
        type: 'CHANGE-PAGE',
        payload: { page: 'ANSWERS', stepNum },
      });
      return;
    }

    if (dynamicComponents.type === 'Tickets and passes') {
      formDispatch({
        type: 'CHANGE-ROUTE',
        payload: ticketsAndPassesRoute,
      });
    }

    if (dynamicComponents.type && dynamicComponents.type !== 'Tickets and passes') {
      formDispatch({
        type: 'CHANGE-ROUTE',
        payload: defaultRoute,
      });
    }
    formDispatch({
      type: 'NEXT',
    });

    setDynamicComponents([]);
  };

  const prevStep = () => {
    formDispatch({
      type: 'PREV',
    });
  };

  return (
    <>
      <div className="wmnds-col-1 wmnds-m-b-md">
        <button type="button" className="wmnds-btn wmnds-btn--link" onClick={prevStep}>
          &lt; Back
        </button>
      </div>
      <div className="bg-white wmnds-p-l-md" style={{ width: '40rem' }}>
        <p className="wmnds-m-b-xs wmnds-p-t-lg">Section {data.sectionNum} of 2</p>
        <h4 className="wmnds-m-t-xs">{data.sectionDescription}</h4>

        <h2 className=" wmnds-m-t-lg">{data.title}</h2>
        <form onSubmit={nextStep}>
          {data.components.map((component) => (
            <div key={component.id}>
              {component.type === 'Dropdown' && (
                <Dropdown
                  title={component.title}
                  options={component.options}
                  onChange={dropdownChangeHandler}
                  name={component.name}
                  defaultValue={formData[component.name]}
                />
              )}

              {component.type === 'Textarea' && (
                <Textarea
                  title={component.title}
                  text1={component.text1}
                  text2={component.text2}
                  name={component.name}
                  defaultValue={formData[component.name]}
                />
              )}
              {component.type === 'InsetText' && <InsetText texts={component.texts} />}
              {component.type === 'Text' && <p>{component.text}</p>}
              {component.type === 'Input' && (
                <Input
                  label={component.label}
                  name={component.name}
                  defaultValue={formData[component.name]}
                />
              )}
              {component.type === 'Calendar' && (
                <Calendar
                  label={component.label}
                  dayDefaultValue={formData.day}
                  monthDefaultValue={formData.month}
                  yearDefaultValue={formData.year}
                />
              )}
              {component.type === 'Checkbox' && (
                <Checkbox
                  label={component.label}
                  options={component.options}
                  name={component.name}
                  defaultValues={[formData.email, formData.phone]}
                />
              )}
            </div>
          ))}

          {dynamicComponents.type &&
            dynamicComponents.components.map((component) => (
              <div key={component.id}>
                {component.type === 'Textarea' && (
                  <Textarea
                    title={component.title}
                    text1={component.text1}
                    text2={component.text2}
                    name={component.name}
                    defaultValue={formData[component.name]}
                  />
                )}
                {component.type === 'InsetText' && <InsetText texts={component.texts} />}
              </div>
            ))}
          <button className="wmnds-btn wmnds-m-b-lg" type="submit">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};
export default ComplaintForm;
