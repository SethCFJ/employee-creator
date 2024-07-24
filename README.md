# Employee Creator App

## Demo & Snippets

## Requirements / Purpose

The purpose of this project is to allow users to add employees to a database that are then deployed on the front end as a list.

- User is able to edit each employee
- Data values are restricted in accordance with a schema to ensure that there is correct data input
- A modal should appear for the user to create/edit an employee
- Backend requirements:
  - Create a new employee
  - Update an existing employee
  - Delete an employee
  - Retrieve all employees from the database
  - Retrieve a single employee from the database

---

## Build Steps

- Run "npm run build && npm run dev" from within the ./employeecreator-frontend/ folder
- Run the "employeecreator\src\main\java\com\employeecreator\employeecreator\EmployeecreatorApplication.java" file within terminal to initiate backend

---

## Design Goals / Approach

- Keep the design as simple as possible and to not overcomplicate the user experience.
- Keep the action buttons on the list as to not bring up a whole modal to make the changes.

---

## Features

- CRUD operations for employee objects
- Displays all employees on list and keeps them actively updated from the backend
- Ensures that only appropriate information is entered into forms

---

## Known issues

- Testing not currently working on the backend
- Delete sometimes deletes twice causing an error message on the frontend as it tries to delete an unknown employee

---

## Future Goals

- To allow users to order and filter by each list value
- Create intricate testing of the frontend
- To have other pages/routes for more detailed views of individual employees with more information
- Toast notifications

---

## What did you struggle with?

- Ran into many typing issues between the front and backend, mainly due to trying to force certain types.
- Vitest configuration errors causing the testing to not be completed when I had liked

---

## Licensing Details

- Unlicensed

---
