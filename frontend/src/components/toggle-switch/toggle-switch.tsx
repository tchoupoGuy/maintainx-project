import React, { useEffect, useState } from "react";
import WorkOrdersServices from "services/work-orders.api";
import { StatusType } from "utils/types";

interface Props {
  status: string;
  id: number;
}
const ToggleSwitch: React.FC<Props> = ({ status, id }) => {
  const initialState = {
    isOpen: status === StatusType.OPEN,
    statusToUpdate: status,
  };

  const [state, setState] = useState(initialState);
  const [checked, setChecked] = useState(state.isOpen);

  useEffect(() => {
    //update the state on props change
    setChecked(state.isOpen);
  }, [state.isOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    WorkOrdersServices.updateWorkOrderStatus({
      id,
      status: checked ? StatusType.OPEN : StatusType.CLOSED,
    }).then((result) => {
      setState({ ...initialState, statusToUpdate: result.status });
    });
  }, [checked]);

  return (
    <>
      <label>{state.statusToUpdate}</label>
      <input
        style={{ width: 15, height: 15 }}
        type="checkbox"
        onChange={(e) => handleChange(e)}
        checked={checked}
      ></input>
    </>
  );
};

export default ToggleSwitch;
