import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [Pname, setName] = useState("");
  const [Paddrs, setAddrs] = useState("");
  const [Prent, setRent] = useState(0);
  const [Pdetails, setDetails] = useState("");

  let navigate = useNavigate();

  const postdata = () => {
    let api_data = {
      name: Pname,
      address: Paddrs,
      rent: Prent,
      property_details: Pdetails,
    };

    const res = axios({
      method: "post",
      url: "https://63610b45af66cc87dc21409b.mockapi.io/property_data",
      data: api_data,
    });
    return res;
  };

  const apiData = {
    name: Pname,
    address: Paddrs,
    rent: Prent,
    property_details: Pdetails,
  };

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://63610b45af66cc87dc21409b.mockapi.io/property_data",
        apiData
      );
      let data = response.data.data;
      let headers = response.headers;
      console.log(response);
      navigate("/");
    } catch (error) {
      alert(error.response.data.errors.full_messages[0]);
    }
  };

  return (
    <>
      <h1>Create page</h1>
      <form onSubmit={createAccount}>
        <pre>
          <tr>
            Name of Property :{" "}
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Property Name"
            />
          </tr>
          <br />
          <tr>
            Adress of Property :{" "}
            <input
              onChange={(e) => setAddrs(e.target.value)}
              placeholder="Property Adress"
            />
          </tr>
          <br />
          <tr>
            Property Rent :{" "}
            <input
              onChange={(e) => setRent(e.target.value)}
              placeholder="Property Rent"
            />
          </tr>
          <br />
          <tr>
            Property Details :{" "}
            <input
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Property Details"
            ></input>
          </tr>
          <br />

          <button type="submit">Submit</button>
        </pre>
      </form>
    </>
  );
};

export default Create;
