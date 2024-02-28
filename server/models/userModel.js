import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    EmployeeName: { type: String, required: true },
    EmployeeId: { type: String, required: true },
    EmployeePhoneNumber: { type: Number, required: true },
    EmployeeEmail: { type: String, required: true },
    EmployeeBloodGroup: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userScheme);
export default User;
