import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Test from "./test";
import Logout from "./StoredData/LogoutData";

const Base = ({ props }) => {
  const [data, setData] = useState([]);
  const [id, setPid] = useState();
  const [name, setPname] = useState();
  const [address, setPaddrs] = useState();
  const [rent, setPrent] = useState();
  const [property_details, setPdetails] = useState();

  const propsData = JSON.parse(localStorage.getItem("data"));

  let Navigate = useNavigate();

  const gotoCreate = () => {
    let path = "/create";
    Navigate(path);
  };
  const gotoLogin = () => {
    let path = "/Login";
    Navigate(path);
  };
  const gotoSearch = () => {
    let path = "/Search";
    Navigate(path);
  };

  const deletePost = (id) => {
    fetch(`https://63610b45af66cc87dc21409b.mockapi.io/property_data/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getData();
      });
    });
  };
  const updateData = async (e) => {
    e.preventDefault();
    let item = {
      name: name,
      address: address,
      rent: rent,
      property_details: property_details,
    };
    const response = await axios.put(
      `https://63610b45af66cc87dc21409b.mockapi.io/property_data/${id}`,
      item
    );
    let data = response.data;
    getData();
  };

  const Username = localStorage.getItem("data");

  const updateUser = (id) => {
    let updData = data[id];
    console.warn(data[id]);
    setPid(updData.id);
    setPname(updData.name);
    setPaddrs(updData.address);
    setPrent(updData.rent);
    setPdetails(updData.property_details);
  };

  const getData = async () => {
    const res = await fetch(
      "https://63610b45af66cc87dc21409b.mockapi.io/property_data"
    );
    const actualData = await res.json();
    setData(actualData);
    console.log("data", actualData);
  };

  const arry = Object.keys(data);

  const gotoUpdate = (Pid) => {
    let path = "/Update";
    Navigate(path, { state: { id: Pid } });
  };

  const gotoProject = () => {
    let path = "/Project";
    Navigate(path);
  };

  const check = () => {
    if (propsData === null) {
      gotoLogin();
    } else {
      getData();
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <>
      <div className="container ">
        <div calssName="heading text-center">
          {" "}
          <h1>Rental Properties by Shreyansh</h1>{" "}
        </div>

        <div>
          <button
            className="btn btn-success btn-outline-light"
            onClick={gotoProject}
          >
            My Projects
          </button>
          <button
            className="btn btn-primary btn-outline-light"
            onClick={gotoCreate}
          >
            Create new property data
          </button>
          <button
            className="btn btn-success btn-outline-light"
            onClick={gotoSearch}
          >
            Search Property by ID
          </button>
          <Logout />
        </div>
        {propsData != null ? <h3>Welcome {propsData.data.full_name}</h3> : null}
        <div className=" table-responsive text-center">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Sr. no</th>
                <th>Name of Property</th>
                <th>Adress of Property</th>
                <th>Property rent</th>
                <th>Property Details</th>
              </tr>
            </thead>
            <tbody className="table-bordered  table-active table-primary">
              {arry.map((value) => {
                return (
                  <>
                    <tr className="justify-content-center table-hover text-center">
                      <td>{data[value].id}</td>
                      <td>{data[value].name}</td>
                      <td>{data[value].address}</td>
                      <td>{data[value].rent}</td>
                      <td>{data[value].property_details}</td>
                      <div>
                        <button
                          className="btn btn-sm btn-warning btn-outline-light"
                          onClick={() => gotoUpdate(data[value].id)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-sm btn-danger btn-outline-light"
                          onClick={() => deletePost(data[value].id)}
                        >
                          Delete
                        </button>
                      </div>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Base;
