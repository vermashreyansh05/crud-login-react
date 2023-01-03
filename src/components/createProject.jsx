import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CreateProject = () => {
  const Navigate = useNavigate();
  const [userHeader, setUserHeader] = useState();
  const [Pname, setPname] = useState();
  const [PCname, setPCname] = useState();
  const [Pdesc, setPdesc] = useState();
  const location = useLocation();

  const userHeaderData = location.state.headerData;
  console.log("userHeader = ", userHeaderData);
  const headersData = {
    headers: {
      uid: userHeaderData.uid,
      client: userHeaderData.client,
      "access-token": userHeaderData["access-token"],
    },
  };

  const data = {
    project: {
      project_name: Pname,
      company_name: PCname,
      description: Pdesc,
    },
  };
  const sendData = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4000/projects",
      data,
      headersData
    );
    console.log(resp);
    Navigate("/Project");
  };

  return (
    <>
      <h1>Create Project</h1>
      <button
        onClick={() => {
          Navigate("/");
        }}
      >
        HOME
      </button>
      <form>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              Project Name :{" "}
              <input
                type="text"
                placeholder="Enter Project Name"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
              />
            </tr>
            <tr>
              Company Name :{" "}
              <input
                type="text"
                placeholder="Enter Company Name"
                onChange={(e) => {
                  setPCname(e.target.value);
                }}
              />
            </tr>
            <tr>
              Description :{" "}
              <input
                type="text"
                placeholder="Enter Description"
                onChange={(e) => {
                  setPdesc(e.target.value);
                }}
              />
            </tr>
            <tr>
              <button className="btn btn-primary" onClick={sendData}>
                Create Data
              </button>
            </tr>
          </thead>
        </table>
        <pre></pre>
      </form>
    </>
  );
};

export default CreateProject;
