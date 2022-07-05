import "./page.title.css";
import React from "react";
interface Props {
  title: string;
}
const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="c-page-title">
      <h3>{title}</h3>
    </div>
  );
};

export default PageTitle;
