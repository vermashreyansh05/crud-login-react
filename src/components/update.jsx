import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState();
  const [Uid, setPid] = useState();
  const [Uname, setPname] = useState();
  const [Uaddress, setPaddrs] = useState();
  const [Urent, setPrent] = useState();
  const [Uproperty_details, setPdetails] = useState();

  let Navigate = useNavigate();

  const gotoBase = () => {
    let path = "/";
    Navigate(path);
  };

  const location = useLocation();
  const dataId = location.state.id;

  const getData = async () => {
    console.log(location.state.id);
    const resp = await axios.get(
      `https://63610b45af66cc87dc21409b.mockapi.io/property_data/${dataId}`
    );
    const searchData = resp.data;
    setData(searchData);
    setNewData(data);
    setPid(searchData.id);
    setPname(searchData.name);
    setPaddrs(searchData.address);
    setPrent(searchData.rent);
    setPdetails(searchData.property_details);
  };

  useEffect(() => {
    getData();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    let item = {
      name: Uname,
      address: Uaddress,
      rent: Urent,
      property_details: Uproperty_details,
    };
    const response = await axios.put(
      `https://63610b45af66cc87dc21409b.mockapi.io/property_data/${dataId}`,
      item
    );
    debugger;
    let data = response.data;
    console.log(response);
    gotoBase();
  };

  const updateUser = (data) => {
    setPid(data.id);
    setPname(data.name);
    setPaddrs(data.address);
    setPrent(data.rent);
    setPdetails(data.property_details);
  };
  console.warn("Unameeee....", Uname);

  return (
    <>
      <form>
        <table>
          <pre>
            ID : <input readOnly value={data.id} />
            <br />
            Property Name :{" "}
            <input
              onChange={(e) => {
                setPname(e.target.value);
              }}
              value={Uname}
            />
            <br />
            Address :{" "}
            <input
              onChange={(e) => {
                setPaddrs(e.target.value);
              }}
              value={Uaddress}
            />
            <br />
            Rent :{" "}
            <input
              onChange={(e) => {
                setPrent(e.target.value);
              }}
              value={Urent}
            />
            <br />
            Details :{" "}
            <input
              onChange={(e) => {
                setPdetails(e.target.value);
              }}
              value={Uproperty_details}
            />
            <br />
            <button onClick={updateData}>Update Data</button>
          </pre>
        </table>
      </form>
    </>
  );
};
export default Update;
