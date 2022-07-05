import "./new-work-order-form.css";
import React, { useState } from "react";
import { GenericObject } from "utils/types";

const NewWorkOrdersForm = () => {
  const [formValues, setFormValues] = useState<GenericObject[]>([
    { name: "", email: "" },
  ]);

  let handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i: number) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  const handleChangeWorkOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="c-new-work-order-form">
        <form onSubmit={handleSubmit}>
          <div className="form-inline">
            <p>Add work order name</p>
            <input
              className="w-o-input"
              placeholder="Name"
              type="text"
              name="fullname"
              onChange={(e) => handleChangeWorkOrder(e)}
            />
          </div>
          <p>Add List of assignees</p>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <input
                type="text"
                name="name"
                className="name-input"
                placeholder="Name"
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
              />

              <input
                type="text"
                name="email"
                className="email-input"
                placeholder="email"
                value={element.email || ""}
                onChange={(e) => handleChange(index, e)}
              />

              <button
                type="button"
                className={`c-button button-remove`}
                onClick={() => removeFormFields(index)}
              >
                -
              </button>
            </div>
          ))}
          <div className="button-add-container">
            <button
              className="c-button button-add"
              type="button"
              onClick={() => addFormFields()}
            >
              +
            </button>
            <label className="button-add-label">Add More user</label>
          </div>
          <div className="button-submit-container">
            <button className=" c-button button-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewWorkOrdersForm;
