import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    const response = await axios.get("http://localhost:5000/data");

    setEmployee(response.data);
  };

  const deleteEmployee = async (employeeId) => {
    await axios.delete(`http://localhost:5000/data/${employeeId}`);
    getEmployee();
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold sm:pt-14 pt-4 px-4 sm:ml-64">
          Employee Data
        </h1>
        <h2 className="px-4 sm:ml-64">List Of Employee</h2>
        <div className="p-4 sm:ml-64">
          <Link
            to="/employee/add"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-4"
          >
            Add
          </Link>
          <div className="p-4 shadow-sm bg-white border-gray-200 dark:border-gray-700 mt-4">
            <div className="relative overflow-x-auto">
              <table className="w-full border-2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 w-[5%]">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3">
                      PIC
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((employee, index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={employee.uuid}
                    >
                      <th
                        scope="row"
                        className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6">{employee.name}</td>
                      <td className="px-6">{employee.company}</td>
                      <td className="px-6">{employee.user.name}</td>
                      <td className="px-6 text-center">
                        <Link
                          to={`/employee/edit/${employee.uuid}`}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-[4px]"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteEmployee(employee.uuid)}
                          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 my-[4px]"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
