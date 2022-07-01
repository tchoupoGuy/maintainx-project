import React from "react";

interface Props {
  name: string;
  status: string;
}

export const WorkOrdersRow: React.FC<Props> = ({ name, status }) => {
  return (
    <section style={{ display: "flex", alignItems: "center" }}>
      <div style={{ padding: 8 }}>{name}</div>
      <div style={{ padding: 8 }}>{status} </div>
    </section>
  );
};
