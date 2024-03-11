import React from "react";
import "./WorkflowHeaderStyle.css";
import { WorkFlowLogo } from "../../assets/logo";

const WorkFlowHeader = ({ title }) => {
  return (
    <div className="workflow__header__section">
      <WorkFlowLogo />
      <h6>{title}</h6>
      <div className="btns">
        <button>Save</button>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default WorkFlowHeader;
