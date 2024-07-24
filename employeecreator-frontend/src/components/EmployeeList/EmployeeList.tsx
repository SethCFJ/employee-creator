import React, { useEffect, useState } from "react";
import styles from "./Employee.module.scss";
import {
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
  createEmployee,
} from "../../services/employeecreator-services";
import { EmployeeResponse } from "../../services/api-response.interface";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import AddEmployeeModal from "../AddEmployeeModal/AddEmployeeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { EmployeeData } from "../../components/AddEmployeeForm/schema";
import { toast, ToastContainer } from "react-toastify";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState<EmployeeResponse[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] =
    useState<EmployeeResponse | null>(null);

  useEffect(() => {
    getAllEmployees()
      .then((data) => setEmployeeList(data))
      .catch((e) => console.warn(e));
  }, []);

  const handleAddEmployee = async (newEmployeeData: EmployeeData) => {
    try {
      const employee = await createEmployee(newEmployeeData);
      setEmployeeList((prevList) => [...prevList, employee]);
      toast("Employee created successfully");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleEditEmployee = async (updatedEmployeeData: EmployeeData) => {
    if (!currentEmployee) return;

    try {
      const updatedEmployee = await updateEmployee(
        currentEmployee.id,
        updatedEmployeeData
      );
      setEmployeeList((prevList) =>
        prevList.map((employee) =>
          employee.id === currentEmployee.id ? updatedEmployee : employee
        )
      );
      toast("Employee updated successfully");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDeleteEmployee = async (id: number) => {
    try {
      await deleteEmployee(id);

      const updatedList = await getAllEmployees();
      setEmployeeList(updatedList);
      toast.success("Employee deleted successfully");
    } catch (error) {
      console.error("Error deleting employee:", error);
    } finally {
      const updatedList = await getAllEmployees();
      setEmployeeList(updatedList);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Employees</h1>
        <button
          className={styles.header__createButton}
          onClick={() => {
            setCurrentEmployee(null);
            setModalOpen(true);
          }}
        >
          Create Employee
          <FontAwesomeIcon
            className={styles.header__createButton__icon}
            icon={faPlus}
          />
        </button>
      </div>

      <div className={styles.list}>
        <div className={styles.list__labels}>
          <h3 className={styles.list__text}>First Name</h3>
          <h3 className={styles.list__text}>Middle Name</h3>
          <h3 className={styles.list__text}>Last Name</h3>
          <h3 className={styles.list__text}>Email</h3>
          <h3 className={styles.list__text}>Address</h3>
          <h3 className={styles.list__text}>Mobile #</h3>
          <h3 className={styles.list__text}>Hours per week</h3>
          <h3 className={styles.list__text}>Action</h3>
        </div>
        <div className={styles.list__items}>
          {employeeList.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onEdit={() => {
                setCurrentEmployee(employee);
                setModalOpen(true);
              }}
              onDelete={() => handleDeleteEmployee(employee.id)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <AddEmployeeModal
          onClose={() => setModalOpen(false)}
          onAddEmployee={handleAddEmployee}
          onEditEmployee={handleEditEmployee}
          employee={currentEmployee}
        />
      )}
    </div>
  );
};

export default EmployeeList;
