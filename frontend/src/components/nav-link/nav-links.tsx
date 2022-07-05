import "./nav-links.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { NavLinksType } from "utils/types";
interface Props {
  items: NavLinksType[];
}
const NavLinks: React.FC<Props> = ({ items }) => {
  const [links, setLinks] = useState<NavLinksType[]>(items);

  useEffect(() => {
    setLinks(items);
  }, [items]);
  return (
    <div className="c-nav-links">
      {Array.isArray(links) &&
        links?.map((link: NavLinksType) => {
          return (
            <Link key={link.id} className="c-link" to={link?.url}>
              {link?.name}
            </Link>
          );
        })}
    </div>
  );
};

export default NavLinks;
