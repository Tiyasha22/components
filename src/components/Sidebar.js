import React from "react";
import Link from "./Link";
const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordian", path: "/accordian" },
    { label: "Button", path: "/buttons" },
    { label: "Modal", path: "/modal" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        activeClassName="font-bold text-blue-600 border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
