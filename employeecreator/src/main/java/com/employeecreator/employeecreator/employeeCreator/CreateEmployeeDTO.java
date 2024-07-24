package com.employeecreator.employeecreator.employeeCreator;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateEmployeeDTO {
  @NotBlank
  private String firstName;
  
  private String middleName;
  @NotBlank
  private String lastName;
  @NotBlank
  private String email;
  @NotBlank
  private String address;
  @NotBlank
  private String mobileNumber;
  @NotNull
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
    return "CreateEmployeeDTO [firstName=" + firstName + ", middleName=" + middleName + ", lastName=" + lastName
        + ", Email=" + email + ", address=" + address + ", mobileNumber=" + mobileNumber + ", hoursPerWeek="
        + hoursPerWeek + "]";
  }

  
}
