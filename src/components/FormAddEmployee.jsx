import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddEmployee = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/data", {
        name: name,
        company: company,
      });
      navigate("/employee");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div className="sm:ml-64">
        <h1 className="text-lg font-bold sm:pt-14 px-4">Employee</h1>
        <h2 className="px-4">Add New Employee</h2>
      </div>

      <div className="p-4 sm:ml-64">
        <div className="p-4 shadow-sm bg-white border-gray-200 dark:border-gray-700 mt-4">
          <form onSubmit={saveEmployee}>
            <h1 className="text-red-600 text-center">{msg}</h1>
            <div className="mb-6 px-4">
              <label
                htmlFor="name"
                className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
              ></input>
            </div>
            <div className="mb-6 px-4">
              <label
                htmlFor="email"
                className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company"
              ></input>
            </div>

            <div className="px-4 mb-4">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[80px] py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddEmployee;
