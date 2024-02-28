import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QrCodeComponent } from "../../components/QrComponent";

interface EmployeeList {
  _id: string;
  EmployeeName: string;
  EmployeeId: string;
  EmployeePhoneNumber: number;
  EmployeeEmail: string;
  EmployeeBloodGroup: string;
}

const EmployeeList = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getAllData = async () => {
    await axios
      .get(`http://localhost:8000/authDataGet/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getAllData();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#F3F4F6] h-[95vh]">
      <h1 className="text-3xl mb-5">Employeee List page</h1>
      <div className="p-[4rem] bg-[#ffffff] rounded-lg m-[1rem]">
        <div className="flex items-center gap-10">
          <QrCodeComponent id={data.EmployeeId} />
          <h2 className="capitalize text-4xl">{data.EmployeeName}</h2>
        </div>
        <div className="mt-[5rem]">
          <div>
            <h3>{data.EmployeeId}</h3>
            <h3>{data.EmployeePhoneNumber}</h3>
            <h3>{data.EmployeeEmail}</h3>
            <h3>{data.EmployeeBloodGroup}</h3>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Link to={"/employee-list"}>
          <h1 className="p-2 bg-blue-600 rounded-lg text-white">Back</h1>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;
