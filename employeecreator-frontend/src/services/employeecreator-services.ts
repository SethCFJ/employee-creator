// import { EventCalenderData } from "../components/AddEventForm/schema";
import { EmployeeData } from "../components/AddEmployeeForm/schema";
import { EmployeeResponse } from "./api-response.interface";

const baseUrl = import.meta.env.VITE_APP_BACKEND_BASE_URL;

export const getAllEmployees = async (): Promise<EmployeeResponse[]> => {
  const response = await fetch(baseUrl + "/employees");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
};

export const getEventById = async (id: number): Promise<EmployeeResponse> => {
  const response = await fetch(`${baseUrl}/employees/${id}`);
  if (!response.ok) {
    console.log(response.status);
    throw new Error("Failed to fetch event");
  }
  return await response.json();
};

export const createEmployee = async (
  data: EmployeeData
): Promise<EmployeeResponse> => {
  const response = await fetch(baseUrl + "/employees", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error("Error creating new employee");
  }
  return await response.json();
};

export const updateEmployee = async (
  id: number,
  data: EmployeeData
): Promise<EmployeeResponse> => {
  const response = await fetch(`${baseUrl}/employees/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error("Error updating Employee");
  }
  return await response.json();
};

export const deleteEmployee = async (id: number) => {
  const response = await fetch(`${baseUrl}/employees/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error("Error deleting employee");
  }
  return;
};
