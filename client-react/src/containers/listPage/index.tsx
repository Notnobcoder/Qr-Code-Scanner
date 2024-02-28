import axios from "axios";
import React, { useEffect, useState } from "react";
import { QrCodeComponent } from "../../components/QrComponent";
import { Link } from "react-router-dom";

interface EmployeeList {
  _id: string;
  EmployeeName: string;
  EmployeeId: string;
  EmployeePhoneNumber: number;
  EmployeeEmail: string;
  EmployeeBloodGroup: string;
}

const listPage = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    await axios
      .get("http://localhost:8000/authDataGet")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <section className="antialiased bg-gray-100 text-gray-600 h-[94vh] px-4">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <Link to={"/"}>
              <h3> Back to Home </h3>
            </Link>
            <h2 className="font-semibold text-gray-800">Employee Details</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Employee Id</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Employee Name
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Employee PhoneNumber
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Employee Email
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Blood Group
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data.map((data: EmployeeList, key) => (
                    <tr key={key}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {data.EmployeeId}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left capitalize">
                          {data.EmployeeName}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {data.EmployeePhoneNumber}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{data.EmployeeEmail}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">
                          {data.EmployeeBloodGroup}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <QrCodeComponent id={data.EmployeeId} />
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <Link to={`/employee/${data._id}`}>
                          <button className="bg-green-500 flex justify-center items-center w-full text-white px-4 py-2 rounded-md focus:outline-none">
                            Show More
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default listPage;
