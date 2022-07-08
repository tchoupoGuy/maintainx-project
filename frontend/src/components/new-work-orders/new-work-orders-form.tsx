import "./new-work-order-form.css";
import React, { useState } from "react";
import { GenericObject, User, WorkOrder } from "utils/types";
import WorkOrdersServices from "services/work-orders.api";

const NewWorkOrdersForm = () => {
  const [users, setUsers] = useState<GenericObject[]>([
    { name: "", email: "" },
  ]);
  const [workOrder, setWorkOrder] = useState<string>("");

  let handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let newUsers = [...users];
    newUsers[i][e.target.name] = e.target.value;
    setUsers(newUsers);
  };

  let addFormFields = () => {
    setUsers([...users, { name: "", email: "" }]);
  };

  let removeFormFields = (i: number) => {
    let newUsers = [...users];
    newUsers.splice(i, 1);
    setUsers(newUsers);
  };

  let handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emails = users.map((user) => user.email);
    const filtered = users.filter(
      ({ email }, index) => !emails.includes(email, index + 1)
    );
    const filterDuplicate = users.filter(({ email }, index) =>
      emails.includes(email, index + 1)
    );
    if (filterDuplicate.length) {
      alert("can not add double user");
    } else if (!filtered.length) {
      alert("User is required");
    } else {
      WorkOrdersServices.insertWorkOrder({
        users: filtered as User[],
        workOrder: { name: workOrder } as WorkOrder,
      });

      event.target.reset();
      alert("Work Order has been send successfully");
    }
  };

  const handleChangeWorkOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setWorkOrder(e.target.value);
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
              name="workOrder"
              required
              onChange={(e) => handleChangeWorkOrder(e)}
            />
          </div>
          <p>Add List of assignees</p>

          {users.map((element, index) => (
            <div className="form-inline" key={index}>
              <input
                type="text"
                name="name"
                className="name-input"
                placeholder="Name"
                value={element.name || ""}
                required
                onChange={(e) => handleChange(index, e)}
              />

              <input
                type="email"
                name="email"
                id={`email${index}`}
                className="email-input"
                placeholder="email"
                required
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
