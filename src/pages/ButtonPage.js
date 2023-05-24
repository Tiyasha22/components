import React from "react";
import { FaBeer } from "react-icons/fa";
import Button from "../components/Button";
const ButtonPage = ({ onClick }) => {
  return (
    <>
      <div>
        <Button secondary outline rounded className="mb-5" onClick={onClick}>
          <FaBeer size={24} className="mr-1" />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={onClick}>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={onClick}>
          See Deal!
        </Button>
      </div>
      <div>
        <Button success outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
