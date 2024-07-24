package com.employeecreator.employeecreator.employeeCreator;

import java.util.List;
import java.util.Optional;

import javax.swing.text.html.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.Column;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class EmployeeCreatorService {
  @Autowired
  private EmployeeCreatorRepository repo;

  public Employee createEmployee(CreateEmployeeDTO data) {
    Employee newEmployee = new Employee(); 
    newEmployee.setFirstName(data.getFirstName().trim());
    newEmployee.setMiddleName(data.getMiddleName().trim());
    newEmployee.setLastName(data.getLastName().trim());
    newEmployee.setAddress(data.getAddress().trim());
    newEmployee.setEmail(data.getEmail().trim());
    newEmployee.setHoursPerWeek(data.getHoursPerWeek());
    newEmployee.setMobileNumber(data.getMobileNumber().trim());
    return this.repo.save(newEmployee);
  }

  public List<Employee> findAllEmployees() {
    return this.repo.findAll();
  }

  public Optional<Employee> getEmployeeById(Long id) {
    return this.repo.findById(id);
  }

  public boolean deleteById(Long id) {
    Optional<Employee> maybeEmployee = this.getEmployeeById(id);
    if(maybeEmployee.isEmpty()) {
      return false;
    }
    this.repo.delete(maybeEmployee.get());
    return true;
  }

  public Optional<Employee> updateEvent(Long id, @Valid UpdateEmployeeDTO data) {
    Optional<Employee> maybeEmployee = this.getEmployeeById(id);
    Employee foundEmployee = maybeEmployee.get();
    String newFirstName = data.getFirstName();
    if(newFirstName != null) {
      foundEmployee.setFirstName(newFirstName.trim());
    }
    String newMiddleName = data.getMiddleName();
    if(newMiddleName != null) {
      foundEmployee.setMiddleName(newMiddleName.trim());
    }
    String newLastName = data.getLastName();
    if(newLastName != null) {
      foundEmployee.setLastName(newLastName.trim());
    }
    String newEmail = data.getEmail();
    if(newEmail != null) {
      foundEmployee.setEmail(newEmail.trim());
    }
    String newAddress = data.getAddress();
    if(newAddress != null) {
      foundEmployee.setAddress(newAddress.trim());
    }
    String newMobileNumber = data.getMobileNumber();
    if(newMobileNumber != null) {
      foundEmployee.setMobileNumber(newMobileNumber.trim());
    }
    Number newHoursPerWeek = data.getHoursPerWeek();
    if(newHoursPerWeek != null) {
      foundEmployee.setHoursPerWeek(newHoursPerWeek);
    }
    Employee updatedEmployee = this.repo.save(foundEmployee);
    return Optional.of(updatedEmployee);
  }


}
