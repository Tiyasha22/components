import { useState } from "react";
import DropDown from "../components/DropDown";
const DropDownPage = () => {
  const [selection, setSelection] = useState(null);
  const options = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
  ];
  const handleSelectedOption = (option) => {
    setSelection(option);
  };
  return (
    <div>
      <DropDown
        options={options}
        value={selection}
        onChange={handleSelectedOption}
      />
    </div>
  );
};

export default DropDownPage;
