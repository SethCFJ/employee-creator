package com.employeecreator.employeecreator.employeeCreator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Employees")
public class Employee {
  @Id 
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column
  private String firstName;
  @Column
  private String middleName;
  @Column
  private String lastName;
  @Column
  private String email;
  @Column
  private String address;
  @Column
  private String mobileNumber;
  @Column
  private Number hoursPerWeek;
  Employee() {}
  
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public void setMobileNumber(String mobileNumber) {
    this.mobileNumber = mobileNumber;
  }
  public void setHoursPerWeek(Number hoursPerWeek) {
    this.hoursPerWeek = hoursPerWeek;
  }

  public Long getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getMiddleName() {
    return middleName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getEmail() {
    return email;
  }

  public String getAddress() {
    return address;
  }

  public String getMobileNumber() {
    return mobileNumber;
  }

  public Number getHoursPerWeek() {
    return hoursPerWeek;
  }

  @Override
  public String toString() {
    return "Employee [id=" + id + ", firstName=" + firstName + ", middleName=" + middleName + ", lastName=" + lastName
        + ", Email=" + email + ", address=" + address + ", mobileNumber=" + mobileNumber + ", hoursPerWeek="
        + hoursPerWeek + "]";
  }

  
}
