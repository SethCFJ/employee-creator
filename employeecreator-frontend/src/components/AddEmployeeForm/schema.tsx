import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().min(1, { message: "Address is required" }),
  mobileNumber: z.string().min(1, { message: "Mobile number is required" }),
  hoursPerWeek: z
    .number()
    .nonnegative({ message: "Hours per week must be a non-negative number" }),
});

export type EmployeeData = z.infer<typeof schema>;
