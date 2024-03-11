import React from "react";
import FlowPage from "./FlowPage";
import { useLocation } from "react-router-dom";
import WorkFlowHeader from "../components/WorkflowHeader/WorkflowHeader";

const WorkFlowPage = () => {
  let { state } = useLocation();
  let workflow_id = state.workflow_id;
  let workflow_name = state.workflow_name;
  //   console.log({ workflow_name });

  return (
    <>
      <WorkFlowHeader title={workflow_name} />
      <FlowPage workflow_id={workflow_id} />
    </>
  );
};

export default WorkFlowPage;
