import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EmployeeData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEmployee } from "../../services/employeecreator-services";
import styles from "./AddEmployeeForm.module.scss";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AddEmployeeFormProps {
  onSubmit: (data: EmployeeData) => void;
  defaultValues?: EmployeeData;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const { register, handleSubmit } = useForm<EmployeeData>({ defaultValues });

  const onFormSubmit: SubmitHandler<EmployeeData> = (data) => {
    onSubmit(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__name}>
        <label htmlFor="firstName">First Name:</label>
        <input
          className={styles.form__input}
          id="firstName"
          {...register("firstName")}
          placeholder="First Name"
          required
        />
      </div>
      <div className={styles.form__middleName}>
        <label htmlFor="middleName">Middle Name:</label>
        <input
          className={styles.form__input}
          id="middleName"
          {...register("middleName")}
          placeholder="Middle Name"
        />
      </div>
      <div className={styles.form__name}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          className={styles.form__input}
          id="lastName"
          {...register("lastName")}
          placeholder="Last Name"
          required
        />
      </div>
      <div className={styles.form__email}>
        <label htmlFor="Email">Email:</label>
        <input
          className={styles.form__input}
          id="Email"
          {...register("email")}
          placeholder="Employee Email"
          required
        />
      </div>
      <div className={styles.form__address}>
        <label htmlFor="address">Address:</label>
        <input
          className={styles.form__input}
          id="address"
          {...register("address")}
          placeholder="Employees Address"
          required
        />
      </div>
      <div className={styles.form__mobileNumber}>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          className={styles.form__input}
          id="mobileNumber"
          type="tel"
          {...register("mobileNumber")}
          placeholder="Employee Phone Number"
          required
        />
      </div>
      <div className={styles.form__hoursPerWeek}>
        <label htmlFor="hoursPerWeek">Hours per Week:</label>
        <input
          className={styles.form__input}
          id="hoursPerWeek"
          type="number"
          {...register("hoursPerWeek")}
          placeholder="Hours Per Week"
          required
        />
      </div>

      <button className={styles.submit} type="submit">
        <FontAwesomeIcon icon={faFloppyDisk} />
        {"     "}Save
      </button>
    </form>
  );
};

export default AddEmployeeForm;
