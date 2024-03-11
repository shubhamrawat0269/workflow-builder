import React from "react";
import "./WorkFlowListStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { WORKFLOW_LIST_DATA } from "../../utils/API_ENDPOINT";

function WorkFlowList() {
  let navigate = useNavigate();
  const { data } = useFetch(WORKFLOW_LIST_DATA);

  return (
    <div className="worflow__list__section">
      <div className="user__details">
        <h1>Hii, Shubham Rawat</h1>
        <button>Create WorkFlow</button>
      </div>

      <div className="workflow__list__cards">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="workflow__list__card"
              onClick={() => {
                navigate("/workflow", {
                  state: { workflow_id: index, workflow_name: item.name },
                });
              }}
            >
              <div>{index + 1}</div>
              <div>{item.name} created a workflow on</div>
              <div>
                {new Date(item.createdAt).toLocaleDateString()},
                {new Date(item.createdAt).toLocaleTimeString()}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WorkFlowList;
