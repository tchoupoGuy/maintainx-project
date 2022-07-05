import NavLinks from "components/nav-link";
import { homeLinks } from "components/nav-link/nav-links.definitions";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Take me to the</span>
        <NavLinks items={homeLinks} />
      </div>
    </>
  );
};
export default Home;
