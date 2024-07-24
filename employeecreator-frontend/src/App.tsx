import { useEffect } from "react";
import { getAllEmployees } from "./services/employeecreator-services";
import Banner from "./components/Banner/Banner";
import EmployeeList from "./components/EmployeeList/EmployeeList";

import "./components/Toast/Toast.module.scss";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Banner />
      <EmployeeList />
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
