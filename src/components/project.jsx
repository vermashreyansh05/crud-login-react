import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  let Navigate = useNavigate();
  const [projectData, setPdata] = useState([]);

  const propsData = JSON.parse(localStorage.getItem("headers"));
  const userData = JSON.parse(localStorage.getItem("data"));
  console.log("user data = ", userData.data);

  let hed = {
    uid: propsData.uid,
    client: propsData.client,
    "access-token": propsData["access-token"],
  };
  let headersData = {
    headers: hed,
  };

  const getProjectData = async () => {
    console.warn("PropesData = ", headersData);

    const resp = await axios.get("http://localhost:4000/projects", headersData);

    setPdata(resp.data);
  };
  const gotoCreateProject = () => {
    let path = "/createProject";
    Navigate(path, { state: { headerData: propsData, user: userData } });
  };
  const arry = Object.keys(projectData);

  useEffect(() => {
    Check();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:4000/projects/${id}`, headersData);
    Check();
  };

  const Check = () => {
    if (propsData != null) {
      getProjectData();
    } else {
      Navigate("/Login");
    }
  };

  return (
    <>
      <div className="container">
        <div className="table">
          <h3>Welcom {userData.data.full_name}</h3>
          <button
            className="btn btn-outline-success"
            onClick={gotoCreateProject}
          >
            Create New Data
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              Navigate("/");
            }}
          >
            HOME
          </button>
          <table>
            <thead>
              <th>ID</th>
              <th>COMPANY</th>
              <th>PROJECT</th>
              <th>DESCRIPTION</th>
            </thead>
            <tbody>
              {projectData.map((value) => {
                return (
                  console.log("projectData", projectData),
                  (
                    <>
                      <tr>
                        <td>{value.id}</td>
                        <td>{value.company_name}</td>
                        <td>{value.project_name}</td>
                        <td>{value.description}</td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => {
                              deleteData(value.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Project;
