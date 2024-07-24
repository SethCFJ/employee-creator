import React from "react";
import { EmployeeData } from "../../components/AddEmployeeForm/schema";
import AddEmployeeForm from "../AddEmployeeForm/AddEmployeeForm";
import { EmployeeResponse } from "../../services/api-response.interface";
import styles from "./AddEmployeeModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
interface AddEmployeeModalProps {
  onClose: () => void;
  onAddEmployee: (newEmployee: EmployeeData) => void;
  onEditEmployee: (updatedEmployee: EmployeeData) => void;
  employee: EmployeeResponse | null;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
  onClose,
  onAddEmployee,
  onEditEmployee,
  employee,
}) => {
  const handleSubmit = (data: EmployeeData) => {
    console.log("Form data:", data);
    if (employee) {
      onEditEmployee(data);
    } else {
      onAddEmployee(data);
    }
    onClose();
  };

  return (
    <dialog className={styles.dialog} open>
      <button className={styles.close} onClick={onClose}>
        <FontAwesomeIcon
          className={styles.close__button}
          icon={faCircleXmark}
        />
      </button>
      <AddEmployeeForm
        onSubmit={handleSubmit}
        defaultValues={
          employee
            ? {
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
                address: employee.address,
                mobileNumber: employee.mobileNumber,
                hoursPerWeek: employee.hoursPerWeek,
                middleName: employee.middleName,
              }
            : undefined
        }
      />
    </dialog>
  );
};

export default AddEmployeeModal;
