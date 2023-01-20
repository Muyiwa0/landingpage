import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "../axios";

export const AccContext = React.createContext();

export const AccProvider = (props) => {
  const [showlogin, setShowlogin] = React.useState("");
  const [showtype, setShowType] = React.useState("Select Account");
  const [showsize, setShowSize] = React.useState(3000);
  const [accdeeds, setAccdeeds] = React.useState([]);

  return (
    <AccContext.Provider
      value={{
        values: [showlogin, setShowlogin],
        values2: [showtype, setShowType],
        values3: [showsize, setShowSize],
        values4: [accdeeds, setAccdeeds],
      }}
    >
      {props.children}
    </AccContext.Provider>
  );
};
