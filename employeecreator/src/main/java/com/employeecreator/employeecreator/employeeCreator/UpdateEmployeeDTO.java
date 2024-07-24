package com.employeecreator.employeecreator.employeeCreator;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Pattern;

public class UpdateEmployeeDTO {

  @Pattern(regexp = ".*\\S.*", message = "Name cannot be empty")
  private String firstName;
  
  private String middleName;
  @Pattern(regexp = ".*\\S.*", message = "Name cannot be empty")
  private String lastName;
  @Pattern(regexp = ".*\\S.*", message = "Name cannot be empty")
  private String email;
  @Pattern(regexp = ".*\\S.*", message = "Name cannot be empty")
  private String address;
  @Pattern(regexp = ".*\\S.*", message = "Name cannot be empty")
  private String mobileNumber;
  
  private Number hoursPerWeek;

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getMiddleName() {
    return middleName;
  }

  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getMobileNumber() {
    return mobileNumber;
  }

  public void setMobileNumber(String mobileNumber) {
    this.mobileNumber = mobileNumber;
  }

  public Number getHoursPerWeek() {
    return hoursPerWeek;
  }

  public void setHoursPerWeek(Number hoursPerWeek) {
    this.hoursPerWeek = hoursPerWeek;
  }

  @Override
  public String toString() {
    return "UpdateEmployeeDTO [firstName=" + firstName + ", middleName=" + middleName + ", lastName=" + lastName
        + ", Email=" + email + ", address=" + address + ", mobileNumber=" + mobileNumber + ", hoursPerWeek="
        + hoursPerWeek + "]";
  }

  
}
