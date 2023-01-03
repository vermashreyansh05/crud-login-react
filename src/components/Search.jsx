import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [unique, setUnique] = useState("asf");

  let Navigate = useNavigate();

  const gotoBase = () => {
    let path = "/";
    Navigate(path);
  };

  const getData = async (e) => {
    e.preventDefault();
    const resp = await axios.get(
      `https://63610b45af66cc87dc21409b.mockapi.io/property_data/${id}`
    );
    const searchData = resp.data;
    setUnique(searchData);
    setData(searchData);
  };
  const arry = Object.keys(data);
  debugger;
  console.log("arry", arry);

  const showData = () => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Sr. no</th>
              <th>Name of Property</th>
              <th>Adress of Property</th>
              <th>Property rent</th>
              <th>Property Details</th>
            </tr>
          </thead>

          <tbody>
            {arry.map((value) => {
              return (
                <>
                  <tr>
                    <td>{arry[value].id}</td>
                    <td>{arry[value].name}</td>
                    <td>{arry[value].address}</td>
                    <td>{arry[value].rent}</td>
                    <td>{arry[value].property_details}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <form onSubmit={getData}>
        <table>
          <tr>
            <input
              type="text"
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter ID to Search"
            />
          </tr>
          <tr>
            <button type="submit">Search</button>
            <button onClick={gotoBase}>Home Page</button>
          </tr>
        </table>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sr. no</th>
              <th>Name of Property</th>
              <th>Adress of Property</th>
              <th>Property rent</th>
              <th>Property Details</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.rent}</td>
              <td>{data.property_details}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Search;
