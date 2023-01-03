import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Base from "./components/base";
import Create from "./components/create";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Update from "./components/update";
import Login from "./components/Login/LoginPage";
import Register from "./components/Login/Register";
import Project from "./components/project";
import CreateProject from "./components/createProject";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="createProject" element={<CreateProject />} />
        </Routes>
        <Routes>
          <Route path="Register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Base />} />
        </Routes>
        <Routes>
          <Route path="Update" element={<Update />} />
        </Routes>
        <Routes>
          <Route path="Create" element={<Create />} />
        </Routes>
        <Routes>
          <Route path="Search" element={<Search />} />
        </Routes>
        <Routes>
          <Route path="Project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
