import React from "react";
import Accordion from "../components/Accordion";
const AccordianPage = () => {
  const items = [
    {
      id: 1,
      label: "Can I use react on a project?",
      content: "yes ,you can !",
    },
    { id: 2, label: "label 2", content: "content 2" },
    { id: 3, label: "label 3", content: "content 3" },
  ];
  return (
    <div>
      <Accordion items={items} /> 
    </div>
  );
};

export default AccordianPage;
