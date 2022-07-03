import React, { useEffect, useState } from "react";
import WorkOrdersServices from "services/work-orders.api";
import { StatusType } from "utils/types";

interface Props {
  status: string;
  id: number;
}
const ToggleSwitch: React.FC<Props> = ({ status, id }) => {
  let isOpen = status === StatusType.OPEN;

  const [checked, setChecked] = useState(isOpen);

  useEffect(() => {
    //update the state on props change
    setChecked(isOpen);
  }, [isOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    let newStatus: string = "";
    if (isOpen) {
      newStatus = StatusType.CLOSED;
    } else {
      newStatus = StatusType.OPEN;
    }
    WorkOrdersServices.updateWorkOrderStatus({ id, status: newStatus });
  };

  return (
    <>
      <label>{status}</label>
      <input
        type="checkbox"
        onChange={(e) => handleChange(e)}
        id={status}
        name={status}
        checked={checked}
      ></input>
    </>
  );
};

export default ToggleSwitch;
