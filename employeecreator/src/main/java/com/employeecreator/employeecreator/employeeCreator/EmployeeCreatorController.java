package com.employeecreator.employeecreator.employeeCreator;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeecreator.employeecreator.exceptions.NotFoundException;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/employees")
public class EmployeeCreatorController {
@Autowired
  private EmployeeCreatorService employeeCreatorService;

   private static final Logger logger = LogManager.getLogger();

  @PostMapping()
  public ResponseEntity<Employee> createItem(@Valid @RequestBody CreateEmployeeDTO data) {
    Employee createdItem = this.employeeCreatorService.createEmployee(data);
    logger.info("Created new employee: " + createdItem.toString());
    return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
    
  }

  @GetMapping()
  public ResponseEntity<List<Employee>> findAllItems() {
    List<Employee> allToDoItems = this.employeeCreatorService.findAllEmployees();
    logger.info("Retrieved " + allToDoItems.size() + " employee/s");
    return new ResponseEntity<>(allToDoItems, HttpStatus.OK);
  }

   @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id) throws NotFoundException {
        Optional<Employee> maybeEmployee = this.employeeCreatorService.getEmployeeById(id);
        logger.throwing(new NotFoundException(Employee.class, id));
        Employee foundEmployee = maybeEmployee.orElseThrow(() -> new NotFoundException(Employee.class, id));
        logger.info("Retrieved employee with id of " + foundEmployee.getId());
        return new ResponseEntity<>(foundEmployee, HttpStatus.OK);
    }

  @PatchMapping("/{id}")
    public ResponseEntity<Employee> updateEvent(@PathVariable Long id, @Valid @RequestBody UpdateEmployeeDTO data) throws NotFoundException {
        Optional<Employee> maybeEvent = this.employeeCreatorService.updateEvent(id, data);
        logger.throwing(new NotFoundException(Employee.class, id));
        Employee updatedEmployee = maybeEvent.orElseThrow(() -> new NotFoundException(Employee.class, id));
        logger.info("Updated employee with id of " + updatedEmployee.getId());
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
        
    }
  
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteItemById(@PathVariable Long id) throws NotFoundException {
    boolean isDeleted = this.employeeCreatorService.deleteById(id);
    if(!isDeleted) {
      // throw new NotFoundException(ToDoItem.class, id);
      logger.throwing(new NotFoundException(Employee.class, id));
      throw new NotFoundException(Employee.class, id);
    }
    logger.info("Deleting employee with id of " + id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }


  
}
