import React from "react";
import styles from "./EmployeeCard.module.scss";
import { EmployeeResponse } from "../../services/api-response.interface";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteEmployee } from "../../services/employeecreator-services";

interface EmployeeCardProps {
  employee: EmployeeResponse;
  onEdit: (employee: EmployeeResponse) => void;
  onDelete: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onEdit,
  onDelete,
}) => {
  const handleDelete = async () => {
    try {
      await deleteEmployee(employee.id);
      onDelete(employee.id);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <>
      <p className={styles.text}>{employee.firstName}</p>
      <p className={styles.text}>{employee.middleName}</p>
      <p className={styles.text}>{employee.lastName}</p>
      <p className={styles.text}>{employee.email}</p>
      <p className={styles.text}>{employee.address}</p>
      <p className={styles.text}>{employee.mobileNumber}</p>
      <p className={styles.text}>{employee.hoursPerWeek}</p>
      <div className={styles.text}>
        <div className={styles.icons}>
          <button className={styles.button} onClick={() => onEdit(employee)}>
            <FontAwesomeIcon className={styles.edit} icon={faPenToSquare} />
          </button>

          <button className={styles.button} onClick={handleDelete}>
            <FontAwesomeIcon className={styles.delete} icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
