import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [EmployeeName, setEmployeeName] = useState("");
  const [EmployeeId, setEmployeeId] = useState("");
  const [EmployeePhoneNumber, setEmployeePhone] = useState("");
  const [EmployeeEmail, setEmployeeEmail] = useState("");
  const [EmployeeBloodGroup, setEmployeeGroup] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/authDataPost", {
        EmployeeName,
        EmployeeId,
        EmployeePhoneNumber,
        EmployeeEmail,
        EmployeeBloodGroup,
      })
      .then(() => {
        alert("data submited");
        navigate("/employee-list");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                i
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create Employee </h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Add your details to get Qr Code Generated
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Employee Id</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Lovoj101"
                    onChange={(e) => setEmployeeId(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Employee Name</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Add your name"
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Employee Email</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="lovoj@gmail.com"
                    onChange={(e) => setEmployeeEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Employee Phone Number</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="+91xxxxxxxxx"
                    onChange={(e) => setEmployeePhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Employee Blood Group</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="A++"
                    onChange={(e) => setEmployeeGroup(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                  type="reset"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>{" "}
                  Cancel
                </button>
                <button
                  className="bg-green-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  type="submit"
                >
                  <Link to={"/employee-list"}>Show List</Link>
                </button>
                <button
                  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
